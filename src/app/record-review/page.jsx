import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Case Submission",
    text: `Share your records and outline your case objectives.`,
  },
  {
    number: "02",
    title: "Expert Review",
    text: `We assign a qualified clinician or legal nurse consultant with the appropriate background for your matter.`,
  },
  {
    number: "03",
    title: "Findings Delivered",
    text: `Receive a concise, clearly written report summarizing key insights, gaps, and recommendations to guide your next steps.`,
  },
];

const RecordReview = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/record-review/record-review-hero.jpg')",
            // backgroundImage:"url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="text-xl-nowrap">
                Medical Record Reviews Reveal
                <br className="d-none d-xl-inline" /> The Story Behind The Case
              </h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Objective clinical analysis that transforms complex records into
                actionable insight.
              </h3>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Homestead connects your case with qualified clinicians who
                identify key facts, timelines, and standards of care, helping
                you assess merit and plan next steps with confidence.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request a Record Review</i>
                  <span className="">Request a Record Review</span>
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    What Is a <span>Record Review?</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Early clinical clarity for stronger case strategy.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  A record review provides legal teams with a focused assessment
                  of medical documentation to highlight standards of care,
                  causation, and missing information. It’s an ideal first step
                  when determining if a case has merit or before retaining a
                  full expert.
                </p>

                <p className="why-choose-four__content__text text-white mb-3">
                  <strong>Common uses include:</strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  {[
                    "Early merit reviews",
                    "Causation and liability analysis",
                    "Chronology and medical summary development",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="about-four__item text-white"
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">{item}</p>
                    </li>
                  ))}
                </ul>
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
                  <Image
                    src="/assets/photos/record-review/record-review-module-2-1.png"
                    width={340}
                    height={570}
                    alt="why-choose-us"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*How the Process Works - section 3 */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              How the <span>Process Works</span>
            </h2>

            <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
              We keep the process structured,{" "}
              <span>efficient, and transparent.</span>
            </p>
          </div>

          <div className="row gutter-y-30">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div
                  className="service-details__item text-white"
                  style={{ height: "100%", alignItems: "start" }}
                >
                  <div className="service-details__item__content">
                    <div
                      className="number-badge"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#247BA0",
                        marginBottom: "10px",
                      }}
                    >
                      {item.number}
                    </div>
                    <h4 className="service-details__item__title text-white">
                      {item.title}
                    </h4>
                    <p className="service-details__item__text text-white mt-3">
                      {item.text}
                    </p>
                  </div>
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white text-xl-nowrap">
                    Why Attorneys Choose <br className="d-none d-xl-inline" />
                    Homestead For <br className="d-none d-xl-inline" />{" "}
                    <span> Record Reviews</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Experienced clinicians, transparent pricing, and reliable
                    turnaround.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white fs-5">
                  Every review is handled by licensed professionals who deliver
                  objective, defensible insight you can trust.
                </p>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-01.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Clinically
                        <br /> Grounded
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Our reviewers are experienced clinicians with deep
                      familiarity in patient care and documentation analysis.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Objective and
                        <br /> Neutral
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Each review is evidence-based and impartial, helping you
                      make confident, informed case decisions.
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
                        Fast
                        <br /> Turnaround
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      We deliver concise, well-organized reports, keeping your
                      team on schedule.
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
                        Trusted by Legal <br /> Teams Nationwide
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Homestead acts as an extension of your firm, supporting
                      you through every stage of preparation and review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="why-choose-four__right">
                <div className="why-choose-four__img mx-auto">
                  {/* <img
                    src="/assets/images/backgrounds/image_10.jpg"
                    alt="why-choose-us"
                  /> */}
                  <Image
                    src="/assets/photos/record-review/module-4.png"
                    width={340}
                    height={570}
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white text-xl-nowrap">
                    <span className="text-white">Request a </span>{" "}
                    <br className="d-none d-xl-inline" />
                    <span>Record Review</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Submit your case details to get started. We’ll match your
                    matter with a qualified reviewer and deliver clear,
                    actionable insight.
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

export default RecordReview;
