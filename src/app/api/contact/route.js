import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const allowedEnquiryTypes = {
  distribution: "Distribution Partnership",
  "bulk-order": "Bulk Order",
  retail: "Retail Supply",
  logistics: "Logistics Support",
  support: "Customer Support",
  other: "Other",
};

async function verifyRecaptcha({ token }) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return {
      ok: false,
      reason: "Server misconfigured: missing recaptcha secret",
    };
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
      <tr><td><strong>Full Name : </strong></td><td>${esc(payload.fullname)}</td></tr>
      <tr><td><strong>Company Title : </strong></td><td>${esc(payload.companyname || "-")}</td></tr>
      <tr><td><strong>Email Address : </strong></td><td>${esc(payload.email)}</td></tr>
      <tr><td><strong>Phone Number : </strong></td><td>${esc(payload.phonenumber)}</td></tr>
      <tr><td><strong>Enquiry Type : </strong></td><td>${allowedEnquiryTypes[payload.enquiryType]}</td></tr>
      <tr><td><strong>Message : </strong></td><td>${esc(payload.subject)}</td></tr>
    </table>
  </div>
  `;
}

function getTransporter() {
  const service = process.env.SMTP_SERVICE;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!service || !user || !pass) {
    throw new Error("Server misconfigured: missing SMTP settings");
  }

  return nodemailer.createTransport({ service, auth: { user, pass } });
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Full name validation
    const _fullname = body?.fullname?.trim();
    if (!_fullname) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 },
      );
    } else if (_fullname.length < 4) {
      return NextResponse.json(
        { success: false, message: "Full name must be at least 4 characters" },
        { status: 400 },
      );
    } else if (_fullname.length > 40) {
      return NextResponse.json(
        { success: false, message: "Full name cannot exceed 40 characters" },
        { status: 400 },
      );
    } else if (!/^(?!.*  )[a-zA-Z0-9 ]+$/.test(_fullname)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Full name can only contain letters, digits, and single spaces",
        },
        { status: 400 },
      );
    }

    // Email validation
    const _email = body?.email?.trim();
    if (!_email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 },
      );
    } else if (!/^\S+@\S+\.\S+$/.test(_email)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required" },
        { status: 400 },
      );
    }

    // Company name validation (optional)
    const _companyname = body?.companyname?.trim();
    if (_companyname && _companyname.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name must be at least 8 characters",
        },
        { status: 400 },
      );
    } else if (_companyname && _companyname.length > 40) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name cannot exceed 40 characters",
        },
        { status: 400 },
      );
    }

    // Phone number validation
    const _phonenumber = body?.phonenumber?.trim();
    if (!_phonenumber) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 },
      );
    } else if (!/^\d{10}$/.test(_phonenumber)) {
      return NextResponse.json(
        { success: false, message: "Phone number must be exactly 10 digits" },
        { status: 400 },
      );
    }

    // Enquiry type validation
    if (!body?.enquiryType) {
      return NextResponse.json(
        { success: false, message: "Enquiry type is required" },
        { status: 400 },
      );
    } else if (!allowedEnquiryTypes[body?.enquiryType]) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry type" },
        { status: 400 },
      );
    }

    // Subject validation
    const _subject = body?.subject?.trim();
    if (!_subject) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 },
      );
    } else if (_subject.length < 8) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 8 characters" },
        { status: 400 },
      );
    } else if (_subject.length > 200) {
      return NextResponse.json(
        { success: false, message: "Message cannot exceed 200 characters" },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha({ token: body?.token });
    if (!captcha.ok) {
      return NextResponse.json(
        { success: false, message: captcha.reason || "Captcha failed" },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!from) {
      return NextResponse.json(
        { success: false, message: "Server misconfigured: missing from email" },
        { status: 500 },
      );
    }

    const transporter = getTransporter();

    await transporter.sendMail({
      to,
      from,
      replyTo: _email,
      subject: `Nonstop Distributors | New inquiry (${body.enquiryType}) - ${_fullname}`,
      html: buildHtmlBody(body),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
