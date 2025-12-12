import ScriptsLoader from "@/components/ScriptsLoader";
import ExpertsJsonData from "@/data/experts.json";
import Image from "next/image";
import { notFound } from "next/navigation";

const items = [
  {
    number: "01",
    title: "Independent Medical Exams",
    href: "/independant-medical-exams/",
    text: `Objective examinations conducted by qualified physicians to assess injury, disability, or treatment claims.`,
  },
  {
    number: "02",
    title: "Record Reviews",
    href: "/record-review/",
    text: `Thorough analysis of medical records to clarify key facts and strengthen case strategy.	`,
  },
  {
    number: "03",
    title: "Case Evaluations",
    href: "",
    text: `Expert-driven assessments that help identify strengths, gaps, and opportunities in complex cases.`,
  },
  {
    number: "04",
    title: "Nurse Consulting",
    href: "",
    text: `Clinical guidance from licensed nurses to support documentation, timelines, and standard-of-care analysis.`,
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

export const OurProcess = [
  {
    img: "/assets/images/backgrounds/support-1-icon.png",
    alt: "support-1-icon",
    title: "Targeted expert search and custom vetting",
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
    title: "Complimentary 15-minute consult calls with experts",
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
    title: "Coordination and scheduling managed by your dedicated case manager",
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
    title: "Confidentiality and compliance maintained at every step",
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

const SingleServicePage = async ({ params }) => {
  const { slug } = await params;
  const jsonData = await ExpertsJsonData[slug];

  if (jsonData) {
    const {
      specialty,
      subspecialtiesWithin,
      bannerImg,
      module_Subspecialties_Covered,
      module_Case_Example,
      subSpecialty,
    } = jsonData;

    return (
      <>
        {/* Banner */}
        <section className="" style={{ background: "#0E222A" }}>
          <div
            className="hero-slide hero-about-slide"
            style={{ backgroundImage: `url(${bannerImg})` }}
          >
            <div className="main-slider-one__overlay-one-about-page"></div>
            <div className="content container home-content">
              <div className="custom-max-width3">
                <h1 className="truncate-2-lines">
                  Find a Qualified {specialty} for Your Case
                </h1>

                <h3 className="why-choose-four__content__text text-white fs-5 fw-bold mb-0 font-Merriweather">
                  Homestead connects law firms with trusted {specialty}
                  nationwide, delivering credibility, precision, and
                  professionalism in every case.
                </h3>

                <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Whether you’re preparing for deposition or trial, securing the
                  right {specialty} can make or break your case. Homestead’s
                  nationwide network of vetted experts ensures you’re matched
                  with professionals who are not only leaders in their field but
                  also experienced in testimony, record review, and case
                  preparation.
                </p>

                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                  <a
                    href="#contact-service"
                    className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                  >
                    <i> Request an Expert Witness</i>
                    <span className=""> Request an Expert Witness</span>
                  </a>

                  <a
                    href="#our-process"
                    className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                  >
                    <i>Learn About Our Process</i>
                    <span className="">Learn About Our Process</span>
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
                      Why You Need A <span>{specialty}</span>
                    </h2>
                  </div>

                  <p className="why-choose-four__content__text text-white">
                    <strong>{specialty}</strong> play a critical role in
                    interpreting complex facts and providing unbiased,
                    authoritative opinions that strengthen your case.
                  </p>
                  <p className="why-choose-four__content__text text-white">
                    Homestead’s <strong> {specialty}</strong> experts support
                    both plaintiff and defense attorneys, offering objective
                    insights that help legal teams understand the nuances of
                    evidence.
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
                      src="/assets/photos/sub-specialties/getty-images.jpg"
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
          style={{ background: "linear-gradient(to right, #0E222A, #247ba0)" }}
        >
          <div className="container">
            <div className="custom-max-width">
              <div className="sec-title text-left">
                <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white truncate-2-lines">
                  Subspecialties Within <span>{specialty}</span>
                </h2>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0ms">
                <div style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="about-four__text text-white">
                    Homestead provides access to <strong>{specialty}</strong>{" "}
                    experts across a wide range of subspecialties. Whether your
                    case requires a generalist or highly focused expertise, our
                    network includes professionals with experience in:
                  </p>

                  {module_Subspecialties_Covered["subSpecialties"] &&
                    module_Subspecialties_Covered["subSpecialties"].length >
                    0 && (
                      <ul className="list-unstyled about-four__list row">
                        {module_Subspecialties_Covered["subSpecialties"].map(
                          (item, index) => (
                            <li
                              key={index}
                              className="about-four__item text-white col-12 col-sm-6 col-lg-4"
                              style={{ display: "flex", alignItems: "start" }}
                            >
                              <i className="icon-check mt-2"></i>
                              <p className="mb-0">{item}</p>
                            </li>
                          )
                        )}
                      </ul>
                    )}

                  <p className="about-four__text text-white">
                    If you don’t see the exact subspecialty you need, our team
                    can recruit one for your case
                  </p>

                  <div className="about-four__btns">
                    <a
                      href="#contact-service"
                      className="procounsel-btn"
                      style={{
                        fontSize: "14px !important",
                        whiteSpace: "normal",
                      }}
                    >
                      <i>Request an Expert in This Specialty</i>
                      <span>Request an Expert in This Specialty</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*End to End  */}
        {/* <section
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
            <div style={{ position: "relative", zIndex: 9 }}>
              <h3 className="sec-title__title mb-2 text-white">
                End-to-End Support for <br className="d-none d-lg-inline" />{" "}
                Every Case
              </h3>
              <h5
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: "20px",
                }}
                className="mt-2 font-Merriweather"
              >
                Streamlined Case Management That Keeps You Moving Forward
              </h5>

              <div>
                <p className="about-one__content__text">
                  From expert selection to courtroom support, Homestead is built
                  to serve your firm at <br className="d-none d-lg-inline" />{" "}
                  every stage. We don’t just match you with a qualified expert,
                  we manage the process <br className="d-none d-lg-inline" />{" "}
                  with precision, insight, and discretion.
                </p>
                <p className="about-one__content__text">
                  Our team goes beyond static directories, actively sourcing the
                  right experts, handling <br className="d-none d-lg-inline" />{" "}
                  coordination, and ensuring every detail is buttoned up so you
                  can stay focused on <br className="d-none d-lg-inline" />{" "}
                  winning the case, not chasing down logistics.
                </p>

                <div className="row">
                  {strategySteps.map((step, index) => (
                    <div className="col-12 col-md-12 mt-4 pe-0" key={index}>
                      <div
                        className="case-strategy-cards"
                        style={{
                          display: "flex",
                          gap: "30px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="case-strategy-icon"
                          style={{
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            marginBottom: "3%",
                          }}
                        >
                          <img
                            src={step.img}
                            alt={step.alt}
                            width="80"
                            height="80"
                          />
                        </div>
                        <div>
                          <h5
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
                                strategySteps.length - 1 === index
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
        </section> */}

        {/*our process  */}
        <section
          id="our-process"
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
            <div style={{ position: "relative", zIndex: 9 }}>
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                Streamlined Expert <br className="d-none d-lg-inline" /> Witness
                Recruitment
              </h2>

              <div>
                <p className="about-one__content__text">
                  Homestead manages the expert witness process from start to
                  finish, giving attorneys peace of mind and saving valuable
                  time.
                </p>

                <div className="row mt-5">
                  {OurProcess.map((step, index) => (
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
                  <i>Request an Expert Witness</i>
                  <span>Request an Expert Witness</span>
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
                  <div className="sec-title text-left ">
                    <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                      Why Attorneys Choose Homestead For <span>{specialty}</span>
                    </h2>

                    {/* <h3 className="text-white bw-split-in-up text-xl-nowrap">
                      For {subspecialtiesWithin} Expert Witnesses
                    </h3> */}
                    <p className="about-four__text text-white">
                      Since 2015, Homestead has specialized in sourcing medical
                      and technical experts for both plaintiff and defense
                      counsel. Our team combines legal understanding, clinical
                      insight, and logistical precision, earning the trust of
                      law firms nationwide.
                    </p>
                  </div>

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
                          Independent and <br /> Attorney-Focused
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Because we answer only to our clients, we prioritize
                        long-term trust and measurable results.
                      </p>
                    </div>
                    <div className="why-choose-four__item">
                      <div className="why-choose-four__item__top">
                        <div className="why-choose-four__item__icon">
                          <i className="icon-collaboration"></i>
                        </div>
                        <h3 className="why-choose-four__item__title">
                          Transparency You <br /> Can Trust
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Clear pricing, open communication, and no hidden fees
                        ensure complete confidence in every engagement.
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
                          National Network, Local Attention
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Thousands of vetted experts across every state and
                        specialty mean fast access to the expertise your case
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
                          Responsive and Reliable
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Our streamlined process keeps cases moving and clients
                        supported when timing matters most
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
                      src="/assets/photos/sub-specialties/getty-images2.jpg"
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

        {/* section 2 */}
        <section
          className="team-one"
          id="nurse-services"
          style={{ backgroundColor: "#0E222A" }}
        >
          <div className="container">
            <div className="custom-max-width">
              <div className="sec-title text-left">
                <h2 className="sec-title__title bw-split-in-up text-white font-Montserrat truncate-2-lines">
                  Common Cases Involving <span>{specialty}</span>
                </h2>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0ms">
                <div style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="text-white">
                    <strong>
                      Homestead’s {module_Case_Example["keyoword2"]} experts
                      frequently support:{" "}
                    </strong>
                  </p>

                  <ul className="list-unstyled about-four__list">
                    {module_Case_Example["caseExamples"].map((item, index) => (
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

        {/* our process  */}
        <section className="team-one" style={{ background: "#0E222A" }}>
          <div className="container">
            <div className="sec-title text-left">
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                Comprehensive Support <br /> <span>Beyond Expert Matching</span>
              </h2>
            </div>
            <div className="custom-max-width2">
              <p className="why-choose-four__content__text text-white">
                Our services extend beyond expert witness recruitment to support
                every stage of your case. Whether you need early insight,
                detailed documentation, or a trusted second opinion, our team
                delivers the precision and professionalism you rely on.
              </p>
            </div>

            <div className="row gutter-y-30">
              {items.map((item, index) => (
                <a
                  key={index}
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay={`${index * 100}ms`}
                  href={item.href || "#"}
                >
                  <div
                    className="service-details__item text-white service-support"
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
                      <h4 className="service-details__item__title text-white service-support-text">
                        {item.title}
                      </h4>
                      <p className="service-details__item__text text-white mt-3">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div></div>
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
                      {specialty} <span> Testimony and Services </span>
                    </h2>

                    <p className="contact-one__info__text text-white mt-3">
                      Homestead provides <strong>{specialty}</strong> expert
                      witness services for litigation, arbitration, and
                      insurance review. Our <strong>{specialty}</strong> experts
                      deliver testimony and case evaluations for medical
                      malpractice, personal injury, and product liability
                      claims. Each <strong>{specialty}</strong> witness is
                      carefully matched to your case based on subspecialty,
                      experience, and jurisdiction.
                    </p>

                    <p className="contact-one__info__text text-white mt-3">
                      Whether you need an independent medical examination,
                      record review, or expert testimony, Homestead delivers
                      reliable, vetted expertise to strengthen your case and
                      support your client’s success.
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
                      <li
                        className="contact-one__info__item"
                        style={{ flex: 1 }}
                      >
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
                {subSpecialty} Expert Witness
                <br />
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
                          How long does it take to find a {subSpecialty}?
                          <i className="accrodion-title__icon accrodion-title__icon1"></i>
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="text-white">
                            Most matches are completed within a few business
                            days, with consult calls available within 24–48
                            hours. For highly specialized searches, we’ll keep
                            you updated every step of the way.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <span className="accrodion__number text-white"></span>
                        <h4 className="text-white">
                          What qualifications do your {subSpecialty} have?
                          <i className="accrodion-title__icon accrodion-title__icon1"></i>
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="text-white">
                            Every expert we refer is vetted for credentials,
                            experience, and relevance. Where possible, we verify
                            licensure, case history, and communication style to
                            ensure they meet the highest professional standards.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <span className="accrodion__number text-white"></span>
                        <h4 className="text-white">
                          Can I speak with the expert before retaining them?
                          <i className="accrodion-title__icon accrodion-title__icon1"></i>
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="text-white">
                            Yes. Once qualified candidates are identified,
                            you’ll have the opportunity to schedule an
                            introductory call to confirm fit and discuss case
                            details before moving forward.
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
                        How is pricing determined for a {subSpecialty}?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Each engagement is priced based on the expert’s
                          credentials, time requirements, and case complexity.
                          We’ll provide a clear estimate upfront so you can make
                          an informed decision before proceeding.{" "}
                          <a href="/pricing/">Learn More </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        Do you work with both plaintiff and defense attorneys?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          We support both plaintiff and defense firms across a
                          range of disciplines. Our goal is to connect you with
                          the most qualified expert for your specific case
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        What areas of expertise can Homestead source experts
                        for?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Our network covers four primary areas of litigation:
                          Medical Malpractice, Product Liability, Personal
                          Injury, and Forensic. Within each, we maintain
                          subspecialized professionals ready to assist.{" "}
                          <a href="/experts/">Learn More </a>
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
  }

  notFound();
};

export default SingleServicePage;
