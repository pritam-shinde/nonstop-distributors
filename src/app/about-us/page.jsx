"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import { ExpertWitnessAbout } from "@/sections/about/ExpertWitnessAbout";
import Testimonials3 from "@/sections/about/Testimonials3";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Seth Lefberg",
      designation: "Founder & CEO",
      img: "/assets/photos/about/me4suit.jpg",
      // img: "/assets/images/team/team-1-1.jpg",
      delay: "000ms",
    },
    {
      id: 2,
      name: "Heather Durbin",
      designation: "Senior Case Manager",
      img: "/assets/images/team/team-1-2.png",
      delay: "100ms",
    },
    {
      id: 3,
      name: "Melissa Rosen",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-3.jpg",
      delay: "200ms",
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
          style={{ backgroundImage: "url('/assets/photos/about/about_hero.jpg')", }}
        // style={{ backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')", }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2">
              ABOUT <span style={{ color: "#fb3640" }} className="fw-bold"> HOMESTEAD EXPERTS
              </span>
            </p>
            <h1 className="">
              The Right Expert Witness <br /> Exactly When You Need Them.
            </h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                When your case depends on expert testimony, time and credibility
                matter most. Homestead
                <br className="d-none d-lg-inline" /> connects attorneys with
                qualified, trial-ready experts across every specialty, quickly
                and <br className="d-none d-lg-inline" /> without upfront cost.
              </p>
              <p style={{ marginTop: "10px", marginBottom: "20px" }}>
                Our experts strengthen your arguments, enhance your credibility,
                and help you achieve <br className="d-none d-lg-inline" />{" "}
                better results in court.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start">
              <a href="/contact-us#contact-service" className="procounsel-btn">
                <i>SPEAK TO AN EXPERT</i>
                <span>SPEAK TO AN EXPERT</span>
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
                    Our <span> Story</span>
                  </h3>
                </div>

                <p className="why-choose-four__content__text text-white fs-5 fw-bold">
                  Founded in 2015, Homestead was built to give attorneys a
                  smarter, more dependable way to find expert witnesses.
                </p>
                <p className="why-choose-four__content__text text-white">
                  Today, we support law firms nationwide with professionals
                  across every discipline from medicine and engineering to
                  finance, construction, and technology.
                </p>
                <p className="why-choose-four__content__text text-white">
                  <strong> Our focus is simple: </strong> connecting your team
                  with the right expert, at the right time, with the confidence
                  that every referral meets the highest standard of credibility.
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
                        data-stop="10"
                        data-speed="1500"
                      >
                        10
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
                      Experts Sourced <br /> Nation Wide
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
                      Law Firms <br /> Served
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="why-choose-three">
        <div
          className="why-choose-three__bg"
          style={{ backgroundImage: "url('assets/images/shapes/why-choose-three-bg.png')", }}>
        </div>
        {/* <div className="why-choose-three__right wow slideInRight" style={{ backgroundImage: "url('assets/images/backgrounds/why-choose-three-bg.jpg')" }}></div> */}
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-8 col-lg-9"> */}
            <div className="col-xl-6">
              <div className="why-choose-three__content wow fadeInUp" data-wow-delay="300ms">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    How We <span> Work</span>
                  </h3>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        No-Risk, No-Commitment Model
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        You don’t pay until you’ve spoken with your expert and
                        are ready to retain. ensuring every engagement starts
                        with trust and certainty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Fast, Reliable Expert Matching
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        We identify the best-fit expert for your matter and
                        confirm availability quickly, so your case continues
                        moving without delay.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        End-to-End Case Management
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        Your dedicated case manager handles everything from
                        introductions and scheduling to billing and
                        communication so your team can focus on strategy, not
                        logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-three__box">
                  <div className="why-choose-three__box__left">
                    <div className="why-choose-three__box__left-item">
                      <p className="why-choose-three__box__left-text">
                        Merit Review Services
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-three__box__right">
                    <div className="why-choose-three__box__right-item">
                      <p className="why-choose-three__box__right-text">
                        For medical or malpractice matters, our in-house legal nurse consultants can review records to assess case viability before you commit time or expense.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-three__right wow slideInRight"
                style={{ backgroundImage: "url('/assets/photos/about/how_we_work.jpg')" }}
              // style={{ backgroundImage: "url('assets/images/backgrounds/why-choose-three-bg.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Witnesses  */}
      <ExpertWitnessAbout />

      {/* Why Attorneys */}
      <section className="why-choose-four">
        <div
          className="why-choose-four__bg jarallax"
          data-jarallax
          data-speed="0.3"
          style={{ backgroundImage: "url(assets/images/backgrounds/bg_why_choose_us.jpg)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    Why Attorneys <br />
                    <span>Choose Homestead</span>
                  </h3>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <i className="icon-innovation"></i> */}
                        <Image width={22} height={22} src="/assets/images/shapes/icon-01.png" alt="response" />
                        {/* <i className="icon-podium"></i> */}
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Independent and <br /> Attorney-Focused.
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
                        Transparency <br /> You Can Trust.
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Clear pricing, open communication, and no hidden fees.
                    </p>
                  </div>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <i className="icon-podium"></i> */}
                        <Image width={22} height={22} src="/assets/images/shapes/icon-03.png" alt="response" />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        National Network. <br />
                        Local Attention.
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Thousands of vetted experts across every state and
                      specialty.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        {/* <i className="icon-collaboration"></i> */}
                        <Image width={22} height={22} src="/assets/images/shapes/icon-04.png" alt="response" />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Responsive <br /> and Reliable
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Our process keeps cases moving and clients supported when
                      timing matters most.
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
                    // src="/assets/images/backgrounds/image_10.jpg"
                    alt="why-choose-us"
                  />
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
              Meet the Team <br /> <span>Behind Homestead</span>
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
              <a href="/our-team/" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                <i>VIEW All</i>
                <span className="">VIEW All</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stand For */}
      <section className="team-one" style={{ background: "#0E222A" }}>
        <div className="container">
          {/* <h3 className="service-details__sub-title text-white">Why Choose Our ProCounsel?</h3> */}

          <div className="sec-title text-left">
            <h3 className="sec-title__title bw-split-in-up text-white">
              What We <span>Stand For</span>
            </h3>
          </div>
          <div className="row gutter-y-30">
            <div
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="00ms"
            >
              <div className="service-details__item" style={{ height: "100%" }}>
                <div className="service-details__item__icon">
                  <Image width={31} height={31} src="/assets/images/shapes/stand_for_1.png" alt="response" />
                  {/* <i className="icon-idea-1"></i> */}
                  <span className="service-details__item__icon__zoom">
                    <Image width={31} height={31} src="/assets/images/shapes/stand_for_1.png" alt="response" />
                    {/* <i className="icon-idea-1"></i> */}
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Integrity First
                  </h4>

                  <p className="service-details__item__text text-white">
                    We believe credibility is earned, not claimed. We only place
                    experts we believe in and never force a fit.
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
                  <Image width={31} height={31} src="/assets/images/shapes/stand_for_2.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    {/* <i className="icon-idea-1"></i> */}
                    <Image width={31} height={31} src="/assets/images/shapes/stand_for_2.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Partnership Without Barriers
                  </h4>

                  <p className="service-details__item__text text-white">
                    No subscriptions. No long-term contracts. Use us once or
                    make us part of your intake process, our commitment stays
                    the same
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
                  <Image width={31} height={31} src="/assets/images/shapes/stand_for_3.png" alt="response" />
                  {/* <i className="icon-address-book-1"></i> */}
                  <span className="service-details__item__icon__zoom">
                    {/* <i className="icon-address-book-1"></i> */}
                    <Image width={31} height={31} src="/assets/images/shapes/stand_for_3.png" alt="response" />

                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    People Before Process{" "}
                  </h4>

                  <p className="service-details__item__text text-white">
                    Behind every referral is a person. We honor the human side
                    of litigation by treating every case with the care, urgency,
                    and respect it deserves.
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
                  <Image width={31} height={31} src="/assets/images/shapes/stand_for_4.png" alt="response" />
                  <span className="service-details__item__icon__zoom">
                    {/* <i className="icon-address-book-1"></i> */}
                    <Image width={31} height={31} src="/assets/images/shapes/stand_for_4.png" alt="response" />
                  </span>
                </div>
                <div className="service-details__item__content">
                  <h4 className="service-details__item__title text-white">
                    Excellence in Every Detail{" "}
                  </h4>

                  <p className="service-details__item__text text-white">
                    From recruitment to report, we manage each case with
                    precision so nothing falls through the cracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials3 />

      {/* Expert Partner, */}
      <section className="about-one" id="about" style={{ position: "relative", backgroundColor: "#0E222A", }}>
        <Image src="/assets/images/backgrounds/section-2-1-b-new.png" fill
          style={{ objectFit: "cover", objectPosition: "bottom", overflow: "hidden", }} alt="about-background" />
        <div className="container position-relative z-3">
          <div className="">
            <div className="wow fadeInRight" data-wow-delay="300ms">
              <div className="about-one__inner1">
                <div className="about-one__content1">
                  <div className="sec-title text-left ">
                    <h3 className="sec-title__title bw-split-in-up text-white">
                      Your Expert Partner, <br /> <span> Every Step of the Way</span>
                    </h3>
                  </div>

                  <p className="about-one__content__text text-white mb-3">
                    For more than a decade, Homestead has been helping attorneys <br className="d-none d-lg-inline" /> strengthen their cases
                    with dependable expert witness support.
                  </p>

                  <p className="about-one__content__text text-white">
                    We don’t just find experts, we stand behind them.
                  </p>

                  <div className="about-one__content__box">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      {/* <strong className="text-white mb-2">Find the right expert for your next case?</strong> */}
                      <a href="/contact-us/#contact-service" className="procounsel-btn text-uppercase">
                        <i>Request an expert</i>
                        <span>Request an expert</span>
                      </a>
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

export default About;
