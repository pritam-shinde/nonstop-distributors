import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Expert Witness Recruitment",
    img: "/assets/images/shapes/expert-witness-requirement.png",
    sectionId: "expert-witness",
    description:
      "We recruit qualified experts across every field, with depth in medical, product liability, personal injury, and forensic cases.",
  },
  {
    title: "Merit Reviews & Legal Nurse Services",
    img: "/assets/images/shapes/legal-nurse.png",
    sectionId: "nurse-services",
    description:
      "In-house legal nurses and paralegals analyze medical records to determine case merit accurately.",
  },
  {
    title: "Expert Background Checks",
    sectionId: "expert-witness-profile-challenge-study",
    img: "/assets/images/shapes/background-check.png",
    description:
      "We verify expert credibility with thorough background research, challenge studies, and detailed expert profiles.",
  },
];

export const ServiceSteps = [
  {
    img: "/assets/images/backgrounds/support-1-icon.png",
    alt: "support-1-icon",
    title: "Targeted Case Intake",
    text: (
      <>
        We start with a focused conversation to define your case needs and the
        expertise required.
        <br className="d-none d-lg-inline" />
        Every search begins with clarity and purpose.
      </>
    ),
  },
  {
    img: "/assets/images/backgrounds/support-2-icon.png",
    alt: "support-2-icon",
    title: "Expert Sourcing & Vetting",
    text: (
      <>
        Our team identifies and recruits qualified experts through both trusted
        connections and new outreach.
        <br className="d-none d-lg-inline" />
        Each candidate is evaluated for credentials, relevance, and
        communication strength.
      </>
    ),
  },
  {
    img: "/assets/images/backgrounds/support-3-icon.png",
    alt: "support-3-icon",
    title: "Coordination & Communication",
    text: (
      <>
        We facilitate introductions, schedule consult calls, and oversee
        document sharing.
        <br className="d-none d-lg-inline" /> Our case managers ensure every
        step runs smoothly.
      </>
    ),
  },
  {
    img: "/assets/images/backgrounds/support-4-icon.png",
    alt: "support-4-icon",
    title: "Follow-Through Until Close",
    text: (
      <>
        Our support continues through reports, deposition prep, and trial
        appearances.
        <br className="d-none d-lg-inline" />
        You can depend on us for responsiveness and consistency from start to
        finish.
      </>
    ),
  },
];

