"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import { VisionMission } from "@/sections/about/VisionMission";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Pritam Shinde",
      designation: "Founder & CEO",
      img: "/assets/photos/about/me4suit.jpg",
      // img: "/assets/images/team/team-1-1.jpg",
      delay: "000ms",
    },
    {
      id: 2,
      name: "Team Member 2",
      designation: "CTO",
      img: "/assets/images/team/team-1-2.png",
      delay: "100ms",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
    {
      href: "https://pinterest.com",
      icon: "icon-pinterest",
      label: "Pinterest",
    },
    { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
    { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
  ];
  return (
    <>
      <section className="" style={{ background: "#0E222A" }}>
        <div className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/distributor-img/about-banner2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top  center",
            backgroundRepeat: "no-repeat",
            height: "800px",
          }}
        // style={{ backgroundImage: "url('/assets/photos/about/about_hero.jpg')", }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2 text-capitalize">
              ABOUT <span className="fw-bold read-more-btn"> NONSTOP Distributors
              </span>
            </p>
            <h1 className="">
              Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit amet.
            </h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                Powering FMCG distribution with excellence, integrity, and an unwavering commitment <br className="d-none d-lg-inline" /> to our partners success.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start mt-3">
              <a href="/contact-us#contact-service" className="procounsel-btn">
                <i>Contact Us</i>
                <span>Contact Us</span>
              </a>
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
          // data-imgposition="50% -100%"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    Who We <span> Are</span>
                  </h3>
                </div>

                <p className="why-choose-four__content__text text-white fs-5 fw-bold">
                  NONSTOP Distributors is of leading FMCG distribution partners, connecting premium consumer brands to every major sales channel.
                </p>
                <p className="why-choose-four__content__text text-white">
                  With decades of experience and an extensive distribution network, we specialize in managing and scaling brands across food and beverages, body care, luxury chocolates, laundry, stationery, and many other FMCG categories.
                </p>
                <p className="why-choose-four__content__text text-white">
                  Our team of dedicated professionals works tirelessly to ensure that every brand we represent achieves maximum market penetration, strong product visibility, and sustainable growth across every retail channel.
                </p>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="100ms">
              <div className=" why-choose-four__right">
                <div className="why-choose-four__img">
                  {/* <img
                    src="/assets/photos/about/our_story.jpg"
                    // src="/assets/images/backgrounds/why_choose_us_3rd_section.jpg"
                    alt="why-choose-us"
                  /> */} 
                  <Image src="/assets/photos/about/me4suit.jpg" width={340} height={570} alt="why-choose-us" />
                </div>
                <div className="why-choose-four__right__wrapper">
                  <div className="why-choose-four__box count-box">
                    <h3 className="why-choose-four__box__count">
                      <span
                        className="count-text"
                        data-stop="20"
                        data-speed="1500"
                      >
                        20
                      </span>
                    </h3>
                    <p className="why-choose-four__box__text">
                      Years in <br /> Business
                    </p>
                  </div>
                  <div className="why-choose-four__box count-box">
                    <h3 className="why-choose-four__box__count">
                      <span
                        className="count-text"
                        data-stop="5000"
                        data-speed="1500"
                        data-suffix="+"
                      >
                        5,000+
                      </span>
                    </h3>
                    <p className="why-choose-four__box__text">
                      Lorem, ipsum. <br /> Lorem, ipsum.
                      {/* Experts Sourced <br /> Nation Wide */}
                    </p>
                  </div>
                  <div className="why-choose-four__box count-box">
                    <h3 className="why-choose-four__box__count">
                      <span
                        className="count-text"
                        data-stop="1000"
                        data-speed="1500"
                        data-suffix="+"
                      >
                        1,000+
                      </span>
                    </h3>
                    <p className="why-choose-four__box__text">
                      Lorem, ipsum. <br /> Lorem, ipsum.
                      {/* Law Firms <br /> Served */}
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

      {/* Stand For /Core values*/}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          {/* <h3 className="service-details__sub-title text-white">Why Choose Our ProCounsel?</h3> */}
          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              Our Core <span> Values</span>
            </h3>

            <h4 className="tailored-subtitle font-Merriweather text-white mt-2">The principle that guide everything we do</h4>
          </div>
          <div className="row gutter-y-30">
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="00ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  <Image width={31} height={31} src="/assets/distributor-img/excellence.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    <Image width={31} height={31} src="/assets/distributor-img/excellence.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Excellence
                  </h4>

                  <p className="service-details__item__text text-white">
                    We strive for excellence in every aspect of our operations, from logistics to customer service.
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
                  <Image width={31} height={31} src="/assets/distributor-img/market-penetration.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    <Image width={31} height={31} src="/assets/distributor-img/market-penetration.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Integrity
                  </h4>

                  <p className="service-details__item__text text-white">
                    We conduct business with the highest ethical standards, building trust with every interaction.
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
                  <Image width={31} height={31} src="/assets/distributor-img/partnership.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    <Image width={31} height={31} src="/assets/distributor-img/partnership.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Partnership
                  </h4>

                  <p className="service-details__item__text text-white">
                    We believe in building long-term partnerships, treating every brand's success as our own.
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
                  <Image width={31} height={31} src="/assets/distributor-img/growth-focus.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    <Image width={31} height={31} src="/assets/distributor-img/growth-focus.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Sustainability
                  </h4>

                  <p className="service-details__item__text text-white">
                    We are committed to sustainable practices that benefit our community and environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="team-one">
        <div className="container">
          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              Meet the Team <br /> <span>Behind Nonstop Distributors</span>
            </h3>
          </div>
          <div className="row gutter-y-30">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div
                  className="team-card wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay={member.delay}
                  style={{
                    height: "100%", // ensure full height usage
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="team-card__image bw-img-anim-left"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)"
                    }}
                  >
                    <div className="team-card__content">
                      <h3 className="team-card__title">
                        <div>{member.name}</div>
                        {/* <a href="#">{member.name}</a> */}
                      </h3>
                      <p className="team-card__designation">
                        {member.designation}
                      </p>
                    </div>

                    {/* <div className="team-card__hover">
                      <span className="team-card__hover__btn">
                        <i className="icon-plus"></i>
                      </span>
                      <div className="team-card__hover__social">
                        {socialLinks.map((link, index) => (
                          <a href={link.href} key={index}>
                            <i className={link.icon}></i>
                            <span className="sr-only">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div> */}

                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "425px", // fixed height for all images
                        objectFit: "cover", // crops to fit nicely
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                <i>VIEW All</i>
                <span className="">VIEW All</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-fluid d-flex align-items-center justify-content-center text-center newsletter-section">
        <div className="circle-newsletter" />

        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h2 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
                Join Our Growing Network
              </h2>

              <p className="text-white mb-4" style={{ fontSize: "clamp(14px, 2vw, 18px)", opacity: 0.9, }}>
                Whether you're a brand looking for distribution or a professional
                seeking opportunities, we'd love to hear from you.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#" onClick={(e) => e.preventDefault()}
                  className="custom-btn fw-semibold"
                >
                  PARTNER WITH US
                </a>

                <a href="#" onClick={(e) => e.preventDefault()}
                  className="custom-btn fw-semibold"
                >
                  CAREER OPPORTUNITIES
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

export default About;
