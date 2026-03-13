import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import { VisionMission } from "@/sections/about/VisionMission";
import Image from "next/image";

export const generateMetadata = () => {
  return handlerMetaDetails("about-us");
};

const About = () => {
  return (
    <>
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/distributor-img/about-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
            height: "800px",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2 text-capitalize">
              ABOUT{" "}
              <span className="fw-bold read-more-btn">
                NONSTOP Distributors
              </span>
            </p>
            <h1 className="">
              Built on trust, driven by service, <br /> and focused on moving
              your <br /> business forward.
            </h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                Powering FMCG distribution with excellence, integrity, and an
                unwavering commitment <br className="d-none d-lg-inline" /> to
                our partners success.
              </p>
            </div>
            {/* <div className="d-flex flex-column justify-content-between align-items-start mt-3">
              <a href="/contact-us#contact-service" className="procounsel-btn">
                <i>Contact Us</i>
                <span>Contact Us</span>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Story who we are */}
      <section className="why-choose-four">
        <div
          className="why-choose-four__bg jarallax"
          data-jarallax
          data-speed="0.3"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/bg_why_choose_us.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat">
                    Who We <span> Are</span>
                  </h2>
                </div>

                <h3 className="why-choose-four__content__text text-white custom-heading-h3 fs-5 fw-bold">
                  NONSTOP Distributors is of leading FMCG distribution partners,
                  connecting premium consumer brands to every major sales
                  channel.
                </h3>
                <p className="why-choose-four__content__text text-white">
                  With decades of experience and an extensive distribution
                  network, we specialize in managing and scaling brands across
                  food and beverages, body care, luxury chocolates, laundry,
                  stationery, and many other FMCG categories.
                </p>
                <p className="why-choose-four__content__text text-white">
                  Our team of dedicated professionals works tirelessly to ensure
                  that every brand we represent achieves maximum market
                  penetration, strong product visibility, and sustainable growth
                  across every retail channel.
                </p>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="100ms">
              <div className=" why-choose-four__right">
                <div className="why-choose-four__img">
                  <Image
                    src="/assets/distributor-img/who-we-are.jpg"
                    width={340}
                    height={570}
                    alt="why-choose-us"
                  />
                </div>
                <div className="why-choose-four__right__wrapper">
                  <div className="why-choose-four__box count-box">
                    <span
                      style={{ lineHeight: "49px" }}
                      className="why-choose-four__box__count count-text custom-heading-all"
                      data-stop="20"
                      data-speed="1500"
                      data-suffix="+"
                    >
                      20
                    </span>
                    <p className="why-choose-four__box__text">
                      Years <br /> of Experience
                    </p>
                  </div>
                  <div className="why-choose-four__box count-box">
                    <span
                      style={{ lineHeight: "49px" }}
                      className="why-choose-four__box__count count-text custom-heading-all"
                      data-stop="100"
                      data-speed="1500"
                      data-suffix="+"
                    >
                      100+
                    </span>
                    <p className="why-choose-four__box__text">Brands</p>
                  </div>
                  <div className="why-choose-four__box count-box">
                    <span
                      style={{ lineHeight: "49px" }}
                      className="why-choose-four__box__count count-text custom-heading-all"
                      data-stop="2000"
                      data-speed="1500"
                      data-suffix="+"
                    >
                      2000+
                    </span>
                    <p className="why-choose-four__box__text">
                      Retail <br /> Points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <VisionMission />

      {/* Core values / Stand For */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          <div className="sec-title text-left">
            <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat text-white">
              Our Core <span> Values</span>
            </h2>
            <h3 className="why-choose-four__content__text tailored-subtitle font-Merriweather text-white mt-2 custom-heading-h3 fs-5 fw-bold mb-0">
              The principle that guide everything we do
            </h3>
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
                    src="/assets/distributor-img/excellence.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/excellence.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Excellence
                  </h4>

                  <p className="service-details__item__text text-white">
                    We strive for excellence in every aspect of our operations,
                    from logistics to customer service.
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
                    src="/assets/distributor-img/market-penetration.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/market-penetration.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Integrity
                  </h4>

                  <p className="service-details__item__text text-white">
                    We conduct business with the highest ethical standards,
                    building trust with every interaction.
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
                    src="/assets/distributor-img/partnership.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/partnership.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Partnership
                  </h4>

                  <p className="service-details__item__text text-white">
                    We believe in building long-term partnerships, treating
                    every brand's success as our own.
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
                    src="/assets/distributor-img/growth-focus.png"
                    alt="response"
                  />
                  <span className="service-details__item__icon__zoom">
                    <Image
                      width={31}
                      height={31}
                      src="/assets/distributor-img/growth-focus.png"
                      alt="response"
                    />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Sustainability
                  </h4>

                  <p className="service-details__item__text text-white">
                    We are committed to sustainable practices that benefit our
                    community and environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default About;