const ServicePage = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/services/services_hero.jpg')",
            // backgroundImage:"url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <p style={{ marginTop: "80px" }} className="mb-2">
                <span style={{ color: "#fb3640" }} className="fw-bold">
                  SERVICES
                </span>
              </p>
              <h1 className="">
                Our Expert Witness & <br /> Case Support Services
              </h1>

              <p style={{ marginBottom: "0px" }}>
                Supporting attorneys with trusted experts, tailored recruitment,
                and reliable results.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Request an Expert Witness</i>
                  <span className="">Request an Expert Witness</span>
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
                    The Homestead
                    <span> Advantage</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    More than a directory, a partner in your case.
                  </p>
                </div>

                <p className="why-choose-four__content__text text-white">
                  At Homestead, we do more than maintain a list, we build
                  relationships. Every referral begins with understanding your
                  case and ends with connecting you to the expert best equipped
                  to support it. We draw from a trusted network of professionals
                  we’ve worked with before and recruit new experts when needed,
                  going beyond what’s convenient to find the right fit, even in
                  niche or emerging specialties
                </p>
                <p className="why-choose-four__content__text text-white">
                  This hands-on approach sets us apart from directories and
                  automated platforms. Whether you’re assessing case merit or
                  preparing for trial, we provide personalized, fully managed
                  support that keeps your case moving forward with confidence.
                </p>
                <a href="#contact-service" className="procounsel-btn">
                  <i>Request an Expert Witness</i>
                  <span>Request an Expert Witness</span>
                </a>
              </div>
            </div>
            <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
              <div className=" why-choose-four__right">
                <div className="why-choose-four__img">
                  {/* <img
                    src="/assets/photos/services/services_module_1.jpg"
                    // src="/assets/images/backgrounds/why_choose_us_3rd_section.jpg"
                    alt="why-choose-us"
                    className="mx-auto"
                  /> */}
                  <Image
                    src="/assets/photos/services/services_module_1.jpg"
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

      {/* Services Grid */}
      <section
        className="service-one service-two--page"
        style={{
          background: "url(assets/images/backgrounds/section-2-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0E222A",
        }}
      >
        <div className="container">
          <div className="row gutter-y-30">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div
                  className="service-details__item text-white h-100"
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    padding: "30px 25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <div
                    className="service-details__item__content h-100"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <rect width="100" height="100" fill="none" />
                        <g
                          stroke="#0B2C5A"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="15"
                            y="30"
                            width="70"
                            height="45"
                            rx="5"
                            ry="5"
                            fill="none"
                          />
                          <path
                            d="M35 30v-8a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v8"
                            fill="none"
                          />

                          <circle cx="70" cy="70" r="14" fill="none" />
                          <line x1="80" y1="80" x2="90" y2="90" />
                          <circle cx="70" cy="66" r="4" fill="none" />
                          <path d="M62 76c2-4 14-4 16 0" fill="none" />
                        </g>
                      </svg> */}
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover my-2"
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#0E222A",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#0E222A",
                        flex: 1,
                      }}
                      className="mb-0"
                    >
                      {item.description}
                    </p>

                    <Link
                      href={`#${item.sectionId}`}
                      className="procounsel-btn mt-3"
                      style={{ fontSize: "14px", whiteSpace: "normal" }}
                    >
                      <i>Learn More</i>
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*services  */}
      <section
        className="team-one"
        id="expert-witness"
        style={{ background: "linear-gradient(to right, #247ba0, #0E222A )" }}
      >
        <div className="container">
          <div className="custom-max-width">
            <div className="sec-title text-left">
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                Expert Witness Recruitment
              </h2>
              <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Recruiting experts across every specialty.
              </p>
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <p className="about-four__text text-white">
                  Homestead provides hands-on recruitment for attorneys who need
                  qualified, credible experts in every field. Our team combines
                  established relationships with new outreach to identify the
                  best-fit professionals for your case.
                </p>

                <p className="about-four__text text-white">
                  We recruit for a wide range of case types, with particular
                  depth in <strong>medical malpractice</strong>,{" "}
                  <strong>product liability</strong>,{" "}
                  <strong>personal injury</strong>, and{" "}
                  <strong>forensic matters</strong>. For medical cases, we also
                  coordinate independent medical examinations and record reviews
                  as needed to support your expert strategy.
                </p>

                <p className="about-four__text text-white">
                  Every search is customized, communication is transparent, and
                  you only pay once your expert is retained
                </p>

                <p className="text-white mt-4">
                  <strong>How We Work: </strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Custom recruitment </strong> for unique or
                      subspecialized expertise
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Experts sourced </strong> through both established
                      relationships and new outreach
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Complimentary 15-minute consult calls </strong>{" "}
                      before retention
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>No finder’s fees </strong> until you retain your
                      expert
                    </p>
                  </li>
                </ul>

                <div className="about-four__btns">
                  <a
                    href="/expert-witness/"
                    className="procounsel-btn"
                    style={{ fontSize: "14px", whiteSpace: "normal" }}
                  >
                    <i>Learn More About Expert Recruitment</i>
                    <span>Learn More About Expert Recruitment</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section
        className="team-one"
        id="nurse-services"
        style={{ background: "#0E222A" }}
      >
        <div className="container">
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className="custom-max-width">
              <div className="sec-title text-left">
                <h2 className="sec-title__title bw-split-in-up text-white font-Montserrat">
                  Merit Reviews & Legal Nurse Services
                </h2>

                <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                  Clinical clarity from experienced Legal Nurse Consultants.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0ms">
                <div style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="about-four__text text-white">
                    Our in-house nurse consultants provide independent insight
                    and documentation support at every stage of your case.
                    Whether you’re assessing the strength of a claim or
                    preparing for trial, our team ensures the medical facts are
                    clear, credible, and defensible.
                  </p>

                  <p className="text-white mt-4">
                    <strong>Services Include: </strong>
                  </p>

                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        <strong>Merit Reviews: </strong> Objective evaluation of
                        case validity based on medical records and timelines.
                      </p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        <strong>Medical Summaries: </strong> Concise
                        documentation that highlights key events and clinical
                        milestones.
                      </p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        <strong>Medical Chronologies: </strong>
                        Detailed timelines of care for litigation, deposition,
                        and trial preparation.
                      </p>
                    </li>
                  </ul>

                  <p className="about-four__text text-white">
                    Homestead’s nurse team bridges the gap between medicine and
                    law, helping you understand what really happened, what
                    matters most, and what’s worth pursuing.
                  </p>
                  <div className="about-four__btns">
                    <a
                      href="/nurse-services/"
                      className="procounsel-btn"
                      style={{ fontSize: "14px", whiteSpace: "normal" }}
                    >
                      <i>Learn More About Nurse Services</i>
                      <span>Learn More About Nurse Services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section
        className="team-one"
        id="expert-witness-profile-challenge-study"
        style={{ background: "linear-gradient(to right, #0E222A, #247ba0)" }}
      >
        <div className="container">
          <div className="custom-max-width custom-max-width2">
            <div className="sec-title text-left">
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                Expert Background Checks
              </h2>
              <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Ensuring the credibility of every expert before they take the
                stand.
              </p>
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <p className="about-four__text text-white">
                  Even the most qualified expert can face credibility
                  challenges. Our background check services help you confirm
                  professional integrity, uncover potential vulnerabilities, and
                  prepare with confidence.
                </p>

                <p className="text-white mt-4">
                  <strong>Services Include: </strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Preliminary Report: </strong> A concise assessment
                      of professional background, qualifications, and red flags.
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Challenge Study: </strong> Deep research into
                      prior testimony, public statements, and potential
                      conflicts.
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Enhanced Expert Profile: </strong> Comprehensive
                      dossier integrating credential review, litigation history,
                      and publication analysis.
                    </p>
                  </li>
                </ul>

                <p className="about-four__text text-white">
                  These services are ideal before retention, during discovery,
                  or ahead of trial to protect your case from surprises and
                  strengthen your expert strategy.
                </p>

                <div className="about-four__btns">
                  <a
                    href="/expert-witness-profile-challenge-study/"
                    className="procounsel-btn"
                    style={{ fontSize: "14px", whiteSpace: "normal" }}
                  >
                    <i>Learn More About Background Checks</i>
                    <span>Learn More About Background Checks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End to  */}
      <section
        style={{
          backgroundColor: "#0E222A",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container">
          <div>
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Full-Service Case Support
            </h2>
            <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
              Precision and Partnership at Every Step
            </p>

            <div>
              {/* <p className="about-one__content__text">
                We handle more than expert matching.
              </p>
              <p className="about-one__content__text">
                Homestead manages every phase of your case support, from intake
                to trial so nothing slows you down.
              </p> */}

              <div
                className="row mt-5"
                style={{ position: "relative", zIndex: 1 }}
              >
                {ServiceSteps.map((step, index) => (
                  <div className="col-12 col-lg-6 mt-4 pe-0" key={index}>
                    <div
                      className="case-strategy-cards"
                      style={{
                        display: "flex",
                        gap: "30px",
                      }}
                    >
                      <img
                        className="mt-1"
                        src={step.img}
                        alt={step.alt}
                        width="80"
                        height="80"
                      />
                      <div>
                        <h5
                          className="mt-3 mt-sm-0"
                          style={{
                            fontWeight: "600",
                            fontSize: "clamp(18px,4vw,22px)",
                            lineHeight: "26px",
                            marginBottom: "10px",
                            color: "#fff",
                          }}
                        >
                          {step.title}
                        </h5>
                        <p
                          style={{
                            fontWeight: 400,
                            marginBottom:
                              ServiceSteps.length - 1 === index
                                ? "0px !important"
                                : "20px !important",
                          }}
                          className="about-one__content__text"
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact-service"
                className="procounsel-btn mt-5"
                style={{ fontSize: "14px", whiteSpace: "normal" }}
              >
                <i>Start Your Case Now</i>
                <span>Start Your Case Now</span>
              </a>
            </div>
          </div>
        </div>

        <Image
          className="home-support-section-image"
          src="/assets/images/backgrounds/bg-support.png"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
            overflow: "hidden",
            maxWidth: "740px",
            maxHeight: "90%",
            top: "unset",
            left: "unset",
            right: "-10%",
            bottom: "60px",
          }}
          alt="about-background"
        />
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
                    Why Attorneys <br /> <span>Choose Homestead </span>
                  </h2>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-01.png"
                          alt="response"
                        /> */}
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
                      Every search is personalized. We identify, vet, and
                      recruit the expert who best fits your case criteria.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        End-to-End Case Coordination
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      From intake to trial, our team manages every detail -
                      scheduling, communication, and documentation.
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
                        Transparent Process
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      You always know what’s happening next. We provide clear
                      communication, consistent updates, and straightforward
                      pricing.
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
                        Proven Results
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Our hands-on approach helps firms move faster, secure
                      stronger expert relationships, and deliver better outcomes
                      for clients.
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
                    src="/assets/photos/services/services-why-attorneys-choose-homestead.jpg"
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

      {/* Experts In Every Specialty  */}
      <section className="portfolio-one" id="caseStudy">
        <div className="container">
          <div className="sec-title ">
            <h3 className="sec-title__title text-white text-start">
              Explore by Specialty
            </h3>
            <p className="about-one__content__text text-white mt-2">
              Find experts across medicine, healthcare, and technical
              disciplines, including:
            </p>
          </div>
        </div>
        <div className="container">
          <div className="portfolio-one__wrapper">
            <div className="portfolio-one__item">
              <img
                src="/assets/photos/home/areas_1_medical_malpractice.jpg"
                // src="/assets/images/portfolio/Medical-malpractice_02.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="/medical-malpractice/">
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="/medical-malpractice/">MEDICAL MALPRACTICE</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Orthopedic / Obstetrics & Gynecology / Emergency Medicine
                </div>
              </div>
            </div>
            <div className="portfolio-one__item">
              <img
                src="/assets/photos/home/areas_2_product_liability.jpg"
                // src="/assets/images/portfolio/product-liability_04.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="/product-liability/">
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="/product-liability/">PRODUCT LIABILITY</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Mechanical Engineering / Human Factors / Toxicology
                </div>
              </div>
            </div>
            <div className="portfolio-one__item">
              <img
                src="/assets/photos/home/areas_3_personal_injury.jpg"
                // src="/assets/images/portfolio/personal-injury_1.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="/personal-injury/">
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="/personal-injury/">PERSONAL INJURY</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Accident Reconstruction / Orthopedic / Life Care Planning
                </div>
              </div>
            </div>
            <div className="portfolio-one__item active">
              <img
                src="/assets/photos/home/areas_4_forensic.jpg"
                // src="/assets/images/portfolio/forensic_03.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="/forensic/">
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="/forensic/">FORENSIC</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Forensic Accounting / Digital Forensics / Forensic Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <a href="/experts/" className="procounsel-btn">
            <i>Explore Our Expert Network</i>
            <span>Explore Our Expert Network</span>
          </a>
        </div>
      </section>

      {/* contact */}
      <section id="contact-service" className="contact-one">
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
                    Ready to <br />
                    <span> Get Started?</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Your case deserves the right expert, not just the available
                    one. Let’s find the perfect fit together.
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
              Homestead Experts <br />
              <span>Frequently Asked Questions </span>
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
                        Do you only refer experts already in your network?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          No. While we maintain a large network of trusted
                          professionals, we regularly recruit new experts to
                          meet the specific needs of each case.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        How long does it take to find an expert?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Typical turnaround is 7–14 business days, depending on
                          the complexity of the case. Most are completed sooner.
                          If you need an expert within 10 days, select Rush
                          Matter on the request form. Please note, a $500
                          retention fee applies to rush requests.
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
                      Do you serve both plaintiff and defense attorneys?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Yes. Homestead provides impartial expert witness
                        referrals for both sides of litigation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h4 className="text-white">
                      Is the initial consultation free?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Yes, all initial expert consult calls are complimentary.
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

export default ServicePage;
