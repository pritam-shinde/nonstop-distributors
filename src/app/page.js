"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import Banner5CaseStudy from "@/sections/home/Banner5CaseStudy";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
 
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

export default function Home() {
  useEffect(() => {
    const scriptUrls = [
      "/assets/vendors/jquery/jquery-3.7.1.min.js",
      "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
    ];

    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // preserve order
        script.onload = resolve;
        document.body.appendChild(script);
      });

    (async () => {
      // Load scripts sequentially
      for (const src of scriptUrls) {
        await loadScript(src);
      }

      // Now jQuery and Owl Carousel are ready
      const $ = window.jQuery;
      const carousel = $(".procounsel-owl__carousel");
      if (carousel.length && typeof $.fn.owlCarousel === "function") {
        carousel.each(function () {
          const elm = $(this);
          const options = elm.data("owl-options");
          elm.owlCarousel(typeof options === "object" ? options : JSON.parse(options));
        });
      }
    })();
  }, []);

  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Banner1Swiper />

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
            <div className="margin-about">
              <div className="row">
                <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
                  <div className="why-choose-four__content">
                    <div className="sec-title text-left">
                      <h3 className="sec-title__title bw-split-in-up">
                        Why Choose <br />
                        <span> NONSTOP DISTRIBUTORS</span>
                      </h3>
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            {/* <i className="icon-innovation"></i> */}
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-01.png"
                              alt="response"
                            />
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
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-03.png"
                              alt="response"
                            />
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
                            <Image
                              width={22}
                              height={22}
                              src="/assets/images/shapes/icon-04.png"
                              alt="response"
                            />
                          </div>
                          <h3 className="why-choose-four__item__title">
                            Responsive <br /> and Reliable
                          </h3>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Our process keeps cases moving and clients supported
                          when timing matters most.
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
          </div>
        </section>

        {/*Tailored Section  */}
        <section className="tailored-section" id="tailored-background">
          <div className="container">
            <div
              style={{
                textAlign: "start",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div style={{ maxWidth: "780px", width: "100%" }}>
                <h3 className="sec-title__title text-white bw-split-in-up">
                  Tailored Search. Every Time.
                </h3>
                <h4 className="tailored-subtitle font-Merriweather text-white">
                  Custom Recruitment for Complex Matters
                </h4>
              </div>
            </div>
          </div>

          <div
            className="tailored-redline1 test"
            style={{ position: "relative", objectFit: "cover" }}
          >
            <Image
              src="/assets/images/backgrounds/red-line-09.png"
              alt="redline"
              width={2000}
              height={14}
              style={{
                transform: "rotateY(180deg)",
                width: "100%",
                position: "relative",
              }}
            />
          </div>

          <div className="container">
            <div
              style={{
                textAlign: "start",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  maxWidth: "780px",
                  width: "100%",
                }}
              >
                <p
                  className="tailored-para about-one__content__text"
                  style={{
                    position: "relative",
                    color: "#fff",
                    maxWidth: "750px",
                  }}
                >
                  We don&apos;t pull from static databases. When your case calls
                  for niche expertise, our team actively recruits and verifies
                  new experts on your behalf, managing outreach, vetting, and
                  scheduling so you can stay focused on strategy.
                </p>
                <a href="#contact-service" className="tailored-btn">
                  <i>REQUEST AN EXPERT</i>
                  <span>REQUEST AN EXPERT</span>
                </a>
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

        {/* case study */}
        <Banner5CaseStudy />
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="procounsel-btn"
            >
              <i>
                <i className="icon-search"></i>
              </i>
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>

      <ScriptsLoader />
    </>
  );
}
