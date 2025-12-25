"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import CategoriesServe from "@/sections/home/CategoriesServe";
import Image from "next/image";
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
          elm.owlCarousel(
            typeof options === "object" ? options : JSON.parse(options)
          );
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

        {/* Why Choose section */}
        <section className="why-choose-four">
          <div
            className="why-choose-four__bg jarallax"
            data-jarallax
            data-speed="0.3"
            style={{
              backgroundImage:
                "url(/assets/distributor-img/why-choose-nonstop-distributor.jpg)",
            }}
          ></div>
          <div className="container">
            <div>
              <div className="row">
                <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
                  <div className="why-choose-four__content">
                    <div className="sec-title text-left">
                      <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                        Why Choose <br />
                        <span> NONSTOP DISTRIBUTORS</span>
                      </h2>

                      <h3 className="tailored-subtitle font-Merriweather text-white mt-2 fs-4">
                        We bring unparalleled expertise and a commitment to
                        excellence that drives brand success.
                      </h3>
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={28}
                              height={28}
                              src="/assets/distributor-img/brand-partnership-new.png"
                              alt="response"
                            />
                          </div>
                          <h4 className="why-choose-four__item__title">
                            Multi-Category <br /> Expertise
                          </h4>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Specialized handling across food & beverages, body
                          care, luxury chocolates, laundry, and stationery
                          categories.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={28}
                              height={28}
                              src="/assets/distributor-img/multi-category-expertise-new.png"
                              alt="response"
                            />
                          </div>
                          <h4 className="why-choose-four__item__title">
                            Transparency <br /> You Can Trust.
                          </h4>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Deep penetration in modern trade, general trade,
                          e-commerce, institutional sales, and HoReCa segments.
                        </p>
                      </div>
                    </div>

                    <div className="why-choose-four__list">
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={28}
                              height={28}
                              src="/assets/distributor-img/operational-excellence-new.png"
                              alt="response"
                            />
                          </div>
                          <h4 className="why-choose-four__item__title">
                            Brand <br /> Partnership
                          </h4>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          We don't just distribute, We become strategic partners
                          invested in your brand's long-term success.
                        </p>
                      </div>
                      <div className="why-choose-four__item">
                        <div className="why-choose-four__item__top">
                          <div className="why-choose-four__item__icon">
                            <Image
                              width={28}
                              height={28}
                              src="/assets/distributor-img/retail-channel-new.png"
                              alt="response"
                            />
                          </div>
                          <h4 className="why-choose-four__item__title">
                            Operational <br /> Excellence
                          </h4>
                        </div>
                        <p className="why-choose-four__item__text text-white">
                          Efficient supply chain management ensuring timely
                          deliveries, optimal inventory, and minimal wastage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay="100ms">
                  <div
                    className="why-choose-four__right"
                    style={{ height: "100%", marginTop: 0 }}
                  >
                    <div
                      className="why-choose-four__img mx-auto"
                      style={{ width: "100%", height: "80%" }}
                    >
                      <img
                        src="\assets\distributor-img\why-choose-nonstop-distributor.jpg"
                        alt="why-choose-us"
                        style={{
                          objectPosition: "right center",
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
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
            <div className="d-flex justify-content-end text-start">
              <div className="custom-container">
                <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                  Lorem ipsum dolor sit.
                </h2>
                <h3 className="tailored-subtitle font-Merriweather text-white fs-4">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
          </div>

          <div
            className="tailored-redline1"
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
            <div className="d-flex justify-content-end text-start">
              <div className="custom-container">
                <p
                  className="tailored-para about-one__content__text"
                  style={{
                    position: "relative",
                    color: "#fff",
                    maxWidth: "750px",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  totam fugit laborum odio. Excepturi similique corporis soluta
                  recusandae fuga eveniet vero hic voluptas nostrum. Totam eos
                  ipsam dolore quia in voluptates earum sint iste.
                </p>
                <a href="#contact-service" className="tailored-btn">
                  <i>REQUEST AN EXPERT</i>
                  <span>REQUEST AN EXPERT</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories We Serve */}
        <CategoriesServe />

        {/* Brands */}
        <div
          style={{
            position: "relative",
            // background: "linear-gradient(to right, #247ba0, #0E222A )",
          }}
          className="why-choose-four"
        >
          <div className="tailored-redline-new" />
          <div className="d-flex gap-5 justify-content-center">
            {[
              {
                label: "Patanjali",
                imgSrc: "/assets/distributor-img/patanjali-brand.png",
                width: 214,
                height: 60,
              },
              {
                label: "Britannia",
                imgSrc:
                  "/assets/distributor-img/britannia-industries-brand.png",
                width: 168,
                height: 60,
              },
            ].map((brand, index) => (
              <div key={index}>
                <Image
                  src={brand.imgSrc}
                  width={brand.width}
                  height={brand.height}
                  alt={brand.label}
                />
              </div>
            ))}
          </div>
          <div
            className="tailored-redline-new"
            style={{ rotate: "0deg", top: "unset", bottom: 0 }}
          />
        </div>
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
