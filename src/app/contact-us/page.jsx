"use client";
import Banner8Contact from "@/sections/home/Banner8Contact";
import Script from "next/script";
import { useEffect } from "react";

// export const generateMetadata = () => {
//   return handlerMetaDetails("services");
// };

const Contact = () => {
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
      <div className="page-wrapper">
        <section className="" style={{ background: "#0E222A" }}>
          <div
            className="hero-slide hero-about-slide"
            style={{
              backgroundImage:
                "url('/assets/distributor-img/contact-banner2.png')",
            }}
          >
            {/* style={{ backgroundImage: "url('assets/images/backgrounds/banner_contact.jpg')" }}> */}
            <div className="main-slider-one__overlay-one-about-page"></div>
            <div className="content container home-content">
              <p style={{ marginTop: "80px" }} className="mb-2">
                GET <span className="fw-bold read-more-btn"> IN TOUCH</span>
              </p>
              <h1 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <div>
                <p style={{ marginBottom: "0px" }}>
                  Have questions about our distribution services? Ready to
                  partner with us? <br className="d-none d-lg-inline" /> We'd
                  love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <Banner8Contact />

        {/* Map */}
        <div className="google-map google-map__contact">
          <iframe
            title="template google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29783.966928937327!2d79.0275979042053!3d21.072827323858306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf7f336e0a13%3A0x44f6d37cf2cffa29!2sNONSTOP!5e0!3m2!1sen!2sin!4v1765860790089!5m2!1sen!2sin"
            className="map__contact"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>

      <Script
        src="/assets/vendors/jquery/jquery-3.7.1.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/bootstrap-select/bootstrap-select.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jarallax/jarallax.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-ui/jquery-ui.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-appear/jquery.appear.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-validate/jquery.validate.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/nouislider/nouislider.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/tiny-slider/tiny-slider.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/wnumb/wNumb.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/owl-carousel/js/owl.carousel.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/wow/wow.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/imagesloaded/imagesloaded.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/isotope/isotope.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/slick/slick.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/tilt/tilt.jquery.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/countdown/countdown.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-circleType/jquery.circleType.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/jquery-lettering/jquery.lettering.min.js"
        strategy="afterInteractive"
      ></Script>

      {/* <!-- gsap js --> */}
      <Script
        src="/assets/vendors/gsap/gsap.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/gsap/scrolltrigger.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/gsap/splittext.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/gsap/procounsel-split.js"
        strategy="afterInteractive"
      ></Script>

      {/* <!-- template js --> */}
      <Script
        src="/assets/js/procounsel.js"
        strategy="afterInteractive"
      ></Script>
    </>
  );
};

export default Contact;
