import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import FullScaleDistribution from "@/sections/services/FullScaleDistribution";
import HowWeWork from "@/sections/services/HowWeWork";
import LogisticsSupplyChain from "@/sections/services/LogisticsSupplyChain";
import RetailCoverage from "@/sections/services/RetailCoverage";
import WhatWeOffer from "@/sections/services/WhatWeOffer";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
  return handlerMetaDetails("services");
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which brands or products do you offer in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help businesses by providing distribution throughout India with fast-moving consumer goods such as products from the grocery category, kitchen essentials, snacks, beverages, and other fast-moving consumer goods for developing brands.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have retail/e-commerce distribution in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Yes, we do! Nonstop Distributors is involved in the distribution of products to retail and wholesale partners through supermarket-level retail stores and "kirana" convenience store-type businesses, as well as e-commerce/D2C fulfillment type of services throughout the country.',
      },
    },
    {
      "@type": "Question",
      name: "How do you help brands grow in the market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer end-to-end distribution solutions including retail placement, logistics & supply chain management, and real-time inventory control for faster market expansion.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your distribution company different from others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine strong retailer relationships, data driven supply chain management, and localized market expertise to help brands scale efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "How do you support long-term brand growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a strategic distribution partner in India, we make sure strong shelf presence, optimized inventory flow, and consistent retail execution across markets.",
      },
    },
  ],
};

const coveragesItem = [
  {
    title: "Modern Trade",
    img: "/assets/distributor-img/modern-trade.png",
    sectionId: "#",
    description: "Supermarkets. Hypermarkets, Department Stores",
  },
  {
    title: "General Trade",
    img: "/assets/distributor-img/general-trade.png",
    sectionId: "#",
    description: "Kirana Stores, Neighborhood Retailers",
  },
  {
    title: "Convenience",
    sectionId: "#",
    img: "/assets/distributor-img/convenience.png",
    description: "24/7 Stores, Mini-marts, Gas Stations",
  },
  {
    title: "HoReCa",
    img: "/assets/distributor-img/horeca.png",
    sectionId: "#",
    description: "Hotels, Restaurants, Cafes, Caterers",
  },
  {
    title: "E-commerce",
    img: "/assets/distributor-img/e-commerce.png",
    sectionId: "#",
    description: "Online Marketplaces, D2C Platforms",
  },
  {
    title: "Institutional",
    sectionId: "#",
    img: "/assets/distributor-img/institutional.png",
    description: "Corporate, Schools, Hospitals",
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
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* banner */}
      <section className="section-dark">
        <div className="hero-slide hero-about-slide bgimg-services">
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <p style={{ marginTop: "80px" }} className="mb-2">
                <span className="fw-bold text-capitalize">
                  OUR <span className="fw-bold read-more-btn"> SERVICES</span>
                </span>
              </p>
              <h1>
                Efficient and widespread <br /> distribution of FMCG products
              </h1>

              <p style={{ marginBottom: "0px" }}>
                Comprehensive distribution solutions designed to maximize your
                brand's reach and visibility across landscape.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <a
                  href="/contact-us/"
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
      <WhatWeOffer />

      {/*services 1/ Translation Services  */}
      <FullScaleDistribution />

      {/* section 2 / Logistics & Supply Chain */}
      <LogisticsSupplyChain />

      {/* section 3 */}
      <RetailCoverage />

      {/* section 4 - E-commerce Distribution */}
      <section className="team-one section-dark" id="nurse-services">
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
                    <a
                      href="/about-us/"
                      className="procounsel-btn"
                      style={{ fontSize: "14px", whiteSpace: "normal" }}
                    >
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

      {/* Services Grid - Channel Coverage*/}
      <section className="service-one service-two--page service-grid-bg">
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
                <div className="service-details__item text-white h-100 card-box">
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

                    <h3 className="card-title">{item.title}</h3>

                    <p className="card-description mb-0">{item.description}</p>

                    <Link
                      href="/about-us/"
                      className="procounsel-btn procounsel-btn--sm mt-3"
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
      <HowWeWork />

      {/* faq */}
      <section className="faq-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat text-white">
              Nonstop Distribution <br />
              <span>Frequently Asked Questions </span>
            </h2>
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
                      <h3 className="fs-6 text-white">
                        Which brands or products do you offer in India?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h3>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          We help businesses by providing distribution
                          throughout India with fast-moving consumer goods such
                          as products from the grocery category, kitchen
                          essentials, snacks, beverages, and other fast-moving
                          consumer goods for developing brands.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <span className="accrodion__number text-white"></span>
                      <h3 className="fs-6 text-white">
                        Do you have retail/e-commerce distribution in India?
                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                      </h3>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p className="text-white">
                          Yes, we do! Nonstop Distributors is involved in the
                          distribution of products to retail and wholesale
                          partners through supermarket-level retail stores and
                          "kirana" convenience store-type businesses, as well as
                          e-commerce/D2C fulfillment type of services throughout
                          the country.
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
                    <h3 className="fs-6 text-white">
                      How do you help brands grow in the market?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h3>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        We offer end-to-end distribution solutions including
                        retail placement, logistics & supply chain management,
                        and real-time inventory control for faster market
                        expansion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h3 className="fs-6 text-white">
                      What makes your distribution company different from
                      others?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h3>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        We combine strong retailer relationships, data driven
                        supply chain management, and localized market expertise
                        to help brands scale efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <span className="accrodion__number text-white"></span>
                    <h3 className="fs-6 text-white">
                      How do you support long-term brand growth?
                      <i className="accrodion-title__icon accrodion-title__icon1"></i>
                    </h3>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="text-white">
                        As a strategic distribution partner in India, we make
                        sure strong shelf presence, optimized inventory flow,
                        and consistent retail execution across markets.
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
      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default ServicePage;
