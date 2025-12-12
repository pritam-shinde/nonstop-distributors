"use client";

import ScriptsLoader from "@/components/ScriptsLoader";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import Banner4CaseStrategy from "@/sections/home/Banner4CaseStrategy";
import Banner5CaseStudy from "@/sections/home/Banner5CaseStudy";
import Banner8Contact from "@/sections/home/Banner8Contact";
import Image from "next/image";
import { useEffect } from "react";

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

        {/* Experts You Can */}
        <section
          className="about-one"
          id="about"
          style={{ position: "relative", backgroundColor: "#0E222A" }}
        >
          <Image
            src="/assets/images/backgrounds/section-2-1-b-new.png"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              overflow: "hidden",
            }}
            alt="about-background"
          />
          <div className="container position-relative z-3">
            <div className="margin-about">
              <div className="wow fadeInRight" data-wow-delay="300ms">
                <div className="about-one__inner1">
                  <div className="about-one__content1">
                    <div className="sec-title text-left ">
                      <h3 className="sec-title__title bw-split-in-up text-white">
                        Experts You Can <span> Build On</span>
                      </h3>
                      <h4 className="font-Merriweather mt-2 fw-normal text-white">
                        Credibility You Can Rely On, Coast to Coast
                      </h4>
                    </div>

                    <p className="about-one__content__text text-white">
                      Every expert in our network is hand-vetted for
                      <br className="d-none d-lg-inline" /> qualifications,
                      credibility, and courtroom readiness. With
                      <br className="d-none d-lg-inline" /> national reach and
                      specialized knowledge across
                      <br className="d-none d-lg-inline" />
                      disciplines, we match you with professionals who support
                      <br className="d-none d-lg-inline" /> your case with
                      clarity and conviction.
                    </p>

                    <ul className="list-unstyled about-four__list">
                      <li className="about-four__item text-white">
                        <i className="icon-check mt-2"></i>
                        <p className="mb-0">Rigorously Vetted Professionals</p>
                      </li>

                      <li className="about-four__item text-white">
                        <i className="icon-check mt-2"></i>
                        <p className="mb-0">Nationwide Network</p>
                      </li>

                      <li className="about-four__item text-white">
                        <i className="icon-check mt-2"></i>
                        <p className="mb-0">Trial-Tested Experience</p>
                      </li>
                    </ul>

                    <div className="">
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <a href="#contact-service" className="procounsel-btn">
                          <i>SPEAK TO AN EXPERT</i>
                          <span>SPEAK TO AN EXPERT</span>
                        </a>
                      </div>
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

        {/*case strategy  */}
        <Banner4CaseStrategy />

        {/* case study */}
        <Banner5CaseStudy />

        <Banner8Contact />

        {/* <ExpertPartner /> */}
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
