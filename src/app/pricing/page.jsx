import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";
import React from "react";

const PricingPage = () => {
    return (
        <>
            {/* banner */}
            <section className="" style={{ background: "#0E222A" }}>
                <div
                    className="hero-slide hero-about-slide"
                    style={{
                        backgroundImage: "url('/assets/photos/pricing/pricing-hero.jpg')",
                        // backgroundImage: "url('assets/images/backgrounds/banner_slide1-new.jpg')",
                    }}
                >
                    <div className="main-slider-one__overlay-one-about-page"></div>
                    <div className="content container home-content">
                        <p style={{ marginTop: "80px" }} className="mb-2">
                            <span style={{ color: "#fb3640" }} className="fw-bold">
                                PRICING
                            </span>
                        </p>
                        <h1 className="">
                            Transparent Pricing. <br />{" "}
                            <span style={{ color: "#fb3640" }}> Trusted Process.</span>
                        </h1>

                        <p style={{ marginBottom: "0px" }} className="custom-max-width2">
                            Only pay when you retain your expert, and start every case with a
                            free consultation.
                        </p>
                        <p
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                            className="custom-max-width2"
                        >
                            At Homestead, we believe expert witness services should be clear,
                            fair, and focused on results. You’ll never pay hidden fees or
                            costly subscriptions to start a search, and you’ll know exactly
                            what to expect before moving forward.
                        </p>

                        <div>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                                <a href="#contact-service"
                                    className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                                >
                                    <i>REQUEST AN EXPERT</i>
                                    <span className="">REQUEST AN EXPERT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2nd Choose */}
            <section className="why-choose-four">
                <div
                    className="why-choose-four__bg jarallax"
                    data-jarallax
                    data-speed="0.3"
                    style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/bg_why_choose_us.jpg)",
                    }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
                            <div className="why-choose-four__content">
                                <div className="sec-title text-left">
                                    <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                                        A Simple, Transparent <br />{" "}
                                        <span>Model Built for Attorneys</span>
                                    </h2>
                                </div>
                                <p className="why-choose-four__content__text text-white">
                                    Every case is unique, and so is every expert. That’s why
                                    Homestead provides custom quotes tailored to the scope of your
                                    cas and the expert’s credentials.
                                </p>
                                <div className="why-choose-four__list">
                                    <div className="why-choose-four__item">
                                        <div className="why-choose-four__item__top">
                                            <div className="why-choose-four__item__icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m21 21-4.34-4.34" />
                                                    <circle cx="11" cy="11" r="8" />
                                                </svg>
                                            </div>
                                            <h3 className="why-choose-four__item__title">
                                                No subscription or <br /> sourcing fees
                                            </h3>
                                        </div>
                                        <p className="why-choose-four__item__text text-white">
                                            Start your expert search with no upfront costs or ongoing
                                            commitments.
                                        </p>
                                    </div>
                                    <div className="why-choose-four__item">
                                        <div className="why-choose-four__item__top">
                                            <div className="why-choose-four__item__icon">
                                                <i className="icon-collaboration"></i>
                                            </div>
                                            <h3 className="why-choose-four__item__title">
                                                No payment <br /> until retention
                                            </h3>
                                        </div>
                                        <p className="why-choose-four__item__text text-white">
                                            You only pay once you’ve confirmed the right expert for
                                            your case.
                                        </p>
                                    </div>
                                </div>

                                <div className="why-choose-four__list">
                                    <div className="why-choose-four__item">
                                        <div className="why-choose-four__item__top">
                                            <div className="why-choose-four__item__icon">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src="/assets/images/shapes/icon-03.png"
                                                    alt="response"
                                                />
                                            </div>
                                            <h3 className="why-choose-four__item__title">
                                                Free 15-minute <br /> consultation
                                            </h3>
                                        </div>
                                        <p className="why-choose-four__item__text text-white">
                                            Every expert offers a complimentary call before engagement
                                            to ensure fit.
                                        </p>
                                    </div>
                                    <div className="why-choose-four__item">
                                        <div className="why-choose-four__item__top">
                                            <div className="why-choose-four__item__icon">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src="/assets/images/shapes/icon-04.png"
                                                    alt="response"
                                                />
                                            </div>
                                            <h3 className="why-choose-four__item__title">
                                                Custom quotes for <br /> every case
                                            </h3>
                                        </div>
                                        <p className="why-choose-four__item__text text-white">
                                            Pricing is tailored to your case scope and the expert’s
                                            credentials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInUp pricing-attorneys-img" data-wow-delay="100ms">
                            <div className="why-choose-four__right" style={{height:"100%"}}>
                                <div className="why-choose-four__img mx-auto" style={{position:"relative",width:"100%", height:"80%"}}>
                                    {/* <img
                                        src="/assets/images/backgrounds/image_10.jpg"
                                        alt="why-choose-us"
                                    /> */}
                                    <Image src="/assets/photos/pricing/pricing-module-2.jpg" fill alt="why-choose-us" style={{height:"100%", objectFit:"cover"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3rd How We Work */}
            <section className="why-choose-three">
                <div className="why-choose-three__bg"
                    style={{ backgroundImage: "url('assets/images/shapes/why-choose-three-bg.png')" }}></div>
                {/* <div className="why-choose-three__right wow slideInRight"
                    style={{ backgroundImage: "url('assets/images/backgrounds/why-choose-three-bg.jpg')" }}></div> */}
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xl-8 col-lg-9"> */}
                        <div className="col-xl-6">
                            <div
                                className="why-choose-three__content wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="sec-title text-left">
                                    <h3 className="sec-title__title bw-split-in-up">
                                        The Smarter Way to <br className="d-none d-lg-inline" />{" "}
                                        <span> Source Expert Witnesses</span>
                                    </h3>
                                    <p className="why-choose-four__content__text text-white">
                                        Other services lock you into subscriptions or charge high
                                        sourcing fees <br className="d-none d-lg-inline" /> without
                                        guaranteeing results. Homestead takes a different approach,
                                        built on trust, transparency, and measurable outcomes.
                                    </p>
                                </div>

                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text fw-bold fs-5">
                                                Other Sourcing Services
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-text fw-bold fs-5">
                                                Homestead Experts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text">
                                                Monthly or annual subscription fees
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-text font-Montserrat" style={{ fontSize: "clamp(18px,3vw,20px)", lineHeight: "26px" }}>
                                                No subscription fees
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text">
                                                Sourcing fees before expert selection
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-textfont-Montserrat" style={{ fontSize: "clamp(18px,3vw,20px)", lineHeight: "26px", margin: "0 20px" }}>
                                                No payment until retention
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text">
                                                Limited databases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-text font-Montserrat" style={{ fontSize: "clamp(18px,3vw,20px)", lineHeight: "26px" }}>
                                                Active outreach to find the right fit
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text">
                                                Unverified Experts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-text font-Montserrat" style={{ fontSize: "clamp(18px,3vw,20px)", lineHeight: "26px" }}>
                                                Fully vetted licensed and insured professionals
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="why-choose-three__box">
                                    <div className="why-choose-three__box__left pricing-left">
                                        <div className="why-choose-three__box__left-item">
                                            <p className="why-choose-three__box__left-text">
                                                Delayed Communication
                                            </p>
                                        </div>
                                    </div>
                                    <div className="why-choose-three__box__right pricing-right">
                                        <div className="why-choose-three__box__right-item">
                                            <p className="why-choose-three__box__right-text font-Montserrat" style={{ fontSize: "clamp(18px,3vw,20px)", lineHeight: "26px" }}>
                                                Dedicated team managing the process for you
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="why-choose-three__right wow slideInRight"
                                style={{ backgroundImage: "url('/assets/photos/pricing/pricing-module-3.jpg')" }}
                            // style={{ backgroundImage: "url('assets/images/backgrounds/why-choose-three-bg.jpg')" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th Stand For */}
            <section className="team-one" style={{ background: "#0E222A" }}>
                <div className="container">
                    <div className="sec-title text-left">
                        <h3 className="sec-title__title bw-split-in-up text-white">
                            Every Engagement Includes
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="00ms"
                        >
                            <div className="service-details__item" style={{ height: "100%" }}>
                                <div className="service-details__item__icon">
                                    <Image
                                        width={31}
                                        height={31}
                                        src="/assets/images/shapes/stand_for_1.png"
                                        alt="response"
                                    />
                                    <span className="service-details__item__icon__zoom">
                                        <Image
                                            width={31}
                                            height={31}
                                            src="/assets/images/shapes/stand_for_1.png"
                                            alt="response"
                                        />
                                    </span>
                                </div>
                                <div className="service-details__item__content">
                                    <h4 className="service-details__item__title text-white">
                                        Personalized Expert Search
                                    </h4>

                                    <p className="service-details__item__text text-white">
                                        We go beyond directories to find the right fit for your
                                        case. Every search is handled by our recruiting team and
                                        customized to your case needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="100ms"
                        >
                            <div className="service-details__item" style={{ height: "100%" }}>
                                <div className="service-details__item__icon">
                                    <Image
                                        width={31}
                                        height={31}
                                        src="/assets/images/shapes/stand_for_2.png"
                                        alt="response"
                                    />
                                    <span className="service-details__item__icon__zoom">
                                        <Image
                                            width={31}
                                            height={31}
                                            src="/assets/images/shapes/stand_for_2.png"
                                            alt="response"
                                        />
                                    </span>
                                </div>
                                <div className="service-details__item__content">
                                    <h4 className="service-details__item__title text-white">
                                        Complimentary Consultation
                                    </h4>

                                    <p className="service-details__item__text text-white">
                                        Each expert offers a free 15-minute call before engagement.
                                        You’ll confirm expertise, assess fit, and make an informed
                                        decision before paying anything.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="100ms"
                        >
                            <div className="service-details__item" style={{ height: "100%" }}>
                                <div className="service-details__item__icon">
                                    <Image
                                        width={31}
                                        height={31}
                                        src="/assets/images/shapes/stand_for_3.png"
                                        alt="response"
                                    />
                                    <span className="service-details__item__icon__zoom">
                                        <Image
                                            width={31}
                                            height={31}
                                            src="/assets/images/shapes/stand_for_3.png"
                                            alt="response"
                                        />
                                    </span>
                                </div>
                                <div className="service-details__item__content">
                                    <h4 className="service-details__item__title text-white">
                                        Coordinated Case Management
                                    </h4>

                                    <p className="service-details__item__text text-white">
                                        Once retained, your dedicated case manager handles
                                        scheduling, calls, and logistics, acting as an extension of
                                        your firm from start to finish.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="100ms"
                        >
                            <div className="service-details__item" style={{ height: "100%" }}>
                                <div className="service-details__item__icon">
                                    <Image
                                        width={31}
                                        height={31}
                                        src="/assets/images/shapes/stand_for_4.png"
                                        alt="response"
                                    />
                                    <span className="service-details__item__icon__zoom">
                                        <Image
                                            width={31}
                                            height={31}
                                            src="/assets/images/shapes/stand_for_4.png"
                                            alt="response"
                                        />
                                    </span>
                                </div>
                                <div className="service-details__item__content">
                                    <h4 className="service-details__item__title text-white">
                                        Transparent Process
                                    </h4>

                                    <p className="service-details__item__text text-white">
                                        No subscriptions. No sourcing fees. You’ll always know what
                                        to expect, and you only pay once the expert is retained.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact */}
            <section className="contact-one" id="contact-service">
                <div
                    style={{
                        transform: "rotateY(180deg)",
                        width: "100%",
                        position: "relative",
                        marginBottom: "20px",
                        marginTop: "8px",
                    }}
                >
                    <div
                        className="tailored-redline"
                        style={{ position: "unset", height: "14px" }}
                    ></div>
                </div>
                <div className="container">
                    <div className="contact-one__wrapper">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="sec-title text-left">
                                    <h2 className="sec-title__title bw-split-in-up font-Montserrat">
                                        <span className="text-white"> Get Started With a </span>
                                        <br />
                                        <span> Free Consultation</span>
                                    </h2>

                                    <p
                                        className="contact-one__info__text text-white font-Merriweather"
                                        style={{ fontSize: "clamp(18px,3vw,20px)" }}
                                    >
                                        No subscriptions. No hidden fees. Just expert support when
                                        you need it most.
                                    </p>

                                </div>

                                <div className="contact-one__content">
                                    <ul className="list-unstyled contact-one__info">
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-telephone-call-1"></i>
                                                <span className="contact-one__info__icon__zoom">
                                                    <i className="icon-telephone-call-1"></i>
                                                </span>
                                            </div>
                                            <div className="contact-one__info__content">
                                                <div className="contact-one__info__text">
                                                    <p className="main-footer__info__text">
                                                        <a
                                                            href="tel:8772443703"
                                                            aria-label="Call us at (877) 244-3703"
                                                            className="text-white"
                                                            style={{ fontSize: "14px" }}
                                                        >
                                                            (877) 244-3703
                                                        </a>
                                                    </p>
                                                    <p className="main-footer__info__text">
                                                        <a
                                                            href="tel:7327438003"
                                                            aria-label="Call us at +21 9555-0114"
                                                            className="text-white"
                                                            style={{ fontSize: "14px" }}
                                                        >
                                                            (732) 743-8003
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="contact-one__info__item" style={{ flex: 1 }}>
                                            <div className="contact-one__info__icon">
                                                <i className="icon-map-pin"></i>
                                                <span className="contact-one__info__icon__zoom">
                                                    <i className="icon-map-pin"></i>
                                                </span>
                                            </div>

                                            <div className="contact-one__info__content">
                                                <p
                                                    className="contact-one__info__text text-white"
                                                    style={{ fontSize: "14px" }}
                                                >
                                                    259 Nassau St. Suite 2 #552
                                                    <br /> Princeton, NJ 08542
                                                </p>
                                            </div>
                                        </li>
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-glove"></i>
                                                <span className="contact-one__info__icon__zoom">
                                                    <i className="icon-glove"></i>
                                                </span>
                                            </div>
                                            <div className="contact-one__info__content">
                                                <a
                                                    href="mailto:info@homesteadexperts.com"
                                                    className="text-white"
                                                >
                                                    <p
                                                        className="contact-one__info__text text-white"
                                                        style={{ fontSize: "14px" }}
                                                    >
                                                        info@homesteadexperts.com
                                                    </p>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                <form
                                    className="contact-one__form contact-form-validated form-one"
                                    action="inc/sendemail.php"
                                >
                                    <div className="contact-one__form__bg-one"></div>
                                    <div className="contact-one__form__bg-two"></div>
                                    <div className="form-one__group">
                                        <div className="form-one__control form-one__control--full">
                                            <input
                                                id="firstname"
                                                type="text"
                                                name="firstname"
                                                placeholder="First Name"
                                            />
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <input
                                                id="lastname"
                                                type="text"
                                                name="lastname"
                                                placeholder="Last Name"
                                            />
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <input
                                                id="casename"
                                                type="text"
                                                name="casename"
                                                placeholder="Case Name"
                                            />
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <a href="#" className="procounsel-btn text-uppercase">
                                                <i>Submit a Case</i>
                                                <span>Submit a Case</span>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        transform: "rotateY(180deg)",
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <div className="tailored-redline"></div>
                </div>
            </section>

            {/* faq */}
            <section className="faq-one" style={{ background: "#0E222A" }}>
                <div className="container">
                    <div className="sec-title text-left">
                        <h3 className="sec-title__title bw-split-in-up text-white">
                            Common Questions About <br />
                            <span>Expert Witness Pricing</span>
                        </h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-one__content">
                                <div
                                    className="faq-one__accordion procounsel-accrodion"
                                    data-grp-name="procounsel-accrodion"
                                >
                                    <div className="accrodion active">
                                        <div className="accrodion-title">
                                            <span className="accrodion__number text-white"></span>
                                            <h4 className="text-white">
                                                Do I pay anything upfront?
                                                <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                            </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p className="text-white">
                                                    No. You’ll never pay to start a search. We take no
                                                    money upfront and charge no subscriptions. Once you’re
                                                    ready to retain a referred expert, you’ll pay only a{" "}
                                                    <strong>$250 retention fee</strong> along with the
                                                    expert’s individual retainer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <span className="accrodion__number text-white"></span>
                                            <h4 className="text-white">
                                                Are consultations really free?
                                                <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                            </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p className="text-white">
                                                    Yes. Every expert offers a{" "}
                                                    <strong>complimentary 15-minute consultation</strong>{" "}
                                                    before you commit. It’s a chance to confirm the
                                                    expert’s fit and ensure alignment before any payment
                                                    is made.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <span className="accrodion__number text-white"></span>
                                            <h4 className="text-white">
                                                How fast can I expect results?
                                                <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                            </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p className="text-white">
                                                    Most expert searches are completed within{" "}
                                                    <strong>7–14 business days</strong>, depending on
                                                    complexity.. In many cases, experts are located even
                                                    sooner. You’ll receive confirmation within{" "}
                                                    <strong>24 hours</strong> that your search has begun.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-one__accordion procounsel-accrodion"
                                data-grp-name="procounsel-accrodion"
                            >
                                <div className="accrodion">
                                    <div className="accrodion-title">
                                        <span className="accrodion__number text-white"></span>
                                        <h4 className="text-white">
                                            What if I need an expert urgently?
                                            <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                        </h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p className="text-white">
                                                If you need an expert in{" "}
                                                <strong>10 days or less</strong>, simply select{" "}
                                                <strong>“Rush Matter”</strong> on the submission form.
                                                Rush cases are prioritized immediately, with an
                                                accelerated search process and a{" "}
                                                <strong>$500 retention fee</strong> once the expert is
                                                retained.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion">
                                    <div className="accrodion-title">
                                        <span className="accrodion__number text-white"></span>
                                        <h4 className="text-white">
                                            Do you charge extra for complex or specialized cases?
                                            <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                        </h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p className="text-white">
                                                No. Even for highly specialized searches, you’ll never
                                                be charged additional sourcing fees. Your quote reflects
                                                the expert’s rates and the agreed-upon retention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion">
                                    <div className="accrodion-title">
                                        <span className="accrodion__number text-white"></span>
                                        <h4 className="text-white">
                                            What happens after I retain an expert?
                                            <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                        </h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p className="text-white">
                                                Once you’ve retained your expert, a{" "}
                                                <strong>dedicated case manager</strong> joins your team.
                                                They’ll coordinate scheduling, phone calls, and
                                                logistics, serving as an extension of your firm from
                                                start to finish.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScriptsLoader />
        </>
    );
};

export default PricingPage;
