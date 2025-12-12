import HubspotForm from "@/components/forms/HubspotForm";
import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Apply to Join",
    text: `Submit your credentials and tell us about your area of expertise. Our team will review your background to ensure alignment with our standards and case demand.`,
  },
  {
    number: "02",
    title: "Case Match & Introduction",
    text: `When a suitable case arises, we’ll contact you with key details. You’ll review the opportunity and, if interested, we’ll arrange a free introductory call with the attorney.`,
  },
  {
    number: "03",
    title: "Retention & Support",
    text: `Once retained, you’ll be connected with a dedicated case manager who handles scheduling, communication, and administrative coordination.`,
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    text: `As part of our network, you’ll continue to receive case referrals tailored to your specialty with no subscriptions, no long-term commitments.`,
  },
];

const Onboard = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/photos/become-an-expert/become_an_expert_hero.jpg')",
            // backgroundImage:"url('assets/images/backgrounds/banner_slide1-new.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <h1 className="">
              Share Your Expertise.
              <br />{" "}
              <span style={{ color: "#fb3640" }}>
                Strengthen the Legal Process
              </span>
            </h1>

            <p style={{ marginBottom: "0px" }}>
              Join Homestead’s trusted network of expert witnesses and make a
              measurable impact on the outcome of complex cases.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>
              Homestead connects qualified professionals with attorneys who rely
              on accurate, credible, and timely expertise. As part of our
              nationwide network, you’ll receive vetted referrals, full case
              support, and guidance throughout every stage of your engagement.
            </p>

            <div>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                <a
                  href="#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Apply to Join Our Network</i>
                  <span className="">Apply to Join Our Network</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section
        className="team-one"
        id="nurse-services"
        style={{ background: "linear-gradient(to right, #0E222A, #247ba0)" }}
      >
        <div className="container">
          <div className="custom-max-width">
            <div className="sec-title text-left">
              {/* <h2 className="sec-title__title bw-split-in-up text-white">
                A Trusted Partner for <br /> <span>Expert Witnesses</span>
              </h2> */}
              <h3 className="sec-title__title bw-split-in-up text-white">
                A Trusted Partner for <br /> <span>Expert Witnesses</span>
              </h3>

              <p className="about-four__text text-white fs-5 fw-bold font-Merriweather mb-0">
                We believe expert work should be respected, supported, and
                fairly compensated.
              </p>
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <p className="about-four__text text-white">
                  Homestead has built a reputation for professionalism and
                  integrity across the expert witness community. We work with
                  physicians, engineers, business professionals, and other
                  specialists who value preparation, communication, and
                  credibility.
                </p>

                <p className="text-white mt-4">
                  <strong>
                    When you join our network, you gain access to:{" "}
                  </strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Pre-screened case opportunities </strong> that fit
                      your expertise.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Professional case management </strong> from first
                      contact to final report.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Direct attorney introductions </strong> for clear,
                      streamlined communication.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Prompt payment </strong> for services rendered.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      <strong>Dedicated support </strong> for logistics,
                      scheduling, and invoicing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - section 3 */}
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
                    Experts Who Bring <span>Experience and Integrity</span>
                  </h2>
                </div>

                <p className="why-choose-four__content__text text-white">
                  We partner with qualified professionals who have built
                  credibility in their fields including those new to legal
                  consulting. Whether you’re an experienced expert witness or
                  exploring this work for the first time, Homestead provides the
                  structure, guidance, and visibility you need to succeed.
                </p>

                <p className="text-white mt-4">
                  <strong>Ideal Candidates Include:</strong>
                </p>

                <ul className="list-unstyled about-four__list">
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Licensed medical professionals, engineers, scientists, and
                      business leaders.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Professionals with advanced degrees, certifications, or
                      technical credentials.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Individuals comfortable with communicating complex ideas
                      clearly and confidently.
                    </p>
                  </li>
                  <li
                    className="about-four__item text-white"
                    style={{ display: "flex", alignItems: "start" }}
                  >
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Experts who value integrity, neutrality, and clear
                      documentation.
                    </p>
                  </li>
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
                    src="/assets/photos/become-an-expert/become_an_expert_module_3.jpg"
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

      {/* Expert Witnesses - section 4 */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              Our <span>Streamlined Process</span>
            </h3>
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

          <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-5">
            <a
              href="#"
              className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
            >
              <i>Submit Your Application</i>
              <span className="">Submit Your Application</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stand For */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              Built on Trust, <span>Not Transactions</span>
            </h3>
            <p className="about-four__text text-white fs-5 mb-0">
              Our experts join and stay with Homestead because of our
              professionalism, respect, and transparent process. We treat every
              relationship, with experts and attorneys alike, as a partnership
              built to last.
            </p>
          </div>
          <div className="row gutter-y-30">
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="00ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  <Image
                    width={31}
                    height={31}
                    src="/assets/images/shapes/stand_for_1.png"
                    alt="response"
                  />
                  {/* <i className="icon-idea-1"></i> */}
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/images/shapes/stand_for_1.png"
                      alt="response"
                    />
                    {/* <i className="icon-idea-1"></i> */}
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Integrity First
                  </h4>

                  <p className="service-details__item__text text-white">
                    We represent you with honesty and precision, never
                    overselling your qualifications.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  {/* <i className="icon-idea-1"></i> */}
                  <Image
                    width={31}
                    height={31}
                    src="/assets/images/shapes/stand_for_2.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    {/* <i className="icon-idea-1"></i> */}
                    <Image
                      width={31}
                      height={31}
                      src="/assets/images/shapes/stand_for_2.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Partnership Without Barriers
                  </h4>

                  <p className="service-details__item__text text-white">
                    No fees or subscriptions; join our network at no cost.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  <Image
                    width={31}
                    height={31}
                    src="/assets/images/shapes/stand_for_3.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/images/shapes/stand_for_3.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    People Before Process
                  </h4>

                  <p className="service-details__item__text text-white">
                    We value your expertise and protect your time with clear
                    communication.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  {/* <i className="icon-address-book-1"></i> */}
                  <Image
                    width={31}
                    height={31}
                    src="/assets/images/shapes/stand_for_4.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/images/shapes/stand_for_4.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Excellence in Every Detail
                  </h4>

                  <p className="service-details__item__text text-white">
                    From case intake to expert payment, our systems ensure a
                    smooth, professional experience.
                  </p>
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
                  <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                    <span className="text-white"> Ready to Lend </span> <br />
                    <span> Your Expertise?</span>
                  </h2>

                  <p className="contact-one__info__text text-white font-Merriweather fs-5">
                    Join a network built on credibility, transparency, and
                    trust. Help attorneys deliver justice and elevate your
                    professional impact along the way.
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
                <div className="contact-one__form__bg-one"></div>
                <div className="contact-one__form__bg-two"></div>
                <HubspotForm />
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
              Common Questions from <br />
              <span>New Experts</span>
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
                        Is there a cost to join?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          No. There are no application or membership fees.
                          Homestead only earns when you are retained and
                          compensated for your work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        Do I need prior experience as an expert witness?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Not necessarily. Many of our experts began with their
                          first case through Homestead. We provide guidance on
                          process, communication, and expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        How are experts paid? <strong>VERIFY</strong>
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Experts are paid directly by the retaining party
                          according to agreed terms, typically following your
                          retainer and invoicing schedule. Homestead assists in
                          coordinating all logistics and communication.
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
                      What types of cases will I see?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Homestead’s expert network supports a wide range of
                        litigation needs, with particular focus in:
                      </p>
                      <ul className="list-unstyled about-four__list mt-4">
                        <li
                          className="about-four__item text-white"
                          style={{ display: "flex", alignItems: "start" }}
                        >
                          <i className="icon-check mt-2"></i>
                          <p className="mb-0">
                            <strong>Medical Malpractice </strong> Physicians,
                            nurses, and medical specialists who provide opinions
                            on standards of care, causation, and clinical
                            outcomes.
                          </p>
                        </li>
                        <li
                          className="about-four__item text-white"
                          style={{ display: "flex", alignItems: "start" }}
                        >
                          <i className="icon-check mt-2"></i>
                          <p className="mb-0">
                            <strong>Product Liability </strong> Engineers,
                            scientists, and technical professionals who assess
                            product design, safety, and manufacturing practices.
                          </p>
                        </li>
                        <li
                          className="about-four__item text-white"
                          style={{ display: "flex", alignItems: "start" }}
                        >
                          <i className="icon-check mt-2"></i>
                          <p className="mb-0">
                            <strong>Personal Injury </strong>Medical,
                            biomechanical, and occupational experts who evaluate
                            injuries, damages, and recovery outcomes
                          </p>
                        </li>
                        <li
                          className="about-four__item text-white"
                          style={{ display: "flex", alignItems: "start" }}
                        >
                          <i className="icon-check mt-2"></i>
                          <p className="mb-0">
                            <strong>Forensic </strong> Experts in accident
                            reconstruction, criminal analysis, and investigative
                            science who help clarify technical or evidentiary
                            details.
                          </p>
                        </li>
                      </ul>
                      <p className="text-white">
                        Each case is carefully matched to your background and
                        expertise to ensure relevance and impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h4 className="text-white">
                      How often will I be contacted for cases?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Frequency varies based on your specialty, credentials,
                        and case volume in your field. Homestead remains
                        proactive in connecting you when suitable opportunities
                        arise.
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

export default Onboard;
