import ScriptsLoader from "@/components/ScriptsLoader";
import { partners } from "@/constants/partners";
import { handlerMetaDetails } from "@/constants/seo";
import Image from "next/image";

export const generateMetadata = () => {
  return handlerMetaDetails("partners");
};

export default function PartnersPage() {
  const channels = [
    {
      title: "General Trade",
      text: "High-frequency retailer coverage with disciplined beats and efficient replenishment.",
      icon: "/assets/distributor-img/general-trade.png",
    },
    // {
    //   title: "Modern Trade",
    //   text: "Stronger shelf presence through structured execution, visibility, and compliance.",
    //   icon: "/assets/distributor-img/modern-trade.png",
    // },
    // {
    //   title: "HoReCa",
    //   text: "Reliable supply for hotels, restaurants, and catering with on-time fulfillment.",
    //   icon: "/assets/distributor-img/horeca.png",
    // },
    {
      title: "Institutional",
      text: "Consistent service for corporate, education, and bulk procurement requirements.",
      icon: "/assets/distributor-img/institutional.png",
    },
    {
      title: "E-commerce",
      text: "Channel-ready inventory support for online platforms with accurate dispatches.",
      icon: "/assets/distributor-img/convenience.png",
    },
    {
      title: "Convenience",
      text: "Fast-moving assortments for quick, high-rotation outlets and local demand hubs.",
      icon: "/assets/distributor-img/e-commerce.png",
    },
  ];

  const enablement = [
    {
      title: "Onboarding & Planning",
      text: "We align on objectives, routes, and assortment to set clear targets and timelines.",
      icon: "/assets/distributor-img/operational-excellence-new.png",
    },
    {
      title: "Distribution & Availability",
      text: "Inventory discipline and strong fulfilment keep products in-stock where it matters.",
      icon: "/assets/distributor-img/retail-channel-new.png",
    },
    {
      title: "Visibility & Growth",
      text: "Retailer activation and reporting loops help improve visibility and velocity.",
      icon: "/assets/distributor-img/multi-category-expertise-new.png",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0E222A" }}>
        <div
          className="hero-slide partners-hero-slide"
          style={{
            backgroundImage: "url('/assets/distributor-img/about-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "800px",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2 text-capitalize">
              OUR <span className="fw-bold read-more-btn">PARTNERS</span>
            </p>
            <h1 className="">
              Strong brands, <br /> stronger distribution.
            </h1>
            <div>
              <p style={{ marginBottom: 0 }}>
                We collaborate with trusted FMCG brands to deliver consistent
                availability, great visibility, and sustainable growth across
                channels.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start mt-4">
              <a href="/contact-us/" className="procounsel-btn">
                <i>Become a Partner</i>
                <span>Become a Partner</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner showcase */}
      <section className="why-choose-four partners-showcase">
        <div
          className="why-choose-four__bg jarallax"
          data-jarallax
          data-speed="0.3"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/bg_why_choose_us.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
              Our Partner <span>Brands</span>
            </h2>
            <p className="why-choose-four__content__text text-white mt-3">
              We work with trusted FMCG brands and build distribution programs
              that focus on availability, visibility, and sustainable growth.
            </p>
          </div>

          <div className="row g-4 mt-4">
            {partners.map((partner) => (
              <div key={partner.name} className="col-12 col-md-6 col-lg-3">
                <article className="partners-showcase-card">
                  <div className="partners-showcase-card__media">
                    <Image
                      src={partner.coverSrc || "/assets/distributor-img/other-fmcg-product.jpg"}
                      alt={`${partner.name} category`}
                      fill
                      sizes="(max-width: 991px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="partners-showcase-card__badge">
                      {partner.category || "FMCG"}
                    </div>
                    <div className="partners-showcase-card__logoBadge">
                      <Image
                        src={partner.logoSrc}
                        width={partner.width}
                        height={partner.height}
                        alt={partner.name}
                        style={{ height: "auto", maxHeight: 54, width: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="partners-showcase-card__body">
                    <h3 className="partners-showcase-card__title">
                      {partner.name}
                    </h3>
                    <p className="partners-showcase-card__text">
                      {partner.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      {/* <section className="service-grid-bg py-5 partners-channels">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-4 d-flex">
              <div className="partners-channels__panel w-100">
                <h2 className="partners-channels__title font-Montserrat text-white">
                  Channels We <span>Serve</span>
                </h2>
                <p className="partners-channels__subtitle text-white">
                  Coverage across trade, institutions, and online routes - built
                  for consistent availability and faster growth.
                </p>

                <div className="partners-channels__kpis">
                  {[
                    "Beat planning and retailer coverage",
                    "Execution for visibility and offtake",
                    "Reporting loops and growth support",
                  ].map((kpi) => (
                    <div key={kpi} className="partners-channels__kpi text-white">
                      <span className="partners-channels__kpiDot" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>

                <div className="partners-channels__panelCta">
                  <a href="/contact-us/" className="procounsel-btn">
                    <i>Discuss Coverage</i>
                    <span>Discuss Coverage</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="row g-4 align-items-stretch">
                {channels.map((item) => (
                  <div
                    key={item.title}
                    className="col-12 col-sm-6 col-lg-6 d-flex"
                  >
                    <div className="partners-channel-card w-100">
                      <div className="partners-channel-card__icon">
                        <Image
                          width={34}
                          height={34}
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="partners-channel-card__title text-white">
                        {item.title}
                      </h3>
                      <p className="partners-channel-card__text text-white">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="">
        <BrandSlider />
      </div> */}

      {/* Enablement */}
      <section className="py-5 partners-enablement">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat">
              How We Enable <span>Partner</span> Growth
            </h2>
            <p className="mt-3" style={{ opacity: 0.9 }}>
              A simple, execution-first approach that keeps brands moving from
              onboarding to in-market growth.
            </p>
          </div>

          <div className="row g-4 mt-4 align-items-stretch">
            {enablement.map((item, index) => (
              <div key={item.title} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="partners-step-card card-box w-100">
                  <div className="partners-step-card__top">
                    <div className="partners-step-card__step">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="partners-step-card__icon">
                      <Image
                        width={40}
                        height={40}
                        src={item.icon}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <h3 className="partners-step-card__title">{item.title}</h3>
                  <p className="partners-step-card__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partners-cta py-5">
        <div className="container">
          <div className="partners-cta__card">
            <div className="partners-cta__content">
              <h2 className="partners-cta__title text-white">
                Looking for a distribution partner?
              </h2>
              <p className="partners-cta__text">
                Tell us about your brand and the markets you want to expand
                into. We&apos;ll share a practical plan for coverage, execution,
                and growth.
              </p>
              <div className="partners-cta__actions">
                <a href="/contact-us/" className="procounsel-btn">
                  <i>Become a Partner</i>
                  <span>Become a Partner</span>
                </a>
              </div>
            </div>

            <div className="partners-cta__media">
              <Image
                src="/assets/distributor-img/how-we-work.jpg"
                alt="Distribution partnership"
                fill
                sizes="(max-width: 991px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <NewsLetter /> */}
      <ScriptsLoader />
    </>
  );
}
