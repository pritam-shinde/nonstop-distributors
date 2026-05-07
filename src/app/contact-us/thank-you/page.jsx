import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ContactPageLayout from "../ContactPageLayout";
import {
  CONTACT_SUBMISSION_COOKIE,
  isContactSubmissionFresh,
  parseContactSubmission,
} from "@/lib/contactSubmissionCookie";

export const metadata = {
  title: "Thank You | Nonstop Distributors",
  description:
    "Thank you for contacting Nonstop Distributors. Our team has received your enquiry and will get back to you shortly.",
  alternates: {
    canonical: "https://www.nonstopdistributors.com/contact-us/thank-you/",
  },
  robots: "noindex, nofollow",
};

const ThankYouPage = async () => {
  const cookieStore = await cookies();
  const submission = parseContactSubmission(
    cookieStore.get(CONTACT_SUBMISSION_COOKIE)?.value,
  );
  const freshSubmission = isContactSubmissionFresh(submission)
    ? submission
    : null;

  if (!freshSubmission) {
    redirect("/contact-us");
  }

  const firstName = freshSubmission?.fullname?.trim()?.split(/\s+/)?.[0];

  return (
    <ContactPageLayout>
      <section className="contact-one">
        <div className="container">
          <div className="contact-one__wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <div
                  className="contact-one__form text-center"
                  style={{
                    background: "#ffffff",
                    borderRadius: "28px",
                    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.14)",
                    padding: "clamp(32px, 5vw, 64px)",
                  }}
                >
                  <div
                    style={{
                      width: "88px",
                      height: "88px",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(135deg, #de0e2b 0%, #0e222a 100%)",
                      color: "#ffffff",
                      fontSize: "42px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    OK
                  </div>

                  <p
                    className="mb-2"
                    style={{
                      color: "#de0e2b",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                    }}
                  >
                    MESSAGE RECEIVED
                  </p>

                  <h1
                    style={{
                      color: "#0E222A",
                      fontSize: "clamp(34px, 5vw, 56px)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      marginBottom: "20px",
                    }}
                  >
                    Thank you{firstName ? `, ${firstName}` : ""}!
                  </h1>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "18px",
                      lineHeight: 1.8,
                      maxWidth: "700px",
                      margin: "0 auto 16px",
                    }}
                  >
                    Your enquiry has been submitted successfully. Our team will
                    review the details and get back to you shortly.
                  </p>

                  {freshSubmission?.email ? (
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "16px",
                        marginBottom: "32px",
                      }}
                    >
                      We will follow up at{" "}
                      <strong>{freshSubmission.email}</strong>.
                    </p>
                  ) : (
                    <div style={{ marginBottom: "32px" }} />
                  )}

                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link
                      href="/services/"
                      className="procounsel-btn text-uppercase"
                    >
                      <i>View Services</i>
                      <span>View Services</span>
                    </Link>
                    <a
                      href="tel:8956641833"
                      className="procounsel-btn text-uppercase"
                    >
                      <i>Call Us</i>
                      <span>Call Us</span>
                    </a>
                  </div>
                  <div className="mt-4">
                    <Link href="/" className="text-uppercase">
                      <span>Back To Home</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContactPageLayout>
  );
};

export default ThankYouPage;
