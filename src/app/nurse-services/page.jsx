"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const NurseServices = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/nurse-services/nurse-services-hero.jpg')",
            // backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="">Nurse Services for Attorneys</h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold mb-0 font-Merriweather">
                Clinical clarity and medical insight from experienced Legal
                Nurse Consultants.
              </h3>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Our in-house nurse consultants deliver independent, defensible
                medical reviews that bring clarity to complex cases. Whether
                you’re evaluating case merit, building documentation, or
                preparing for trial, Homestead’s nurse team ensures the medical
                facts are organized, credible, and actionable.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request a Merit Review</i>
                  <span className="">Request a Merit Review</span>
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
                    The Value Of <br />
                    <span>Nurse Consulting</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold mb-0 font-Merriweather">
                    Legal Nurse Consultants bridge the gap between medicine and
                    law.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Homestead’s nurse team helps attorneys interpret, organize,
                  and evaluate medical information with precision and speed.
                  From early case screening to detailed trial preparation, our
                  consultants identify the key medical issues, timelines, and
                  clinical insights that define case strategy. Their work saves
                  you time, reduces uncertainty, and strengthens outcomes.
                </p>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className=" why-choose-four__right">
                <div className="why-choose-four__img">
                  {/* <img
                    src="/assets/images/backgrounds/why_choose_us_3rd_section.jpg"
                    alt="why-choose-us"
                    className="mx-auto"
                  /> */} 
                  <Image src="/assets/photos/nurse-services/module-2-nurse-services.jpg" alt="trusted by experts" width={340} height={570} className="mx-auto"/>
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
              Our Core <br /> <span> Nurse Services</span>
            </h2>
          </div>

          <div className="row gutter-y-30">
            {[
              {
                title: (
                  <>
                    Merit <br className="d-none d-lg-inline" /> Reviews
                  </>
                ),
                descriptions: [
                  "Determine case strength early with an objective review of medical records and timelines. Our Legal Nurse Consultants analyze documentation to identify key facts, causation issues, and potential red flags, helping you decide which cases are worth pursuing.",
                ],
                roles: [
                  "Unbiased evaluation of case viability",
                  "Early identification of clinical strengths and weaknesses",
                  "Actionable recommendations for next steps",
                ],
                hrefs: [
                  {
                    title: "Request a Merit Review",
                    href: "#",
                  },
                ],
              },
              {
                title: (
                  <>
                    Medical <br className="d-none d-lg-inline" /> Summaries
                  </>
                ),
                descriptions: [
                  "Our nurse team creates detailed, chronological timelines of care that align clinical events with case milestones. These chronologies simplify complex medical histories and clarify where standards of care may have been met or breached.",
                ],
                roles: [
                  "Clear synthesis of records and clinical events",
                  "Saves attorney time and increases accuracy",
                  "Essential for depositions, mediation, and trial prep",
                ],
                hrefs: [
                  {
                    title: "Request a Summary",
                    href: "#",
                  },
                ],
              },
              {
                title: (
                  <>
                    Medical <br className="d-none d-lg-inline" /> Chronologies
                  </>
                ),
                descriptions: [
                  "Our nurse team creates detailed, chronological timelines of care that align clinical events with case milestones. These chronologies simplify complex medical histories and clarify where standards of care may have been met or breached.",
                ],
                roles: [
                  "Organized by date, provider, and event",
                  "Supports expert testimony and trial exhibits",
                  "Helps visualize care patterns and deviations",
                ],
                hrefs: [
                  {
                    title: "Request a Chronology",
                    href: "#",
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
                      {item.roles.map((subItem, index) => (
                        <li
                          key={index}
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
                        href="#contact-service"
                        // href={subItem.href}
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
            backgroundImage: "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    Why Attorneys <br /> <span> Choose Homestead</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    For Legal Nurse Services
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
                        Experienced Nurse <br className="d-none d-md-inline" />{" "}
                        Consultants
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Our team brings decades of combined clinical and legal
                      experience, ensuring accuracy and credibility in every
                      report.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Objective and <br className="d-none d-md-inline" />{" "}
                        Defensible
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      We provide unbiased analysis backed by medical
                      evidence—reports that stand up under scrutiny
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
                        Streamlined <br className="d-none d-md-inline" />{" "}
                        Process
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      From record intake to final delivery, our process is
                      efficient, organized, and designed for tight litigation
                      timelines.
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
                        Trusted <br className="d-none d-md-inline" />
                        Partnership
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
                    src="/assets/photos/nurse-services/why-attorneys.jpg"
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
                    Ready to Clarify <br />
                    <span> Your Case?</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Get clear, defensible medical insight from professionals who
                    understand both medicine and litigation.
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

export default NurseServices;
