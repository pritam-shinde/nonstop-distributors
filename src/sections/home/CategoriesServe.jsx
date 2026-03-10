"use client";

const CategoriesServe = () => {
  return (
    <>
      <section className="portfolio-one" id="caseStudy">
        <div className="container">
          <div className="sec-title ">
            <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white text-start">
              Categories We Serve
            </h2>
            <h3 className="about-one__content__text text-white mt-2 tailored-subtitle font-Merriweather fs-4">
              Specialized distribution expertise across diverse FMCG categories
            </h3>
          </div>
        </div>

        <div className="container">
          <div className="portfolio-one__wrapper">
            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/ghee-and-oil.png"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a
                  href="#"
                  className="pe-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a
                    href="#"
                    className="pe-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    Grocery
                  </a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">Oils & Ghee</div>
              </div>
            </div>

            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/masala-and-pickle.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a
                  href="#"
                  className="pe-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a
                    href="#"
                    className="pe-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    Kitchen Essentials
                  </a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Masala & Pickle
                </div>
              </div>
            </div>

            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/snaks-biscuit.png"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a
                  href="#"
                  className="pe-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a
                    href="#"
                    className="pe-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    Snacks
                  </a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Biscuits, Chocolates & Cookies
                </div>
              </div>
            </div>

            <div className="portfolio-one__item active">
              <img
                src="/assets/distributor-img/hot-and-cold-beverages.png"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a
                  href="#"
                  className="pe-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a
                    href="#"
                    className="pe-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    Drinks
                  </a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Hot & Cold Beverages
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesServe;
