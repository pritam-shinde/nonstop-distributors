"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import Banner5CaseStudy from "@/sections/home/Banner5CaseStudy";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
 
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
            style={{ backgroundImage: "url(assets/images/backgrounds/bg_why_choose_us.jpg)" }}></div>
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
 
        {/* case study */}
        <Banner5CaseStudy />

      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form role="search" method="get" className="search-popup__form" action="#">
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="procounsel-btn">
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
