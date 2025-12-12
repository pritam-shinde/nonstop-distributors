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

const items = [
  {
    number: "01",
    title: "Submit Case",
    text: ` We begin with a detailed intake to understand your case objectives and the type of expertise required. Our process ensures every search starts with clarity and precision.`,
  },
  {
    number: "02",
    title: "Expert Search",
    text: ` Leveraging our nationwide network, we identify qualified experts across disciplines. When needed, our team conducts targeted outreach to find the precise fit your case demands.`,
  },
  {
    number: "03",
    title: "Vetting",
    text: ` Each expert is verified for credentials, relevance, and experience. We review qualifications, case history, and communication style to ensure they meet your standards.`,
  },
  {
    number: "04",
    title: "Connection",
    text: `You’re introduced to top candidates ready to discuss your case. We manage all scheduling, communication, and documentation to keep your process seamless from start to finish.`,
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

const Experts = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/experts/experts_hero.jpg')",
          }}
        // style={{ backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')", }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <p style={{ marginTop: "80px" }} className="mb-2">
                <span style={{ color: "#fb3640" }} className="fw-bold">
                  EXPERTS
                </span>
              </p>
              <h1 className="">
                Expert Witnesses for <br /> Every Case Type
              </h1>

              <p style={{ marginBottom: "0px" }}>
                From medical malpractice to product liability, our experts help
                attorneys build strong, credible cases.
              </p>
              <p style={{ marginTop: "10px", marginBottom: "20px" }}>
                For more than a decade, Homestead has specialized in connecting
                law firms with the most qualified experts for complex
                litigation. With roots in medical expert placement and an
                expanded roster across technical, personal injury, and forensic
                disciplines, we help you find the right voice for your case.
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

      <section
        className="about-one"
        id="about"
        style={{ position: "relative", backgroundColor: "#0E222A" }}
      >
        <Image
          src="/assets/images/backgrounds/section-2-1-b-new.png"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
            overflow: "hidden",
          }}
          alt="about-background"
        />
        <div className="container position-relative z-3">
          <div className="wow fadeInRight" data-wow-delay="300ms">
            <div className="about-one__inner1">
              <div className="about-one__content1">
                <div className="sec-title text-left ">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    Built on Medical Expertise. <br />
                    <span>Expanded for Every Case.</span>
                  </h2>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Our foundation in medical litigation prepared us to meet the
                    expert needs of today’s diverse caseloads.
                  </p>
                </div>

                <p className="about-one__content__text text-white custom-max-width2 mt-4">
                  Since 2015, Homestead has been trusted by law firms nationwide
                  for sourcing and vetting medical experts. As our clients’
                  needs evolved, so did our network, now including product
                  engineers, accident reconstructionists, and forensic
                  specialists to serve every corner of litigation.
                </p>

                <p className="about-one__content__text text-white custom-max-width2">
                  Whether you’re evaluating the standard of care, assessing
                  product design, or investigating cause, our experts provide
                  the clarity and credibility your case requires. Explore our
                  core areas of expertise below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New 1*/}
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
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <a
                      href="/medical-malpractice/"
                      className="text-white hover-btn-experts"
                    >
                      Medical Malpractice Experts
                    </a>
                  </h2>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Homestead’s medical expert network spans every clinical
                  discipline. From surgeons to nursing specialists, we match
                  experts who can review records, assess standard of care, and
                  testify with authority. Our experts are experienced in both
                  plaintiff and defense cases and understand the rigor required
                  for medical testimony.
                </p>

                <ul className="list-unstyled about-four__list">
                  {[
                    "Orthopedics",
                    "Neurosurgery",
                    "Emergency Medicine",
                    "Nursing",
                    "Psychiatry",
                    "Radiology",
                    "Internal Medicine",
                    {
                      title:
                        "Explore Full List of Medical Malpractice Expert Witnesses",
                      href: "/medical-malpractice/",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="about-four__item text-white"
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <i className="icon-check mt-2"></i>
                      {typeof item === "string" ? (
                        <p className="mb-0">{item}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="mb-0 text-white fw-normal text-decoration-none hover-underline"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="portfolio-one__wrapper">
                <div className="portfolio-one__item">
                  <img
                    // src="/assets/images/portfolio/Medical-malpractice_02.jpg"
                    src="/assets/photos/experts/areas_1_medical_malpractice.jpg"
                    alt="procounsel"
                  />
                  <div className="portfolio-one__item__rm">
                    <a href="/medical-malpractice/">
                      <i className="icon-right-arrow-1-4"></i>
                    </a>
                  </div>
                  <div
                    className="portfolio-one__item__content"
                    style={{ width: "100%" }}
                  >
                    <h3 className="portfolio-one__item__title">
                      <a href="/medical-malpractice/">MEDICAL MALPRACTICE</a>
                    </h3>
                    <div
                      className="portfolio-one__item__cat mt-2"
                      style={{ lineHeight: "14px" }}
                    >
                      Orthopedic / Obstetrics & Gynecology / Emergency Medicine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
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
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <a
                      href="/product-liability/"
                      className="text-white hover-btn-experts"
                    >
                      Product Liability Experts
                    </a>
                  </h2>
                </div>

                <p className="why-choose-four__content__text text-white">
                  When product design, manufacturing, or safety is in question,
                  our experts bring deep industry knowledge and technical
                  insight. We source engineers and scientists with firsthand
                  experience in product design, testing, and failure analysis.
                  Professionals who can explain complex systems in a way juries
                  and judges understand.
                </p>
                <ul className="list-unstyled about-four__list">
                  {[
                    "Mechanical and Electrical Engineering",
                    "Human Factors and Industrial Design",
                    "Materials Science",
                    "Consumer Product Safety",
                      {
                      title:
                        "Explore Full List of Product Liability Experts",
                      href: "/product-liability/",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="about-four__item text-white"
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <i className="icon-check mt-2"></i>
                      {/* <p className="mb-0">{item}</p> */}
                      {typeof item === "string" ? (
                        <p className="mb-0">{item}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="mb-0 text-white fw-normal text-decoration-none hover-underline"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="portfolio-one__wrapper">
                <div className="portfolio-one__item">
                  <img
                    src="/assets/photos/experts/areas_2_product_liability.jpg"
                    // src="/assets/images/portfolio/product-liability_04.jpg"
                    alt="procounsel"
                  />
                  <div className="portfolio-one__item__rm">
                    <a href="/product-liability/">
                      <i className="icon-right-arrow-1-4"></i>
                    </a>
                  </div>
                  <div
                    className="portfolio-one__item__content"
                    style={{ width: "100%" }}
                  >
                    <h3 className="portfolio-one__item__title">
                      <a href="/product-liability/">
                        Product Liability Experts
                      </a>
                    </h3>
                    <div className="portfolio-one__item__cat mt-2">
                      Primary / Emergency / Internist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
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
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <a
                      href="/personal-injury/"
                      className="text-white hover-btn-experts"
                    >
                      Personal Injury Experts
                    </a>
                  </h2>
                </div>
                <p className="why-choose-four__content__text text-white">
                  Homestead’s personal injury experts help quantify damages,
                  reconstruct accidents, and interpret medical evidence. Whether
                  evaluating causation, long-term care needs, or life
                  expectancy, we ensure reliable, defensible testimony that
                  supports your client’s case with clarity and confidence.
                </p>
                <ul className="list-unstyled about-four__list">
                  {[
                    "Accident Reconstruction",
                    "Life Care Planning",
                    "Vocational Rehabilitation",
                    "Medical and Financial Damages Assessment",
                      {
                      title:
                        "Explore Full List of Personal Injury Experts",
                      href: "/personal-injury/",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="about-four__item text-white"
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <i className="icon-check mt-2"></i>
                      {/* <p className="mb-0">{item}</p> */}
                      {typeof item === "string" ? (
                        <p className="mb-0">{item}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="mb-0 text-white fw-normal text-decoration-none hover-underline"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="portfolio-one__wrapper">
                <div className="portfolio-one__item">
                  <img
                    src="/assets/photos/experts/areas_3_personal_injury.jpg"
                    // src="/assets/images/portfolio/personal-injury_1.jpg"
                    alt="procounsel"
                  />
                  <div className="portfolio-one__item__rm">
                    <a href="/personal-injury/">
                      <i className="icon-right-arrow-1-4"></i>
                    </a>
                  </div>
                  <div
                    className="portfolio-one__item__content"
                    style={{ width: "100%" }}
                  >
                    <h3 className="portfolio-one__item__title">
                      <a href="/personal-injury/">personal injury Experts</a>
                    </h3>
                    <div className="portfolio-one__item__cat mt-2">
                      Primary / Emergency / Internist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 */}
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
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <a
                      href="/forensic/"
                      className="text-white hover-btn-experts"
                    >
                      Forensic Experts
                    </a>
                  </h2>
                </div>

                <p className="why-choose-four__content__text text-white">
                  Our forensic experts bring scientific and investigative
                  precision to complex cases. From digital forensics to
                  toxicology, they help uncover, interpret, and explain
                  technical evidence with accuracy and credibility.
                </p>
                <ul className="list-unstyled about-four__list">
                  {[
                    "Digital Forensics",
                    "Toxicology",
                    "Fire and Explosion Analysis",
                    "DNA and Trace Evidence",
                      {
                      title:
                        "Explore Full List of Forensic Experts",
                      href: "/forensic/",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="about-four__item text-white"
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <i className="icon-check mt-2"></i>
                      {/* <p className="mb-0">{item}</p> */}
                       {typeof item === "string" ? (
                        <p className="mb-0">{item}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="mb-0 text-white fw-normal text-decoration-none hover-underline"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="portfolio-one__wrapper">
                <div className="portfolio-one__item">
                  <img
                    src="/assets/photos/experts/areas_4_forensic.jpg"
                    // src="/assets/images/portfolio/forensic_03.jpg"
                    alt="procounsel"
                  />
                  <div className="portfolio-one__item__rm">
                    <a href="/forensic/">
                      <i className="icon-right-arrow-1-4"></i>
                    </a>
                  </div>
                  <div
                    className="portfolio-one__item__content"
                    style={{ width: "100%" }}
                  >
                    <h3 className="portfolio-one__item__title">
                      <a href="/forensic/">FORENSIC EXPERTS</a>
                    </h3>
                    <div className="portfolio-one__item__cat mt-2">
                      Primary / Emergency / Internist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our process  */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              How We <br /> <span>Find and Vet Experts</span>
            </h2>
          </div>
          <div className="custom-max-width2">
            <p className="why-choose-four__content__text text-white">
              Each Homestead expert is sourced through a rigorous process of
              credential verification, experience review, and case-specific
              matching. Our in-house team handles outreach, screening, and
              coordination so you can focus on case strategy. From the first
              consultation to final testimony, we ensure every expert is
              prepared, professional, and aligned with your case needs.
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
          <div></div>
        </div>
      </section>

      {/*Experience*/}
      <section
        className="about-four about-four-about"
        id="about"
        style={{ background: "#0E222A" }}
      >
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-xl-4 col-md-12">
              <div className="about-four__img bw-img-anim-left">
                <Image
                  src="/assets/photos/experts/trusted_by_experts_1.jpg"
                  alt="trusted by experts"
                  width={340}
                  height={570}
                />
                {/* <img src="/assets/photos/experts/trusted_by_experts.jpg" alt="trusted by experts" /> */}
                {/* <img src="/assets/images/backgrounds/about-3-1.jpg" alt="" /> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-8 col-md-12">
              <div className="about-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                    Trusted by <br /> <span>Attorneys Nationwide</span>
                  </h2>
                </div>
                <p className="about-four__text text-white">
                  With over 10,000 vetted experts and cases supported in all 50
                  states, Homestead is a proven partner for firms of every size.
                  Our clients rely on us for responsive communication, deep
                  industry knowledge, and expert matches that deliver results in
                  the courtroom.
                </p>

                <div className="about-four__btns">
                  <a href="/about-us/" className="procounsel-btn ">
                    <i> Discover More</i>
                    <span> Discover More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="about-four__right">
                <div className="why-choose-four__right">
                  <div className="why-choose-four__right__wrapper mx-auto">
                    <div className="why-choose-four__box count-box">
                      <h3 className="why-choose-four__box__count">
                        <span
                          className="count-text"
                          data-stop="10000"
                          data-speed="1500"
                          data-suffix="+"
                        >
                          10,000+
                        </span>
                      </h3>
                      <p className="why-choose-four__box__text">
                        Experts <br /> Vetted
                      </p>
                    </div>
                    <div className="why-choose-four__box count-box">
                      <h3 className="why-choose-four__box__count">
                        <span
                          className="count-text"
                          data-stop="50"
                          data-speed="1500"
                        >
                          50
                        </span>
                      </h3>
                      <p className="why-choose-four__box__text">
                        States <br /> Served
                      </p>
                    </div>
                    <div className="why-choose-four__box count-box">
                      <h3 className="why-choose-four__box__count">
                        <span
                          className="count-text"
                          data-stop="95"
                          data-speed="1500"
                          data-suffix="%"
                        >
                          95%
                        </span>
                      </h3>
                      <p className="why-choose-four__box__text">
                        Case Match <br /> Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="service-one" id="tailored-background">
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              More Than <span>Expert Matching</span>
            </h2>
            <p className="about-four__text text-white custom-max-width2">
              Homestead offers comprehensive litigation support, from initial
              case screening to expert background checks. Our goal is to provide
              attorneys with confidence and clarity at every stage of
              litigation.
            </p>
          </div>

          <div className="row gutter-y-30">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
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
                      // href="#"
                      href={`/${item.sectionId}/`}
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

      {/* contact */}
      <section className="contact-one" id="contact-service">
        {/* <div className="tailored-redline" style={{ position: "unset" }}></div> */}
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <span className="text-white"> Need an Expert</span> <br />
                    <span> for Your Case?</span>
                  </h2>

                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Share your case details and our team will begin identifying
                    qualified experts right away.
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
                        <i>Submit a Case</i>
                        <span>Submit a Case</span>
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

export default Experts;
