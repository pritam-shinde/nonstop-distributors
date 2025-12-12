"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const ExpertWitness = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/photos/expert-witness/expert-witness-recruitment-hero.jpg')",
          }}
          // style={{ backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')"}}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <h1 className="">Expert Witness Recruitment</h1>

              <h3 className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Find the Right Expert, Not Just the Available One.
              </h3>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Homestead provides hands-on expert recruitment for attorneys who
                need qualified, credible professionals across every field of
                litigation. Our process is proactive, personal, and transparent,
                built to save you time while strengthening your case.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request Your Expert Now</i>
                  <span className="">Request Your Expert Now</span>
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
                    The Homestead <span>Approach</span>
                  </h2>
                </div>

                <p className="why-choose-four__content__text text-white fs-5">
                  At Homestead, we don’t pull names from a directory. We listen,
                  assess, and recruit the expert who best fits your case.
                </p>
                <p className="why-choose-four__content__text text-white">
                  Our search process is tailored to your specific requirements,
                  considering the scope of the case, the opposing side’s
                  strategy, and the qualifications that will carry weight in
                  court.
                </p>

                <ul className="list-unstyled about-four__list">
                  {[
                    "Custom recruitment for unique or subspecialized expertise",
                    "Experts sourced through both established relationships and new outreach",
                    "Complimentary 15-minute consult calls before retention",
                    "No finder’s fees until you retain your expert",
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
                <p className="why-choose-four__content__text text-white mt-4">
                  Homestead manages the process from first conversation to final
                  coordination, so you can focus on strategy, not sourcing.
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
                    src="/assets/photos/expert-witness/the-homestead-approach.jpg"
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

      {/* Services */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Our Core <br /> <span> Areas of Expertise</span>
            </h2>
          </div>

          <div className="row gutter-y-30">
            {[
              {
                title: <>Medical Malpractice</>,
                descriptions: [
                  "From physicians and surgeons to nursing and allied health professionals, we source medical experts across every specialty.",
                  "Our team understands the nuances of malpractice litigation, matching you with credible professionals who can clearly articulate standards of care, causation, and damages.",
                ],
                roles: [
                  "Physicians",
                  "Nurses",
                  "Surgeons",
                  "Hospital Administrators",
                  "Specialists",
                ],
                hrefs: [
                  {
                    title: "Request A Medical Malpractice Expert Witness",
                    href: "/medical-malpractice#contact-service",
                  },
                  {
                    title: "Explore Subspecialties",
                    href: "/medical-malpractice/",
                  },
                ],
              },
              {
                title: <>Product Liability</>,
                descriptions: [
                  "We recruit engineers, scientists, and technical experts who can analyze design, safety, and manufacturing processes with precision.",
                  "Whether the case involves pharmaceuticals, medical devices, or consumer products, we find professionals who can translate complex data into clear, courtroom-ready insight.",
                ],
                roles: [
                  "Engineers",
                  "Toxicologists",
                  "Safety Experts",
                  "Manufacturing Consultants",
                ],
                hrefs: [
                  {
                    title: "Request A Product Liability Expert Witness",
                    href: "/product-liability#contact-service",
                  },
                  {
                    title: "Explore Subspecialties",
                    href: "/product-liability/",
                  },
                ],
              },
              {
                title: <>Personal Injury</>,
                descriptions: [
                  "For injury and accident-related cases, we connect you with physicians and medical experts who specialize in causation and impairment evaluation.",
                  "We also coordinate independent medical examinations and record reviews to provide objective, defensible medical opinions.",
                ],
                roles: [
                  "Orthopedic Surgeons ",
                  "Neurologists",
                  "Rehabilitation Specialists",
                  "Pain Management Physicians",
                ],
                hrefs: [
                  {
                    title: "Request A Personal Injury Expert Witness",
                    href: "/personal-injury#contact-service",
                  },
                  {
                    title: "Explore Subspecialties",
                    href: "/personal-injury/",
                  },
                ],
              },
              {
                title: <>Forensics</>,
                descriptions: [
                  "Our network includes pathologists, reconstructionists, and specialists who bring clarity to evidence and testimony in both civil and criminal matters.",
                  "We recruit experts with courtroom experience and the ability to simplify technical findings for juries and judges.",
                ],
                roles: [
                  "Forensic Pathologists",
                  "Accident Reconstructionists",
                  "Criminalists",
                  "DNA and Evidence Analysts",
                ],
                hrefs: [
                  {
                    title: "Request A Forensics Expert Witness",
                    href: "/forensic#contact-service",
                  },
                  { title: "Explore Subspecialties", href: "/forensic/" },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-lg-6 wow fadeInUp"
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
                    <h3
                      className="sec-title__title bw-split-in-up text-white"
                      style={{ fontSize: "34px" }}
                    >
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
                        >
                          <i className="icon-check mt-2"></i>
                          {subItem}
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

      {/* Expert Witnesses  */}
      <section
        className="team-one"
        style={{ background: "linear-gradient(to right, #0E222A, #247ba0)" }}
      >
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Additional Services to <br /> <span>Strengthen Your Case</span>
            </h2>
          </div>

          <div className="row gutter-y-30">
            {[
              {
                number: "01",
                title: "Independent Medical Examinations (IMEs)",
                text: `Nationwide coordination of independent medical exams handled with precision, compliance, and clear reporting to support deposition and trial.`,
                href: "/independant-medical-exams/",
              },
              {
                number: "02",
                title: "Medical Record Review",
                text: `Comprehensive review and analysis of medical records to identify case strengths, clarify causation, and support expert testimony.`,
                href: "/record-review/",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="service-details__item text-white h-100">
                  <div
                    className="service-details__item__content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
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
                    <h3 className="service-details__item__title text-white">
                      {item.title}
                    </h3>
                    <div style={{ flex: 1, display: "flex" }}>
                      <p className="service-details__item__text text-white mt-3">
                        {item.text}
                      </p>
                    </div>
                    <a href={item.href} className="procounsel-btn mt-4">
                      <i>Learn More</i>
                      <span>Learn More</span>
                    </a>
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    Why Attorneys <br /> <span>Choose Homestead</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    For Expert Witness Recruitment
                  </p>
                </div>
                <p className="why-choose-four__content__text text-white">
                  Homestead has built its reputation on diligence and trust. We
                  take the time to understand your case, recruit the right
                  professional, and ensure you have the support you need from
                  start to finish.
                </p>
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
                        Tailored Expert <br /> Recruitment
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Every search is hands-on and custom to your case criteria.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Transparent <br /> Communication
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Clear pricing, consistent updates, and no surprises.
                    </p>
                  </div>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <i className="icon-podium"></i> */}
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-03.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Proven Network,
                        <br />
                        Fresh Reach
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Trusted relationships across medical, technical, and
                      forensic—plus new outreach when needed.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <i className="icon-collaboration"></i> */}
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-04.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Risk-Free
                        <br /> Engagement
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      No finder’s fees until you retain your expert.
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
                    src="/assets/photos/expert-witness/why-choose-expert-witness.jpg"
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    Ready to Find <br />
                    <span> Your Expert?</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Your case deserves the right expert, not just the available
                    one. Our team is ready to start your search today.
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

export default ExpertWitness;
