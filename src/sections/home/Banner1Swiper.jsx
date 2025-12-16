"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export const sliderData = [
  {
    bg: "/assets/distributor-img/home-page-banner.jpg",
    title: (
      <>
        Powering Brands <br /> Across the City.
        {/* Trusted. Vetted. <br /> Trial-Ready. */}
      </>
    ),
    text: (
      <>
        <p style={{ marginBottom: "20px" }} className="custom-max-width2">
          Connecting premium consumer brands to every major sales channel with
          decades of experience, operational excellence, and an extensive
          distribution network.
        </p>
      </>
    ),
  },
  // {
  //   bg: "/assets/photos/home/hero_2.jpg",
  //   title: (
  //     <>
  //       Speed When It <br /> Matters Most.
  //     </>
  //   ),
  //   text: (
  //     <>
  //       <p style={{ marginBottom: "20px" }} className="custom-max-width2">
  //         Your case can’t wait — neither should your search for the right
  //         expert. We deliver tailored matches quickly, without sacrificing rigor
  //         or credibility.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   bg: "/assets/photos/home/hero_3.jpg",
  //   title: (
  //     <>
  //       Experts in Every Specialty. <br /> Nationwide Reach.
  //     </>
  //   ),
  //   text: (
  //     <>
  //       <p style={{ marginBottom: "20px" }} className="custom-max-width2">
  //         Our network of experts spans every field and jurisdiction. From
  //         medicine and engineering to finance and construction. Wherever your
  //         case takes you, we connect you with the right expert.
  //       </p>
  //     </>
  //   ),
  // },
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
        speed={3000} // 3s smooth transition speed
        pagination={{ clickable: true }}
        className="heroSwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <div className="main-slider-one__overlay-one"></div>
              <div className="content container home-content">
                <p className="border rounded-5 d-inline px-4 py-2">
                  Leading FMCG Distributor
                </p>

                <h1 className="mt-3">{slide.title}</h1>
                <div>{slide.text}</div>

                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                  <div>
                    <a href="#contact-service" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                      <i>GET STARTED</i>
                      <span className="">GET STARTED</span>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start">
                      <i>LEARN MORE</i>
                      <span className="">LEARN MORE</span>
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
          <div className="feature-one home-banner-service-info featured-dimension">
            <div className="feature-one__inner">
              <div className="row gutter-y-0">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                  <div className="feature-one__item ">
                    <div className="feature-one__item__icon text-white">
                      <Image
                        width={54}
                        height={54}
                        src="/assets/distributor-img/year-of-exp.png"
                        className="object-cover"
                        alt="Year of Experience"
                      />
                    </div>
                    <h2 className="feature-one__item__title font-Montserrat">
                      <Link href="#contact-service" className="text-white">
                        20+ Years <br /> of Experience
                        {/* Find Your <br /> Expert Witness */}
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                  <div className="feature-one__item feature-one__item--border-left justify-content-center">
                    <div className="feature-one__item__icon text-white">
                      <Image
                        width={54}
                        height={54}
                        src="/assets/distributor-img/partner-brands.png"
                        className="object-cover"
                        alt="Partner Brands"
                      />
                    </div>
                    <h2 className="feature-one__item__title font-Montserrat">
                      <Link href="#contact-service" className="text-white">
                        25+ Partner <br /> Brands
                        {/* Get a Free <br /> Case Assessment */}
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                  <div className="feature-one__item feature-one__item--border-left justify-content-end">
                    <div className="feature-one__item__icon text-white">
                      <Image
                        width={54}
                        height={54}
                        src="/assets/distributor-img/retail-point.png"
                        className="object-cover"
                        alt="Retail Point"
                      />
                    </div>
                    <h2 className="feature-one__item__title font-Montserrat">
                      <Link href="/onboard/" className="text-white">
                        5000+ Retail <br /> Points
                        {/* Join Our <br /> Expert Network */}
                      </Link>
                    </h2>
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
