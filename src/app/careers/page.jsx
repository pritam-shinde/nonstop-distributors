import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";

const MainBlogSection = () => {
  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/distributor-img/careers-page-banner.png')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <h1 className="">
              Build Your Career With Us
              <br />
              <span style={{ color: "#fb3640" }}>
                Grow, Learn & Make an Impact
              </span>
            </h1>

            <p style={{ marginBottom: "0px" }}>
              At Nonstop Distributors, we offer career opportunities in a
              fast-growing FMCG distribution environment where dedication and
              teamwork drive success.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>
              Join our team to work with leading brands, gain real-world
              experience, and grow your career with long-term stability and
              learning opportunities.
            </p>

            <div>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                <a
                  href="#"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Explore Opportunities</i>
                  <span className="">Explore Opportunities</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section
        className="service-one"
        id="services"
        style={{
          background: "linear-gradient(to right, #247ba0, #0E222A )",
          paddingBottom: "120px",
        }}
      >
        <div
        // className="service-one__bg"
        ></div>
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h3 className="sec-title__title bw-split-in-up">
              Current Job Openings <br />{" "}
              <span>Start Your Journey With Us</span>
            </h3>
          </div>
          <div className="row gutter-y-30">
            {[
              {
                title: "Delivery Driver",
                location: "Local / City-based",
                experience: "1-3 years",
                jobType: "Full Time",
                responsibilities: [
                  "Deliver FMCG products to retail stores on time",
                  "Ensure safe handling of goods during delivery",
                  "Collect signed delivery confirmations",
                  "Coordinate with warehouse and sales teams",
                ],
              },
              {
                title: "Warehouse / Godown Manager",
                location: "Warehouse Location",
                experience: "2-5 years",
                jobType: "Full Time",
                responsibilities: [
                  "Manage daily warehouse operations",
                  "Maintain stock records and inventory accuracy",
                  "Coordinate loading and dispatch schedules",
                  "Ensure cleanliness and safety standards",
                ],
              },
              {
                title: "Sales Executive",
                location: "Field-based",
                experience: "1-4 years",
                jobType: "Full Time",
                responsibilities: [
                  "Visit retail stores and take orders",
                  "Build and maintain retailer relationships",
                  "Promote products and schemes",
                  "Achieve monthly sales targets",
                ],
              },
              {
                title: "Accounts & Billing Executive",
                location: "Office-based",
                experience: "1-3 years",
                jobType: "Full Time",
                responsibilities: [
                  "Prepare invoices and billing reports",
                  "Maintain payment and outstanding records",
                  "Coordinate with sales and operations teams",
                  "Handle basic accounting documentation",
                ],
              },
              {
                title: "Operations Coordinator",
                location: "Office / Field Support",
                experience: "1-3 years",
                jobType: "Full Time",
                responsibilities: [
                  "Coordinate between sales, warehouse, and delivery teams",
                  "Track daily operations and reports",
                  "Support order processing and dispatch planning",
                  "Assist management with operational tasks",
                ],
              },
            ].map((position, index) => (
              <div
                key={index}
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="00ms"
              >
                <div
                  className="service-one__item service-noeffect"
                  style={{
                    transform: "none !important",
                    background: "#0E222A",
                  }}
                >
                  <div className="service-one__item__top">
                    <div className="w-100">
                      <h3
                        className="service-one__item__title"
                        style={{ maxWidth: "100%" }}
                      >
                        <a className="text-white" href="#">
                          {position.title}
                        </a>
                      </h3>
                      {/* <span className="service-one__item__count text-white"></span> */}
                      <p className="mb-0">{position.jobType}</p>
                    </div>
                  </div>

                  {/* <div className="service-one__item__text">
                    <p className="fw-bold">Baisc Info:</p>
                    <ul>
                      <li>
                        <p className="mb-0">
                          <span>Location: </span>
                          {position.location}
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">
                          <span>Experience: </span>
                          {position.experience}
                        </p>
                      </li>
                    </ul>
                  </div> */}

                  <div className="service-one__item__text">
                    <p className="fw-bold">Responsibilities:</p>
                    <ul>
                      {position.responsibilities.map((item, index) => (
                        <li key={index}>
                          <p className="mb-0">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-one__item__image">
                    <img
                      src="assets/images/resources/service-1-1.png"
                      alt="procounsel"
                    />

                    <div
                      className="service-one__item__icon"
                      style={{ background: "#fb3640" }}
                    >
                      <i className="icon-criminal-law"></i>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-4 mt-4">
                    <a
                      href="#"
                      className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                    >
                      <i>Apply Now</i>
                      <span className="">Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Letter */}
      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default MainBlogSection;
