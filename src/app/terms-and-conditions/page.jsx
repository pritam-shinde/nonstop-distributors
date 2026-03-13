import { handlerMetaDetails } from "@/constants/seo";
import ScriptsLoader from "@/components/ScriptsLoader";

export const generateMetadata = () => {
  return handlerMetaDetails("terms-and-conditions");
};

const TermsAndConditions = () => {
  const lastUpdated = "February 27, 2026";

  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/distributor-img/terms-and-conditions.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2">
              LEGAL <span className="fw-bold read-more-btn"> TERMS</span>
            </p>
            <h1 className="">Terms &amp; Conditions</h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                These terms govern your use of the NONSTOP Distributors website.
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
              Website <span>terms</span>
            </h2>
            <p className="why-choose-four__content__text text-white font-Merriweather mb-0">
              Please read these Terms carefully before using our website.
            </p>
          </div>

          <div style={{ maxWidth: 980 }}>
            <h3 className="text-white mt-4">Acceptance of terms</h3>
            <p className="text-white">
              By accessing or using this website, you agree to be bound by these
              Terms &amp; Conditions. If you do not agree, please do not use the
              website.
            </p>

            <h3 className="text-white mt-4">About NONSTOP Distributors</h3>
            <p className="text-white">
              This website is operated by <strong>NONSTOP Distributors</strong>
              . For inquiries, contact{" "}
              <a className="text-white" href="mailto:info@nonstopdistributors.com">
                info@nonstopdistributors.com
              </a>
              .
            </p>

            <h3 className="text-white mt-4">Permitted use</h3>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                You may browse the website and contact us for business inquiries
                and partnerships.
              </li>
              <li className="mb-2">
                You agree not to misuse the website, attempt unauthorized access
                to systems, or interfere with website operation.
              </li>
              <li className="mb-2">
                You agree not to submit false, misleading, or unlawful
                information via forms.
              </li>
            </ul>

            <h3 className="text-white mt-4">Intellectual property</h3>
            <p className="text-white">
              All content on this website—including text, graphics, logos,
              images, and design—belongs to NONSTOP Distributors or its
              licensors, and is protected by applicable intellectual property
              laws. You may not copy, reproduce, or distribute content without
              prior written permission except where allowed by law.
            </p>

            <h3 className="text-white mt-4">Third-party links and services</h3>
            <p className="text-white">
              The website may include links to third-party sites or embedded
              services (such as maps). We are not responsible for third-party
              content, policies, or practices. Your use of third-party services
              is at your own risk.
            </p>

            <h3 className="text-white mt-4">Disclaimers</h3>
            <p className="text-white">
              The website and its content are provided on an “as is” and “as
              available” basis. We make no warranties of any kind, express or
              implied, including warranties of accuracy, reliability, or fitness
              for a particular purpose.
            </p>

            <h3 className="text-white mt-4">Limitation of liability</h3>
            <p className="text-white">
              To the maximum extent permitted by law, NONSTOP Distributors shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages, or any loss of profits or revenues, arising
              from your use of the website.
            </p>

            <h3 className="text-white mt-4">Indemnity</h3>
            <p className="text-white">
              You agree to indemnify and hold harmless NONSTOP Distributors from
              claims, damages, and expenses arising from your misuse of the
              website or violation of these Terms.
            </p>

            <h3 className="text-white mt-4">Changes and availability</h3>
            <p className="text-white">
              We may update the website and these Terms at any time. Continued
              use of the website after changes means you accept the updated
              Terms. We may also suspend or discontinue features without notice.
            </p>

            <h3 className="text-white mt-4">Governing law</h3>
            <p className="text-white">
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the jurisdiction of the courts located in
              Maharashtra, India.
            </p>

            <h3 className="text-white mt-4">Contact</h3>
            <p className="text-white mb-0">
              97 Crown Society, Chinchbhavan,
              Wardha Rd, near Bhawan's School,
              Nagpur, Maharashtra 440005
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

export default TermsAndConditions;
