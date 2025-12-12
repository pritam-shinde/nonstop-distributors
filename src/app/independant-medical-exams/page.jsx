import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Case Intake",
    text: `Share your case details and the scope of evaluation. Our team reviews the specifics to ensure we identify the right expert for your needs.`,
  },
  {
    number: "02",
    title: "Expert Match",
    text: `Homestead selects and confirms a qualified, neutral physician with the appropriate specialty and credentials for your case.`,
  },
  {
    number: "03",
    title: " Coordination & Delivery",
    text: `We manage all scheduling, logistics, and documentation. You receive a complete, defensible IME report with clear findings and rationale.`,
  },
];

const IndependentMedicalExams = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/ime/ime-hero.jpg')",
            // backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="">
                Independent Medical Exams that Clarify the Facts
              </h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0 custom-max-width2">
                Objective medical evaluations from board-certified physicians to
                support your case with clarity and confidence.
              </h3>

              <p
                style={{ marginTop: "20px", marginBottom: "20px" }}
                className="custom-max-width2"
              >
                Homestead coordinates every aspect of the process, from expert
                selection to report delivery, ensuring an efficient, defensible
                outcome that stands up in court.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request an Independent Medical Exam</i>
                  <span className="">Request an Independent Medical Exam</span>
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
                    What Is an Independent <span>Medical Exam?</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    A neutral, evidence-based assessment of injury, causation,
                    or recovery.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Independent Medical Exams (IMEs) are used when an impartial
                  review of a claimant’s medical condition is needed. These
                  exams help confirm diagnoses, assess impairment, and address
                  disputed findings in litigation or insurance cases.
                </p>

                <p className="why-choose-four__content__text text-white mb-3">
                  <strong>Common uses include:</strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  {[
                    "Medical malpractice",
                    "Personal injury",
                    "Product liability",
                    "Workers’ compensation",
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
                    src="/assets/photos/ime/ime-module-2.jpg"
                    // src="/assets/images/backgrounds/why_choose_us_3rd_section.jpg"
                    alt="why-choose-us"
                    className="mx-auto"
                  /> */}
                  <Image
                    src="/assets/photos/ime/ime-module-2.jpg"
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

      {/*How the Process Works - section 3 */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              How the <span>Process Works</span>
            </h2>
            <p className="why-choose-four__content__text text-white mb-0">
              We keep the process simple and transparent to save you time
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
            backgroundImage:
              "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up text-xl-nowrap">
                    Why Attorneys Choose <br className="d-none d-xl-inline" />
                    Homestead For Independent{" "}
                    <br className="d-none d-xl-inline" />
                    <span> Medical Exams</span>
                  </h3>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Trusted coordination, credible experts, and clear
                    communication.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white fs-5">
                  Every engagement is managed with discretion, transparency, and
                  attention to detail so you can focus on building your case.
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
                        Thorough and
                        <br /> Discreet
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
                        Defensible
                        <br /> Results
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Each IME report is built to hold up in court, grounded in
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
                        Fast and <br /> Reliable
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      We handle every logistical detail, from scheduling to
                      report delivery, ensuring timely results without
                      sacrificing quality.
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
                        Licensed and <br /> Conflict-Checked
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Every physician is vetted and credentialed to meet the
                      highest professional and ethical standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="why-choose-four__right">
                <div className="why-choose-four__img mx-auto">
                  {/* <img
                    src="/assets/photos/ime/ime-module-4.jpg"
                    // src="/assets/images/backgrounds/image_10.jpg"
                    alt="why-choose-us"
                  /> */}
                  <Image
                    src="/assets/photos/ime/ime-module4.jpg"
                    alt="trusted by experts"
                    width={340}
                    height={570}
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
                    <span className="text-white">Start Your</span> <br />
                    <span> IME Request</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    We’ll handle the coordination so you can focus on your case.
                    Submit your request and we’ll begin identifying qualified
                    examiners right away.
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

export default IndependentMedicalExams;
