"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const BackgroundChecks = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/photos/background-checks/background-checks-hero.jpg')",
            // backgroundImage:  "url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="">
                Expert Witness <br className="d-none d-lg-inline" />
                <span style={{ color: "#fb3640;" }}>Background Checks </span>
              </h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold mb-0 font-Merriweather">
                Protect your case with verified, defensible expert profiles.
              </h3>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Even the most qualified experts can face credibility challenges.
                Homestead’s background check services help you confirm
                professional integrity, uncover potential vulnerabilities, and
                prepare with confidence before your expert ever takes the stand.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request a Background Check</i>
                  <span className="">Request a Background Check</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="why-choose-four">
        <div
          className="why-choose-four__bg jarallax"
          data-jarallax
          data-speed="0.3"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    The Importance Of <br />
                    <span>Expert Witness Verification</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold mb-0 font-Merriweather">
                    A strong case begins with a trusted, reliable expert.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Your expert’s credibility can make or break your argument.
                  Homestead provides discreet, comprehensive background reviews
                  designed to protect your case from surprises. From verifying
                  credentials to investigating prior testimony, our process
                  ensures that every expert you engage is exactly who they claim
                  to be, qualified, ethical, and defensible under scrutiny.
                </p>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className=" why-choose-four__right">
                <div className="why-choose-four__img">
                  {/* <img
                    src="/assets/photos/background-checks/background-checks-module-2.jpg"
                    // src="/assets/images/backgrounds/why_choose_us_3rd_section.jpg"
                    alt="why-choose-us"
                    className="mx-auto"
                  /> */}
                  <Image
                    src="/assets/photos/background-checks/background-checks-module-21.jpg"
                    // src="/assets/photos/background-checks/background-checks-module-2.jpg"
                    alt="trusted by experts"
                    width={340}
                    height={570}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Our Expert Witness <br /> <span> Background Check Services</span>
            </h2>
          </div>

          <div className="row gutter-y-30">
            {[
              {
                title: (
                  <>
                    Preliminary <br className="d-none d-lg-inline" /> Report
                  </>
                ),
                descriptions: [
                  "A concise, timely assessment of an expert’s professional background and reputation. We review credentials, disciplinary history, and potential red flags, giving you a clear snapshot of the expert’s standing before you move forward.",
                ],
                roles: [
                  "Credential verification and license review",
                  "Screening for sanctions, malpractice claims, and board actions",
                  "Identification of potential red flags or inconsistencies",
                ],
                hrefs: [
                  {
                    title: "Request a Preliminary Report",
                    href: "#contact-service",
                  },
                ],
              },
              {
                title: (
                  <>
                    Challenge <br className="d-none d-lg-inline" /> Study
                  </>
                ),
                descriptions: [
                  "A detailed investigation into an expert’s litigation history, public statements, and potential credibility risks. Our team analyzes prior depositions, published work, and testimony to help you anticipate and prepare for opposing counsel’s challenges.",
                ],
                roles: [
                  "Review of prior testimony and case involvement",
                  "Identification of inconsistent or controversial statements",
                  "Insight into potential bias or conflicts of interest",
                ],
                hrefs: [
                  {
                    title: "Request a Challenge Study",
                    href: "#contact-service",
                  },
                ],
              },
              {
                title: (
                  <>
                    Enhanced Expert <br className="d-none d-lg-inline" />{" "}
                    Profile
                  </>
                ),
                descriptions: [
                  "A comprehensive dossier combining credential verification, litigation history, and public record research. This report provides a 360° view of your expert’s background and is the gold standard for due diligence before trial.",
                ],
                roles: [
                  "Consolidated record of credentials, testimony, and publications",
                  "Verification of professional and academic qualifications",
                  "Tailored for high-stakes litigation or expert retention decisions",
                ],
                hrefs: [
                  {
                    title: "Request an Enhanced Profile",
                    href: "#contact-service",
                  },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-lg-4 wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div
                  className="about-four__content h-100"
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="sec-title text-left">
                    <h3 className="bw-split-in-up font-Montserrat text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div style={{ flex: 1 }}>
                    {item.descriptions.map((subItem, subIndex) => (
                      <p key={subIndex} className="about-four__text text-white">
                        {subItem}
                      </p>
                    ))}
                    <ul className="list-unstyled about-four__list">
                      {item.roles.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="about-four__item text-white"
                          style={{ display: "flex", alignItems: "start" }}
                        >
                          <i className="icon-check mt-2"></i>
                          <p className="mb-0">{subItem}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.hrefs.map((subItem, subIndex) => (
                    <div className="about-four__btns" key={subIndex}>
                      <a
                        href={subItem.href}
                        className="procounsel-btn"
                        style={{ fontSize: "14px", whiteSpace: "normal" }}
                      >
                        <i>{subItem.title}</i>
                        <span>{subItem.title}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attorneys */}
      <section className="why-choose-four">
        <div
          className="why-choose-four__bg jarallax"
          data-jarallax
          data-speed="0.3"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    Why Attorneys <br />
                    <span>Choose Homestead</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    For Expert Witness Background Checks
                  </p>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21 21-4.34-4.34" />
                          <circle cx="11" cy="11" r="8" />
                        </svg>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Thorough and <br className="d-none d-md-inline" />{" "}
                        Discreet
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Our process is confidential, evidence-based, and designed
                      to protect both your client and your expert.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Defensible <br className="d-none d-md-inline" /> Results
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Each report is built to hold up in court, grounded in
                      verifiable sources and transparent methodology.
                    </p>
                  </div>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-03.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Tailored to <br className="d-none d-md-inline" /> Your
                        Needs
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Whether you need a quick snapshot or full forensic
                      research, we adapt to the depth and timing your case
                      requires.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-04.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Trusted by <br className="d-none d-md-inline" />{" "}
                        Attorneys Nationwide
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      We act as an extension of your legal team, supporting you
                      through evaluation, discovery, and trial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="why-choose-four__right">
                <div className="why-choose-four__img mx-auto">
                  <img
                    src="/assets/photos/background-checks/why-choose-bg-check.jpg"
                    // src="/assets/images/backgrounds/image_10.jpg"
                    alt="why-choose-us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="contact-one" id="contact-service">
        <div
          style={{
            transform: "rotateY(180deg)",
            width: "100%",
            position: "relative",
            marginBottom: "20px",
            marginTop: "8px",
          }}
        >
          <div
            className="tailored-redline"
            style={{ position: "unset", height: "14px" }}
          ></div>
        </div>
        <div className="container">
          <div className="contact-one__wrapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    <span className="text-white">Ready to Verify </span> <br />
                    <span> Your Expert?</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Protect your case and your client’s credibility with a
                    background check you can trust.
                  </p>
                </div>

                <div className="contact-one__content">
                  <ul className="list-unstyled contact-one__info">
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-telephone-call-1"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-telephone-call-1"></i>
                        </span>
                      </div>
                      <div className="contact-one__info__content">
                        <div className="contact-one__info__text">
                          <p className="main-footer__info__text">
                            <a
                              href="tel:8772443703"
                              aria-label="Call us at (877) 244-3703"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            >
                              (877) 244-3703
                            </a>
                          </p>
                          <p className="main-footer__info__text">
                            <a
                              href="tel:7327438003"
                              aria-label="Call us at +21 9555-0114"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            >
                              (732) 743-8003
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact-one__info__item" style={{ flex: 1 }}>
                      <div className="contact-one__info__icon">
                        <i className="icon-map-pin"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-map-pin"></i>
                        </span>
                      </div>

                      <div className="contact-one__info__content">
                        <p
                          className="contact-one__info__text text-white"
                          style={{ fontSize: "14px" }}
                        >
                          259 Nassau St. Suite 2 #552
                          <br /> Princeton, NJ 08542
                        </p>
                      </div>
                    </li>
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-glove"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-glove"></i>
                        </span>
                      </div>
                      <div className="contact-one__info__content">
                        <a
                          href="mailto:info@homesteadexperts.com"
                          className="text-white"
                        >
                          <p
                            className="contact-one__info__text text-white"
                            style={{ fontSize: "14px" }}
                          >
                            info@homesteadexperts.com
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                <form
                  className="contact-one__form contact-form-validated form-one"
                  action="inc/sendemail.php"
                >
                  <div className="contact-one__form__bg-one"></div>
                  <div className="contact-one__form__bg-two"></div>
                  <div className="form-one__group">
                    <div className="form-one__control form-one__control--full">
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="casename"
                        type="text"
                        name="casename"
                        placeholder="Case Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <a href="#" className="procounsel-btn text-uppercase">
                        <i>Case Details</i>
                        <span>Case Details</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: "rotateY(180deg)",
            width: "100%",
            position: "relative",
          }}
        >
          <div className="tailored-redline"></div>
        </div>
      </section>

      <ScriptsLoader />
    </>
  );
};

export default BackgroundChecks;
