"use client";

import { useEffect } from "react";

const Testimonials3 = () => {
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
            <section className="testimonials-three" id="testimonial" style={{paddingBottom:"120px"}}>
                <div className="testimonials-three__bg" style={{ backgroundImage: "url(assets/images/shapes/testimonial-bg-3.png)" }}></div>
                <div className="container">
                    <div className="testimonials-three__top">
                        <div className="sec-title text-left">
                            <h3 className="sec-title__title bw-split-in-up text-white">
                                What Attorneys  <br />
                                <span>Are Saying</span>
                            </h3>
                            <p className="text-white  mt-2 why-choose-four__content__text fs-4">Real feedback from attorneys who’ve trusted Homestead with their most critical cases.</p>
                        </div>
                        <div className="testimonials-three__info">
                            <div className="testimonials-three__info__rating">
                                <h3 className="testimonials-three__info__rating-value text-white">
                                    4.6
                                </h3>
                                <span className="testimonials-three__info__stars">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </span>
                            </div>
                            <div className="testimonials-three__info__content">
                                <h4 className="testimonials-three__info__title text-white">
                                    Average Ratings
                                </h4>
                                <p className="testimonials-three__info__text text-white">
                                    (5k+) Customer <br /> reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                {/* <div className="container"> */}
                    <div
                        className="testimonials-three__carousel procounsel-owl__carousel procounsel-owl__carousel--with-shadow procounsel-owl__carousel--basic-nav owl-carousel"
                        data-owl-options='{
				"items": 1,
				"margin": 30,
				"loop": true,
				"smartSpeed": 700,
				"nav": false,
				"dots": false,
				"autoplay": true,
				"responsive": {
					"0": {
						"items": 1
					},
                    "575": {
                        "items": 2
                    },
                    "768": {
                        "items": 2
                    },
					"992": {
						"items": 3
					},
                    "1200": {
						"items": 4
					},
                      "1440": {
						"items": 4.5
					}
				}
			}'
                    >
                        <div className="item">
                            <div
                                className="testimonials-card-three wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="000ms"
                            >
                                <div className="testimonials-card-three__top">
                                    <div className="testimonials-card-three__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                    <div className="testimonials-card-three__quote">
                                        <i className="icon-double-quote"></i>
                                    </div>
                                </div>
                                <div className="testimonials-card-three__text">
                                    There are many variations of passages of Lorem Ipsum avalab
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised
                                </div>
                                <div className="testimonials-card-three__author">
                                    <div className="testimonials-card-three__author-img">
                                        <img src=" assets/images/resources/testi-3-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonials-card-three__author-info">
                                        <h3 className="testimonials-card-three__name">
                                            Alen Martin
                                        </h3>
                                        <p className="testimonials-card-three__designation">
                                            Customer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div
                                className="testimonials-card-three wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="testimonials-card-three__top">
                                    <div className="testimonials-card-three__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                    <div className="testimonials-card-three__quote">
                                        <i className="icon-double-quote"></i>
                                    </div>
                                </div>
                                <div className="testimonials-card-three__text">
                                    There are many variations of passages of Lorem Ipsum avalab
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised
                                </div>
                                <div className="testimonials-card-three__author">
                                    <div className="testimonials-card-three__author-img">
                                        <img src=" assets/images/resources/testi-3-2.jpg" alt="" />
                                    </div>
                                    <div className="testimonials-card-three__author-info">
                                        <h3 className="testimonials-card-three__name">
                                            Hena Wiano
                                        </h3>
                                        <p className="testimonials-card-three__designation">
                                            Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div
                                className="testimonials-card-three wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="testimonials-card-three__top">
                                    <div className="testimonials-card-three__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                    <div className="testimonials-card-three__quote">
                                        <i className="icon-double-quote"></i>
                                    </div>
                                </div>
                                <div className="testimonials-card-three__text">
                                    There are many variations of passages of Lorem Ipsum avalab
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised
                                </div>
                                <div className="testimonials-card-three__author">
                                    <div className="testimonials-card-three__author-img">
                                        <img src=" assets/images/resources/testi-3-3.jpg" alt="" />
                                    </div>
                                    <div className="testimonials-card-three__author-info">
                                        <h3 className="testimonials-card-three__name">
                                            Alen Martin
                                        </h3>
                                        <p className="testimonials-card-three__designation">
                                            Customer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div
                                className="testimonials-card-three wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="300ms"
                            >
                                <div className="testimonials-card-three__top">
                                    <div className="testimonials-card-three__rating">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                    <div className="testimonials-card-three__quote">
                                        <i className="icon-double-quote"></i>
                                    </div>
                                </div>
                                <div className="testimonials-card-three__text">
                                    There are many variations of passages of Lorem Ipsum avalab
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised
                                </div>
                                <div className="testimonials-card-three__author">
                                    <div className="testimonials-card-three__author-img">
                                        <img src=" assets/images/resources/testi-3-4.jpg" alt="" />
                                    </div>
                                    <div className="testimonials-card-three__author-info">
                                        <h3 className="testimonials-card-three__name">
                                            Hena Wiano
                                        </h3>
                                        <p className="testimonials-card-three__designation">
                                            Co Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials3;
