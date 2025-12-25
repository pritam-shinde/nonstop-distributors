import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <section className="why-choose-four">
      <div
        className="why-choose-four__bg jarallax"
        data-jarallax
        data-speed="0.3"
        style={{
          backgroundImage: "url(/assets/distributor-img/what-we-offer-nagpur.jpg)",
        }}
      ></div>
      <div className="container">
        <div>
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay="00ms">
              <div className="why-choose-four__content">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    What We
                    <span> Offer</span>
                  </h3>
                  <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
                    End-to-end distribution services tailored to your brand's
                    unique needs
                  </h4>
                </div>

                <div className="why-choose-four__list">
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/shapes/icon-01.png"
                          alt="response"
                        />
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Full-Scale <br /> Distribution.
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Complete distribution management from warehouse to retail
                      shelf, ensuring your products reach to your store.
                    </p>
                  </div>
                  <div className="why-choose-four__item">
                    <div className="why-choose-four__item__top">
                      <div className="why-choose-four__item__icon">
                        <i className="icon-collaboration"></i>
                      </div>
                      <h3 className="why-choose-four__item__title">
                        Logistics & <br /> Supply Chain.
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Efficient logistics solutions temperature control, and
                      optimized delivery routes.
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
                        Retail <br /> Coverage.
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Deep penetration across modern trade, general trade, and
                      emerging retail formats.
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
                        E-commerce <br /> Distribution
                      </h3>
                    </div>
                    <p className="why-choose-four__item__text text-white">
                      Seamless integration with major online marketplaces and
                      D2C fulfillment solutions.
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
                    src="\assets\distributor-img\what-we-offer-nagpur.jpg"
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
  );
};

export default WhatWeOffer;
