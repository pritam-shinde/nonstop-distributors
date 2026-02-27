import React from 'react'

const HowWeWork = () => {
    return (
        <section className="why-choose-three">
            <div className="why-choose-three__bg" style={{ backgroundImage: "url('/assets/images/shapes/why-choose-three-bg.png')" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-three__content wow fadeInUp" data-wow-delay="300ms">
                            <div className="sec-title text-left">
                               <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat text-white">
                                    How We <span> Work</span>
                                </h2>
                                {/* <p className="why-choose-four__content__text text-white fs-5 fw-bold font-Merriweather mb-0">
                                    Our proven partnership process
                                </p> */}
                                  <h3 className="why-choose-four__content__text tailored-subtitle font-Merriweather text-white mt-2 custom-heading-h3 fs-5 fw-bold mb-0">
                                    Our proven partnership process
                                </h3>
                            </div>

                            <div className="why-choose-three__box">
                                <div className="why-choose-three__box__left">
                                    <div className="why-choose-three__box__left-item">
                                        <h4 className="why-choose-three__box__left-text">
                                            Consultation
                                        </h4>
                                    </div>
                                </div>
                                <div className="why-choose-three__box__right">
                                    <div className="why-choose-three__box__right-item">
                                        <p className="why-choose-three__box__right-text">
                                            We understand your brand, goals, and market aspirations
                                            through detailed discussions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-three__box">
                                <div className="why-choose-three__box__left">
                                    <div className="why-choose-three__box__left-item">
                                        <h4 className="why-choose-three__box__left-text">
                                            Strategy
                                        </h4>
                                    </div>
                                </div>
                                <div className="why-choose-three__box__right">
                                    <div className="why-choose-three__box__right-item">
                                        <p className="why-choose-three__box__right-text">
                                            Our team crafts a customized distribution strategy
                                            aligned with your objectives.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-three__box">
                                <div className="why-choose-three__box__left">
                                    <div className="why-choose-three__box__left-item">
                                        <h4 className="why-choose-three__box__left-text">
                                            Execution
                                        </h4>
                                    </div>
                                </div>
                                <div className="why-choose-three__box__right">
                                    <div className="why-choose-three__box__right-item">
                                        <p className="why-choose-three__box__right-text">
                                            We deploy our resources and network to bring your
                                            products to market efficiently
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-three__box">
                                <div className="why-choose-three__box__left">
                                    <div className="why-choose-three__box__left-item">
                                        <h4 className="why-choose-three__box__left-text">Growth</h4>
                                    </div>
                                </div>
                                <div className="why-choose-three__box__right">
                                    <div className="why-choose-three__box__right-item">
                                        <p className="why-choose-three__box__right-text">
                                            Continuous optimization and scaling to maximize your
                                            brand's market potential.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div
                            className="why-choose-three__right wow slideInRight"
                            style={{
                                backgroundImage:
                                    "url('/assets/distributor-img/how-we-work.jpg')",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork