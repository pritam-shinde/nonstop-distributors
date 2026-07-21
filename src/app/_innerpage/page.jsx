import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import Link from "next/link";
import styles from "./innerpage.module.css";

export const generateMetadata = () => {
  return handlerMetaDetails("services");
}

const ServicePage = () => {
  return (
    <>

      {/* banner */}
      <section className="section-dark">
        <div className="hero-slide hero-about-slide bgimg-services">
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <div className="custom-max-width3">
              <p style={{ marginTop: "80px" }} className="mb-2">
                <span className="fw-bold text-capitalize">
                  OUR <span className="fw-bold read-more-btn"> SERVICES</span>
                </span>
              </p>
              <h1>
                Efficient and widespread <br /> distribution of FMCG products
              </h1>

              <p style={{ marginBottom: "0px" }}>
                Comprehensive distribution solutions designed to maximize your
                brand's reach and visibility across landscape.
              </p>

              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4 mt-3">
                <Link
                  href="/contact-us/"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Contact Us</i>
                  <span className="">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details section-dark">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-md-12 col-lg-4">
              <div className={`${styles.sidebarSticky} service-sidebar`}>
                <div className="service-sidebar__single">
                  <div className="service-sidebar__title-box">
                    <h2 className="service-sidebar__title font-Montserrat">All Service</h2>
                  </div>
                  <ul className="list-unstyled service-sidebar__nav" style={{ background: "#0E222A" }}>
                    <li><Link className="text-white" href="/services/">Full-Scale Distribution <i className="icon-arrow-right"></i></Link></li>
                    <li><Link className="text-white" href="/services/">Logistics &amp; Supply Chain <i className="icon-arrow-right"></i></Link></li>
                    <li><Link className="text-white" href="/services/">Retail Coverage <i className="icon-arrow-right"></i></Link></li>
                    <li><Link className="text-white" href="/services/">E-commerce Distribution <i className="icon-arrow-right"></i></Link></li>
                    <li><Link className="text-white" href="/services/">Modern Trade <i className="icon-arrow-right"></i></Link></li>
                    <li><Link className="text-white" href="/services/">General Trade <i className="icon-arrow-right"></i></Link></li>
                  </ul>
                </div>
                {/* <div className="service-sidebar__single ">
                                <div className="service-sidebar__contact">
                                    <div className="service-sidebar__contact__image">
                                        <img
                                          src="/assets/distributor-img/rahul.jpg"
                                          alt="Nonstop Distributors"
                                          className={styles.sidebarContactImg}
                                          loading="lazy"
                                        />
                                    </div>
                                    <h3 className="service-sidebar__contact__title">Get a Free <br/> Quick Solution <br/>
                                        for Your Distribution Needs</h3>
                                    <Link href="/contact-us/" className="procounsel-btn"><i>Contact</i><span>Contact</span></Link>
                                </div>
                            </div> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className={`${styles.detailsContent} service-details__content`}>
                {/* <div className="service-details__thumbnail">
                                <img
                                  src="/assets/distributor-img/service-section.jpg"
                                  alt="Full-Scale Distribution"
                                  className={styles.thumbImg}
                                  loading="lazy"
                                />
                            </div> */}
                <h2 className="service-details__title text-white font-Montserrat">Full-Scale Distribution</h2>
                <p className="service-details__text text-white">
                  Our comprehensive distribution network ensures your products reach the right store. From metropolitan cities to
                  tier towns, we have the infrastructure and expertise to manage your brand’s complete distribution needs.
                </p>
                <h3 className="service-details__sub-title text-white">Built to Scale FMCG Distribution</h3>
                <p className="service-details__text text-white">
                  We combine territory-wise execution, warehouse reach, and on-ground sales support to keep products available,
                  visible, and moving—so you can grow market share without operational complexity.
                </p>
                <h2 className="service-details__sub-title text-white">Why Choose Nonstop Distributors?</h2>
                <div className="row gutter-y-30">
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                    <div className="service-details__item">
                      <div className="service-details__item__icon">
                        <i className="icon-idea-1"></i>
                        <span className="service-details__item__icon__zoom">
                          <i className="icon-idea-1"></i>
                        </span>
                      </div>
                      <div className="service-details__item__content">
                        <h3 className="service-details__item__title text-white">Pan-India Reach</h3>
                        <p className="service-details__item__text text-white">Strategic coverage from metro markets to tier towns through a strong distribution network.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="service-details__item">
                      <div className="service-details__item__icon">
                        <i className="icon-address-book-1"></i>
                        <span className="service-details__item__icon__zoom">
                          <i className="icon-address-book-1"></i>
                        </span>
                      </div>
                      <div className="service-details__item__content">
                        <h3 className="service-details__item__title text-white">Real-Time Visibility</h3>
                        <p className="service-details__item__text text-white">Inventory control and reporting that help you plan production, dispatch, and replenishment confidently.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutter-y-30 mt30">

                  <div className="col-12">
                    <div className="service-details__support" style={{ marginLeft: 0 }}>
                      <h3 className="service-details__sub-title text-white">Our Few Benefits</h3>
                      <p className="service-details__text text-white">
                        Reliable warehousing, territory execution, and scalable operations—designed to keep your products in-stock and selling across channels.
                      </p>
                      <h3 className="service-details__sub-title-two text-white">What You Get With Full-Scale Distribution</h3>
                      <ul className={`list-unstyled service-details__list ${styles.benefitsList}`}>
                        <li className="text-white"><i className="icon-check"></i>Warehouse network in strategic locations</li>
                        <li className="text-white"><i className="icon-check"></i>Real time inventory management</li>
                        <li className="text-white"><i className="icon-check"></i>Dedicated sales team for each territory</li>
                        <li className="text-white"><i className="icon-check"></i>Scalable solutions for seasonal demands</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* Newsletter */}
      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default ServicePage;
