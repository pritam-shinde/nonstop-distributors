import ScriptsLoader from "@/components/ScriptsLoader";
import SpecialtyPersonalInjuryClient from "@/sections/medical-malpractice/SpecialtyPersonalInjuryClient";
import Image from "next/image";
import { menuData } from "@/components/header";

const PersonalInjury = () => {
    const subspecialities = menuData
    .find((i) => i.href === "/experts/")
    ?.children?.find((j) => j.href === "/personal-injury/")
    ?.children?.flatMap((item) => item.children);
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/personal-injury/personal-injury-hero.jpg')",
            // backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')",
            backgroundSize: "cover", backgroundPosition: "right"
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="">
                Personal Injury <br /> Expert Witnesses
              </h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Trusted insight for every injury claim.
              </h3>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Personal injury cases often turn on one question - what really
                happened, and how did it affect the individual? Homestead
                connects law firms with credentialed experts who can clarify
                causation, quantify damages, and testify with precision. From
                orthopedic surgeons to accident reconstructionists, we match you
                with professionals whose real-world expertise helps you build
                credible, defensible arguments.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request an Expert</i>
                  <span className="">Request an Expert</span>
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
                    Objective Expertise to <span>Strengthen Your Case</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Our experts translate technical findings into clear,
                    evidence-based testimony.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Personal injury litigation requires multidisciplinary
                  knowledge, from medical analysis to biomechanical
                  interpretation. Homestead’s experts include physicians,
                  rehabilitation specialists, economists, and accident
                  investigators who provide impartial assessments of injury
                  severity, functional impact, and long-term prognosis. Every
                  expert is vetted for courtroom experience, ensuring opinions
                  are defensible and data-driven.
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

                  <Image
                    src="/assets/photos/personal-injury/personal-injury-module-2.jpg"
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

      {/* section 3 */}
      <section
        className="team-one"
        id="nurse-services"
        style={{ backgroundColor: "#0E222A" }}
      >
        <div className="container">
          <div className="custom-max-width">
            <div className="sec-title text-left">
              <h2 className="sec-title__title bw-split-in-up text-white font-Montserrat">
                Common Personal Injury <br />
                <span> Cases We Support</span>
              </h2>
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <ul className="list-unstyled about-four__list">
                  {[
                    "Motor vehicle accidents and collision reconstruction",
                    "Slip-and-fall and premises liability",
                    "Workplace and construction accidents",
                    "Traumatic brain injury and neurological claims",
                    "Spinal and orthopedic injuries",
                    "Pain management and rehabilitation assessment",
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
          </div>
        </div>
      </section>

      {/* section 4 specialty */}
      <SpecialtyPersonalInjuryClient data={subspecialities || []} />

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
                    <span className="text-white">
                      Find the Right <br className="d-none d-xl-inline" />{" "}
                      Personal Injury{" "}
                    </span>
                    <br className="d-none d-xl-inline" />
                    <span> Expert Today</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Our team is ready to connect you with experienced
                    specialists who can strengthen your case with credible,
                    data-driven testimony. Submit your request to get started.
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

      {/* faq */}
      <section className="faq-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              Frequently Asked
              <br />
              <span>Questions</span>
            </h3>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="faq-one__content">
                <div
                  className="faq-one__accordion procounsel-accrodion"
                  data-grp-name="procounsel-accrodion"
                >
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        How long does it take to find a personal injury expert?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Most matches are completed within seven to fourteen
                          business days. Rush requests can be accommodated for
                          an additional fee. <a href="/pricing/">Learn More </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        What types of experts support personal injury cases?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          We work with medical professionals, engineers, and
                          economists who specialize in injury assessment,
                          causation analysis, and damages valuation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        Can I speak with an expert before retaining them?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Yes. We arrange introductory calls so you can confirm
                          fit and communication style before moving forward.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-one__accordion procounsel-accrodion"
                data-grp-name="procounsel-accrodion"
              >
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h4 className="text-white">
                      Do your experts handle both plaintiff and defense cases?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Yes. Our network includes neutral professionals who base
                        opinions solely on facts and data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h4 className="text-white">
                      What is the pricing for personal injury expert witness
                      services?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        There are no upfront fees to request an expert. Once
                        retained, rates vary by specialty and scope. You’ll
                        receive a clear estimate before engagement. <a href="/pricing/">Learn More </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScriptsLoader />
    </>
  );
};

export default PersonalInjury;
