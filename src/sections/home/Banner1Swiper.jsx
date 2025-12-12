"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export const sliderData = [
  {
    bg: "/assets/photos/home/hero_1.jpg",
    // bg: "/assets/images/backgrounds/banner_slide1-new.jpg",
    title: (
      <>
        Trusted. Vetted. <br />
        Trial-Ready.
      </>
    ),
    text: (
      <>
        <p style={{ marginBottom: "20px" }} className="custom-max-width2">
          Homestead connects attorneys with leading expert witnesses across
          every discipline. Rigorously vetted, court-tested, and ready when you
          are.
        </p>
      </>
    ),
  },
  {
    bg: "/assets/photos/home/hero_2.jpg",
    // bg: "/assets/images/backgrounds/slider-1-2-new.jpg",
    title: (
      <>
        Speed When It <br /> Matters Most.
      </>
    ),
    text: (
      <>
        <p style={{ marginBottom: "20px" }} className="custom-max-width2">
          Your case can’t wait — neither should your search for the right
          expert. We deliver tailored matches quickly, without sacrificing rigor
          or credibility.
        </p>
      </>
    ),
  },
  {
    bg: "/assets/photos/home/hero_3.jpg",
    // bg: "/assets/images/backgrounds/slider-3-new.jpg",
    title: (
      <>
        Experts in Every Specialty. <br /> Nationwide Reach.
      </>
    ),
    text: (
      <>
        <p style={{ marginBottom: "20px" }} className="custom-max-width2">
          Our network of experts spans every field and jurisdiction. From
          medicine and engineering to finance and construction. Wherever your
          case takes you, we connect you with the right expert.
        </p>
      </>
    ),
  },
];

const Banner1Swiper = () => {
  return (
    <section className="hero-slider" style={{ background: "#0E222A" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        speed={3000} // 1.5s smooth transition speed
        pagination={{ clickable: true }}
        className="heroSwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide "
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* <div className="overlay"></div> */}
              <div className="main-slider-one__overlay-one"></div>
              <div className="content container home-content">
                <h1 className="">{slide.title}</h1>
                <div
                // style={{ maxWidth: "520px" }}
                >
                  {slide.text}
                </div>

                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                  <div>
                    <a
                      href="#contact-service"
                      className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                    >
                      <i>REQUEST AN EXPERT</i>
                      <span className="">REQUEST AN EXPERT</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="/onboard/"
                      className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                    >
                      <i>BECOME AN EXPERT</i>
                      <span className="">BECOME AN EXPERT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container">
        <div className="feature-one">
          <div
            className="feature-one home-banner-service-info"
            style={{
              // maxWidth: "1190px",
              width: "100%",
              zIndex: 10,
              backgroundColor: " #0E222A",
              padding: "40px 40px 0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.9)",
              position: "absolute",
              margin: "0 auto",
              left: "50%",
              transform: "translateX(-50%)",
              top: "100%",
            }}
          >
            <div className="feature-one__inner">
              <div className="row gutter-y-0">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item ">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-calendar"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="#contact-service" className="text-white">
                        Find Your <br /> Expert Witness
                      </Link>
                    </h3>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item feature-one__item--border-left justify-content-center">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-payment"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="#contact-service" className="text-white">
                        Get a Free <br /> Case Assessment
                      </Link>
                    </h3>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item feature-one__item--border-left justify-content-end">
                    <div className="feature-one__item__icon text-white">
                      <i className="icon-advice"></i>
                    </div>
                    <h3 className="feature-one__item__title">
                      <Link href="/onboard/" className="text-white">
                        Join Our <br /> Expert Network
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1Swiper;
