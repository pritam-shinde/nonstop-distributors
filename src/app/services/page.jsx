import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";
import Link from "next/link";

// const services = [
//   {
//     title: "Expert Witness Recruitment",
//     img: "/assets/images/shapes/expert-witness-requirement.png",
//     sectionId: "expert-witness",
//     description:
//       "We recruit qualified experts across every field, with depth in medical, product liability, personal injury, and forensic cases.",
//   },
//   {
//     title: "Merit Reviews & Legal Nurse Services",
//     img: "/assets/images/shapes/legal-nurse.png",
//     sectionId: "nurse-services",
//     description:
//       "In-house legal nurses and paralegals analyze medical records to determine case merit accurately.",
//   },
//   {
//     title: "Expert Background Checks",
//     sectionId: "expert-witness-profile-challenge-study",
//     img: "/assets/images/shapes/background-check.png",
//     description:
//       "We verify expert credibility with thorough background research, challenge studies, and detailed expert profiles.",
//   },
// ];

const coveragesItem = [
  {
    title: "Modern Trade",
    img: "/assets/images/shapes/expert-witness-requirement.png",
    sectionId: "#",
    description:
      "Supermarkets. Hypermarkets, Department Stores",
  },
  {
    title: "General Trade",
    img: "/assets/images/shapes/legal-nurse.png",
    sectionId: "#",
    description:
      "Kirana Stores, Neighborhood Retailers",
  },
  {
    title: "Convenience",
    sectionId: "#",
    img: "/assets/images/shapes/background-check.png",
    description:
      "24/7 Stores, Mini-marts, Gas Stations",
  },
  {
    title: "HoReCa",
    img: "/assets/images/shapes/expert-witness-requirement.png",
    sectionId: "#",
    description: "Hotels, Restaurants, Cafes, Caterers"
  },
  {
    title: "E-commerce",
    img: "/assets/images/shapes/legal-nurse.png",
    sectionId: "#",
    description:
      "Online Marketplaces, D2C Platforms",
  },
  {
    title: "Institutional",
    sectionId: "#",
    img: "/assets/images/shapes/background-check.png",
    description: "Corporate, Schools, Hospitals"
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
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <p style={{ marginTop: "80px" }} className="mb-2">
                <span style={{ color: "#fb3640" }} className="fw-bold text-capitalize">
                  OUR SERVICES
                </span>
              </p>
              <h1 className="">
                Lorem ipsum dolor sit. <br /> Lorem, ipsum dolor.
              </h1>

              <p style={{ marginBottom: "0px" }}>
                Comprehensive distribution solutions designed to maximize your
                brand's reach and visibility across landscape.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="/contact-us/#contact-service/"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Contact Us</i>
                  <span className="">Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys / What We offer */}
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
          <div className="margin-about">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
                <div className="why-choose-four__content">
                  <div className="sec-title text-left">
                    <h3 className="sec-title__title bw-split-in-up">
                      What We <br />
                      <span> Offer</span>
                    </h3>
                    <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
                      End-to-end distribution services tailored to your brand's
                      unique needs
                    </h4>
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
                          Full-Scale <br /> Distribution.
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Complete distribution management from warehouse to
                        retail shelf, ensuring your products reach to your
                        store.
                      </p>
                    </div>
                    <div className="why-choose-four__item">
                      <div className="why-choose-four__item__top">
                        <div className="why-choose-four__item__icon">
                          <i className="icon-collaboration"></i>
                        </div>
                        <h3 className="why-choose-four__item__title">
                          Logistics & <br /> Supply Chain.
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Efficient logistics solutions temperature control, and
                        optimized delivery routes.
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
                          Retail <br /> Coverage.
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Deep penetration across modern trade, general trade, and
                        emerging retail formats.
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
                          E-commerce <br /> Distribution
                        </h3>
                      </div>
                      <p className="why-choose-four__item__text text-white">
                        Seamless integration with major online marketplaces and
                        D2C fulfillment solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
                <div className="why-choose-four__right">
                  <div className="why-choose-four__img mx-auto">
                    <img
                      src="/assets/photos/about/why-attorneys-trust-homestead.jpg"
                      alt="why-choose-us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*services 1/ Full-Scale Distribution  */}
      <section
        className="team-one"
        id="expert-witness"
        style={{ background: "linear-gradient(to right, #247ba0, #0E222A )" }}
      >
        <div className="container">
          <div className="custom-max-width">
            <div className="sec-title text-left">
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                Full-Scale Distribution
              </h2>
              {/* <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
               Our comprehensive distribution network ensures your products reach to your store. auan.comacol indie From matropellion cities to tier towns, we have the infrastructure and expertise to manage your brand's complete distribution needs.
              </p> */}
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <p className="about-four__text text-white">
                  Our comprehensive distribution network ensures your products
                  reach to your store. auan.comacol indie From matropellion
                  cities to tier towns, we have the infrastructure and expertise
                  to manage your brand's complete distribution needs.
                </p>

                {/* <p className="about-four__text text-white">
                  We recruit for a wide range of case types, with particular
                  depth in <strong>medical malpractice</strong>,{" "}
                  <strong>product liability</strong>,{" "}
                  <strong>personal injury</strong>, and{" "}
                  <strong>forensic matters</strong>. For medical cases, we also
                  coordinate independent medical examinations and record reviews
                  as needed to support your expert strategy.
                </p> */}

                <ul className="list-unstyled about-four__list">
                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Warehouse network in strategic locations
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">Real time inventory management</p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Dedicated sales team for each territory
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Scalable solutions for seasonal demands
                    </p>
                  </li>
                </ul>

                <div className="about-four__btns">
                  <a
                    href="#"
                    className="procounsel-btn"
                    style={{ fontSize: "14px", whiteSpace: "normal" }}
                  >
                    <i>Learn More About Distribution</i>
                    <span>Learn More About Distribution</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 / Logistics & Supply Chain */}
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
                  Logistics & Supply Chain
                </h2>

                {/* <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                  Clinical clarity from experienced Legal Nurse Consultants.
                </p> */}
              </div>

              <div className="wow fadeInUp" data-wow-delay="0ms">
                <div style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="about-four__text text-white">
                    Our state-of-the-art logistics infrastructure ensures timely
                    delivery while maintaining product integrity. We leverage
                    technology and best practices to optimize every mile of the
                    journey.
                  </p>

                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        Fleet of temperature-controlled vehicles
                      </p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </li>
                  </ul>

                  <div className="about-four__btns">
                    <a
                      href="#"
                      className="procounsel-btn"
                      style={{ fontSize: "14px", whiteSpace: "normal" }}
                    >
                      <i>Learn More About Logistic</i>
                      <span>Learn More About Logistic</span>
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
                Retail Coverage
              </h2>
              {/* <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                Ensuring the credibility of every expert before they take the
                stand.
              </p> */}
            </div>

            <div className="wow fadeInUp" data-wow-delay="0ms">
              <div style={{ marginLeft: 0, marginRight: 0 }}>
                <p className="about-four__text text-white">
                  We ensure your products are visible and available across all
                  retail formats. Our retail team maintains strong relationships
                  with store owners and category managers to secure the best
                  shelf positions.
                </p>

                {/* <p className="text-white mt-4">
                  <strong>Services Include: </strong>
                </p> */}

                <ul className="list-unstyled about-four__list">
                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Modern Trade (Supermarkets, Hypermarkets)
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      General Trade (Kirana stores, Local retailers)
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">Convenience stores and Mini-marts</p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      Institutional Sales (Hotels, Restaurants, Cafes)
                    </p>
                  </li>

                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">Wholesale and Cash & Carry</p>
                  </li>
                  <li className="about-four__item text-white">
                    <i className="icon-check mt-2"></i>
                    <p className="mb-0">
                      {" "}
                      Specialty retail and Premium outlets
                    </p>
                  </li>
                </ul>

                <div className="about-four__btns">
                  <a
                    href="/expert-witness-profile-challenge-study/"
                    className="procounsel-btn"
                    style={{ fontSize: "14px", whiteSpace: "normal" }}
                  >
                    <i>Learn More About RETAIL COVERAGE</i>
                    <span>Learn More About RETAIL COVERAGE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
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
                  E-commerce Distribution
                </h2>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0ms">
                <div style={{ marginLeft: 0, marginRight: 0 }}>
                  <p className="about-four__text text-white">
                    Tap into India's booming e-commerce market with our digital
                    distribution solutions. We manage your brand's presence
                    across all major online platforms with seamless fulfillment.
                  </p>

                  <ul className="list-unstyled about-four__list">
                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        Amazon Flipkart, and marketplace management
                      </p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">D2C fulfillment and delivery</p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">Catalog and content management</p>
                    </li>

                    <li className="about-four__item text-white">
                      <i className="icon-check mt-2"></i>
                      <p className="mb-0">
                        Returns and customer service handling
                      </p>
                    </li>
                  </ul>

                  <div className="about-four__btns">
                    <a href="#" className="procounsel-btn" style={{ fontSize: "14px", whiteSpace: "normal" }}>
                      <i>Learn More About E-COMMERCE</i>
                      <span>Learn More About E-COMMERCE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid /Channel Coverage*/}
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
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up text-white font-Montserrat">
              Channel Coverage
            </h2>
            <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
              Complete access to every retail format in India
            </p>
          </div>
          <div className="row gutter-y-30">
            {coveragesItem.map((item, index) => (
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

                    <Link href="#"
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

      {/* How We Work */}
      <section className="why-choose-three">
        <div className="why-choose-three__bg" style={{ backgroundImage: "url('assets/images/shapes/why-choose-three-bg.png')" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-three__content wow fadeInUp" data-wow-delay="300ms">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    How We <span> Work</span>
                  </h3>
                  <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                    Our proven partnership process
                  </p>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Consultation
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        We understand your brand, goals, and market aspirations through detailed discussions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Strategy
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        Our team crafts a customized distribution strategy aligned with your objectives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Execution
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        We deploy our resources and network to bring your products to market efficiently
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Growth
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        Continuous optimization and scaling to maximize your brand's market potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-three__right wow slideInRight" style={{ backgroundImage: "url('/assets/photos/about/how_we_work.jpg')" }}></div>
            </div>
          </div>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat mollitia totam repellat, voluptas nemo!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h4 className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae doloribus, dolorum fugiat magnam ratione unde facere. Ut sint rem alias!
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem veritatis quis repudiandae exercitationem cupiditate quaerat voluptas officia sunt magnam ipsa.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h4 className="text-white">
                      Lorem ipsum dolor sit amet consectetur?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-fluid d-flex align-items-center justify-content-center text-center newsletter-section">
        <div className="circle-newsletter"

        />

        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-md-10 col-sm-12">
              <h2 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
                Join Our Growing Network
              </h2>

              <p className="text-white mb-4" style={{ fontSize: "clamp(14px, 2vw, 18px)", opacity: 0.9, }}>
                Whether you're a brand looking for distribution or a professional
                seeking opportunities, we'd love to hear from you.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#"
                  className=" fw-semibold custom-btn"
                >
                  REQUEST A PROPOSAL
                </a>

                <a href="#"
                  className=" fw-semibold custom-btn"
                >
                  LEARN ABOUT DISTRIBUTION
                </a>
                <a href="#" className=" fw-semibold custom-btn">
                  VIEW OUR PARTNERS
                </a>

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
