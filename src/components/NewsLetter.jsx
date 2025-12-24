import React from "react";

const NewsLetter = () => {
  return (
    <section
      className="container-fluid d-flex align-items-center justify-content-center text-center newsletter-section"
      style={{ position: "relative" }}
    >
      <div className="tailored-redline-new" />
      <div className="circle-newsletter" />
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12">
            <h2 className="fw-bold text-white mb-3 section-subheading">
              Join Our Growing Network
            </h2>
            <p
              className="text-white mb-4"
              style={{ fontSize: "clamp(14px, 2vw, 18px)", opacity: 0.9 }}
            >
              Whether you're a brand looking for distribution or a professional
              seeking opportunities, we'd love to hear from you.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact-us/" className=" fw-semibold custom-btn">
                JOIN NOW
              </a>

              {/* <a href="#" className=" fw-semibold custom-btn">
                  LEARN ABOUT DISTRIBUTION
                </a>

                <a href="#" className=" fw-semibold custom-btn">
                  VIEW OUR PARTNERS
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
