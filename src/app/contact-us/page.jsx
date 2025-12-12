"use client"
import Banner8Contact from '@/sections/home/Banner8Contact';
import Script from 'next/script';
import { useEffect } from 'react';

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
                {/* <section className="page-header">
                    <div className="page-header__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/banner_contact.jpg')" }}></div>
                    <div className="container">
                        <h2 className="page-header__title bw-split-in-right">Contact</h2>
                        <ul className="procounsel-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>Contact</span></li>
                        </ul>
                    </div>
                </section> */}

                <section className="" style={{ background: "#0E222A" }}>
                    <div
                        className="hero-slide hero-about-slide"
                        style={{ backgroundImage: "url('assets/images/backgrounds/banner_contact.jpg')" }}>
                        <div className="main-slider-one__overlay-one-about-page"></div>
                        <div className="content container home-content">
                            <p style={{ marginTop: "80px" }} className="mb-2">
                                CONTACT <span style={{ color: "#fb3640" }} className="fw-bold">
                                    HOMESTEAD EXPERTS
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
                        </div>
                    </div>
                </section>

                <Banner8Contact />
                {/* <ContactSection/> */}

                <div className="google-map google-map__contact">
                    <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.5592796999927!2d-74.65019869999999!3d40.3521217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e6e792c00001%3A0xcb47c72e557e582f!2s259%20Nassau%20St%20Suite%202%20%23552%2C%20Princeton%2C%20NJ%2008540%2C%20USA!5e0!3m2!1sen!2sin!4v1758706287458!5m2!1sen!2sin" className="map__contact" allowFullScreen></iframe>
                </div>
            </div>

            <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top__text">back top</span>
                <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
            </a>

            <Script src="/assets/vendors/jquery/jquery-3.7.1.min.js" strategy="afterInteractive" ></Script>
            <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" ></Script>
            <Script src="/assets/vendors/bootstrap-select/bootstrap-select.min.js" strategy="afterInteractive" ></Script>
            <Script src="/assets/vendors/jarallax/jarallax.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/nouislider/nouislider.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/tiny-slider/tiny-slider.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/owl-carousel/js/owl.carousel.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/wow/wow.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/imagesloaded/imagesloaded.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/isotope/isotope.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/slick/slick.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/tilt/tilt.jquery.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/countdown/countdown.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-circleType/jquery.circleType.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/jquery-lettering/jquery.lettering.min.js" strategy="afterInteractive"></Script>

            {/* <!-- gsap js --> */}
            <Script src="/assets/vendors/gsap/gsap.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/gsap/scrolltrigger.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/gsap/splittext.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/vendors/gsap/procounsel-split.js" strategy="afterInteractive"></Script>

            {/* <!-- template js --> */}
            <Script src="/assets/js/procounsel.js" strategy="afterInteractive"></Script>
        </>
    )
}

export default Contact