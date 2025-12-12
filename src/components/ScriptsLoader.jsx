// components/ScriptsLoader.js
import Script from "next/script";
import React from "react";

const ScriptsLoader = () => {
  const scripts = [
    "/assets/vendors/jquery/jquery-3.7.1.min.js",
    "/assets/vendors/bootstrap/js/bootstrap.bundle.min.js",
    "/assets/vendors/bootstrap-select/bootstrap-select.min.js",
    "/assets/vendors/jarallax/jarallax.min.js",
    "/assets/vendors/jquery-ui/jquery-ui.js",
    "/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
    "/assets/vendors/jquery-appear/jquery.appear.min.js",
    "/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
    "/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
    "/assets/vendors/jquery-validate/jquery.validate.min.js",
    "/assets/vendors/nouislider/nouislider.min.js",
    "/assets/vendors/tiny-slider/tiny-slider.js",
    "/assets/vendors/wnumb/wNumb.min.js",
    "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
    "/assets/vendors/wow/wow.js",
    "/assets/vendors/imagesloaded/imagesloaded.min.js",
    "/assets/vendors/isotope/isotope.js",
    "/assets/vendors/slick/slick.min.js",
    "/assets/vendors/tilt/tilt.jquery.js",
    "/assets/vendors/countdown/countdown.min.js",
    "/assets/vendors/jquery-circleType/jquery.circleType.js",
    "/assets/vendors/jquery-lettering/jquery.lettering.min.js",
    // GSAP
    "/assets/vendors/gsap/gsap.js",
    "/assets/vendors/gsap/scrolltrigger.min.js",
    "/assets/vendors/gsap/splittext.min.js",
    "/assets/vendors/gsap/procounsel-split.js",
    // Template
    "/assets/js/procounsel.js",
  ];

  return (
    <>
      {scripts.map((src, index) => (
        <Script key={index} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
};

export default ScriptsLoader;
