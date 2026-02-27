import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isEmail(value) {
  return typeof value === "string" && /^\S+@\S+\.\S+$/.test(value);
}

function sanitizeText(value) {
  if (typeof value !== "string") return "";
  // keep it simple—trim and remove null bytes
  return value.replace(/\0/g, "").trim();
}

async function verifyRecaptcha({ token }) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "Server misconfigured: missing recaptcha secret" };
  }

  if (!token || typeof token !== "string") {
    return { ok: false, reason: "Missing captcha token" };
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = await res.json();

  if (!data?.success) {
    return { ok: false, reason: "Captcha verification failed" };
  }

  // If reCAPTCHA v3 is used, score may exist. Be conservative.
  if (typeof data.score === "number" && data.score < 0.3) {
    return { ok: false, reason: "Captcha score too low" };
  }

  return { ok: true };
}

function buildTextBody(payload) {
  const lines = [
    "New Contact Inquiry (NONSTOP Distributors)",
    "----------------------------------------",
    `Full name: ${payload.fullname}`,
    `Company: ${payload.companyname || "-"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phonenumber}`,
    `Enquiry type: ${payload.enquiryType}`,
    "",
    "Message:",
    payload.subject,
  ];

  return lines.join("\n");
}

function buildHtmlBody(payload) {
  const esc = (s) =>
    String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;">
    <h2 style="margin:0 0 12px;">New Contact Inquiry</h2>
    <p style="margin:0 0 12px;color:#333;">
      You received a new inquiry from <strong>${esc(payload.fullname)}</strong>.
    </p>
    <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
      <tr><td><strong>Full name</strong></td><td>${esc(payload.fullname)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${esc(payload.companyname || "-")}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(payload.email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${esc(payload.phonenumber)}</td></tr>
      <tr><td><strong>Enquiry type</strong></td><td>${esc(payload.enquiryType)}</td></tr>
    </table>
    <h3 style="margin:18px 0 8px;">Message</h3>
    <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px;">
      ${esc(payload.subject)}
    </div>
  </div>
  `;
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Server misconfigured: missing SMTP settings");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const payload = {
      fullname: sanitizeText(body?.fullname),
      companyname: sanitizeText(body?.companyname),
      email: sanitizeText(body?.email),
      phonenumber: sanitizeText(body?.phonenumber),
      enquiryType: sanitizeText(body?.enquiryType),
      subject: sanitizeText(body?.subject),
      token: body?.token,
    };

    if (!payload.fullname) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 }
      );
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!payload.phonenumber || !/^[0-9]{10}$/.test(payload.phonenumber)) {
      return NextResponse.json(
        { success: false, message: "Valid 10-digit phone number is required" },
        { status: 400 }
      );
    }

    if (!payload.enquiryType) {
      return NextResponse.json(
        { success: false, message: "Enquiry type is required" },
        { status: 400 }
      );
    }

    if (!payload.subject) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }

    const captcha = await verifyRecaptcha({ token: payload.token });
    if (!captcha.ok) {
      return NextResponse.json(
        { success: false, message: captcha.reason || "Captcha failed" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@nonstopdistributors.com";
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!from) {
      return NextResponse.json(
        { success: false, message: "Server misconfigured: missing from email" },
        { status: 500 }
      );
    }

    const transporter = getTransporter();

    await transporter.sendMail({
      to,
      from,
      replyTo: payload.email,
      subject: `New inquiry (${payload.enquiryType}) - ${payload.fullname}`,
      text: buildTextBody(payload),
      html: buildHtmlBody(payload),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

