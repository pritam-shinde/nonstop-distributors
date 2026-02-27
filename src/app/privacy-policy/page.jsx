import { handlerMetaDetails } from "@/constants/seo";
import ScriptsLoader from "@/components/ScriptsLoader";

export const generateMetadata = () => {
  return handlerMetaDetails("privacy-policy");
};

const PrivacyPolicy = () => {
  const lastUpdated = "February 27, 2026";

  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/bg_why_choose_us.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2">
              LEGAL <span className="fw-bold read-more-btn"> PRIVACY</span>
            </p>
            <h1 className="">Privacy Policy</h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                This policy explains how NONSTOP Distributors collects, uses,
                and protects your information when you use our website.
              </p>
              <p style={{ marginTop: "10px", marginBottom: "0px" }}>
                Last updated: <span className="fw-bold">{lastUpdated}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* content */}
      <section className="section-color" style={{ background: "#0E222A" }}>
        <div className="container text-white" style={{ padding: "60px 0" }}>
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Your privacy <span>matters</span>
            </h2>
            <p className="why-choose-four__content__text text-white font-Merriweather mb-0">
              We collect only what we need to communicate with you and improve
              our services.
            </p>
          </div>

          <div style={{ maxWidth: 980 }}>
            <h3 className="text-white mt-4">Who we are</h3>
            <p className="text-white">
              This website is operated by <strong>NONSTOP Distributors</strong>{" "}
              (“we”, “us”, “our”). If you have questions about this Privacy
              Policy or how we handle data, contact us at{" "}
              <a className="text-white" href="mailto:info@nonstopdistributors.com">
                info@nonstopdistributors.com
              </a>
              .
            </p>

            <h3 className="text-white mt-4">Information we collect</h3>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <strong>Contact details</strong>: name, email, phone number,
                company name, enquiry type, and message when you submit an
                inquiry.
              </li>
              <li className="mb-2">
                <strong>Usage data</strong>: basic technical information (e.g.,
                device, browser, pages visited) collected through standard web
                technologies.
              </li>
              <li className="mb-2">
                <strong>Cookies</strong>: small files used to remember
                preferences and help understand how the site is used.
              </li>
            </ul>

            <h3 className="text-white mt-4">How we use your information</h3>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <strong>Respond to inquiries</strong> and provide requested
                information.
              </li>
              <li className="mb-2">
                <strong>Improve our website</strong> and user experience.
              </li>
              <li className="mb-2">
                <strong>Security & fraud prevention</strong>, including abuse
                prevention for our contact forms.
              </li>
            </ul>

            <h3 className="text-white mt-4">Legal bases</h3>
            <p className="text-white">
              We process personal information as needed to respond to your
              request, operate the site, and protect our systems. Where
              required, we rely on consent (for example, when you submit a
              form).
            </p>

            <h3 className="text-white mt-4">reCAPTCHA</h3>
            <p className="text-white">
              We use Google reCAPTCHA to help protect our forms from spam and
              abuse. reCAPTCHA may collect information about your device and
              behavior to determine whether you are a human user.
            </p>

            <h3 className="text-white mt-4">Embedded content (Google Maps)</h3>
            <p className="text-white">
              Some pages may embed third-party content such as Google Maps.
              Embedded content behaves as if you visited the third-party
              website, which may collect data and use cookies. Please review the
              third party’s policies for details.
            </p>

            <h3 className="text-white mt-4">Sharing of information</h3>
            <p className="text-white">
              We do not sell your personal information. We may share information
              with service providers who help us operate the website and respond
              to inquiries (for example, email delivery providers), subject to
              appropriate safeguards.
            </p>

            <h3 className="text-white mt-4">Data retention</h3>
            <p className="text-white">
              We retain inquiry details as long as necessary to respond and
              maintain business records, unless a longer retention period is
              required by law.
            </p>

            <h3 className="text-white mt-4">Security</h3>
            <p className="text-white">
              We take reasonable measures to protect your information, but no
              website or transmission is completely secure. Please avoid sending
              sensitive personal information via the contact form.
            </p>

            <h3 className="text-white mt-4">Your choices</h3>
            <p className="text-white">
              You may request access, correction, or deletion of your inquiry
              data by emailing{" "}
              <a className="text-white" href="mailto:info@nonstopdistributors.com">
                info@nonstopdistributors.com
              </a>
              . We may need to verify your identity before fulfilling requests.
            </p>

            <h3 className="text-white mt-4">Changes to this policy</h3>
            <p className="text-white">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised “Last updated” date.
            </p>

            <h3 className="text-white mt-4">Contact</h3>
            <p className="text-white mb-0">
              NONSTOP Distributors, 97 Crown Society, Wardha Rd, near Bhawan's
              School, Nagpur, Maharashtra 440005
            </p>
            <p className="text-white">
              Email:{" "}
              <a className="text-white" href="mailto:info@nonstopdistributors.com">
                info@nonstopdistributors.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <ScriptsLoader />
    </>
  );
};

export default PrivacyPolicy;
