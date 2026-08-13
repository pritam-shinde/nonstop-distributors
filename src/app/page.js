import BrandSlider from "@/components/BrandSlider";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import Banner1Swiper from "@/sections/home/Banner1Swiper";
import CategoriesServe from "@/sections/home/CategoriesServe";
import Image from "next/image";

export const generateMetadata = () => {
  return handlerMetaDetails("home");
};

export default function Home() {
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
                  Trusted partner in FMCG distribution
                </h2>
                <h3 className="tailored-subtitle font-Merriweather text-white fs-4 mt-2">
                  Empowering FMCG growth
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
                  We strategically partner with brands to ensure their products
                  reach retailers and consumers seamlessly. We combine deep
                  market insight, a powerful distribution network, and tailored
                  strategies to help FMCG brands thrive.
                </p>

                <a href="/nonstop-distributor-company-profile.pdf" download className="tailored-btn">
                  <i>Download Company Profile</i>
                  <span>Download Company Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories We Serve */}
        <CategoriesServe />

        {/* Brands */}
        <BrandSlider />

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
