"use client";

export const VisionMission = () => {
  const items = [
    {
      number: "01",
      href: "/medical-malpractice/",
      title: "Our Mission",
      text: `To be the most admired business partner by driving operational excellence through a winning organization. We aim to consistently deliver business goals, exceed customer and employee expectations, and build a dedicated, ethical, and capable organization that drives a culture of success.`,
    },
    {
      number: "02",
      href: "/product-liability/",
      title: "Our Vision",
      text: `To become India's most trusted full-scale FMCG Distribution Partner-helping global and national brands achieve deep market penetration, strong product visibility, and sustainable growth across every retail channel.`,
    },
  ];

  return (
    <section
      className="team-one"
      style={{ background: "linear-gradient(to right, #0E222A, #247ba0)" }}
    >
      <div className="container">
        <div className="sec-title text-left">
          <h3 className="sec-title__title bw-split-in-up text-white">
            Our Mission <span> & Vision</span>
          </h3>

          <h4 className="tailored-subtitle font-Merriweather text-white mt-2">
            Guided by purpose, driven by excellence
          </h4>
          {/* <p className="why-choose-four__item__text text-white custom-max-width2">
        Homestead Experts partners with attorneys, law firms, and insurance organizations that rely on credible, courtroom-ready expert witnesses to support litigation and claims. Whether you’re building a complex medical malpractice case or reviewing an accident reconstruction, our team connects you with specialists who bring clarity, credibility, and experience to every matter.
                    </p> */}
        </div>

        <div className="row gutter-y-30">
          {items.map((item, index) => (
            <a
              href="#"
              // onClick={(e) => e.preventDefault()}
              key={index}
              className="col-12 col-lg-6 col-md-6 wow fadeInUp pe-none"
              data-wow-delay={`${index * 100}ms`}
            >
              <div
                className="service-details__item text-white service-support"
                style={{ height: "100%", alignItems: "start" }}
              >
                <div className="service-details__item__content">
                  {/* <div
                                        className="number-badge"
                                        style={{
                                            fontSize: "28px",
                                            fontWeight: "700",
                                            color: "#247BA0",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {item.number}
                                    </div> */}
                  <h4 className="service-details__item__title text-white service-support-text">
                    {item.title}
                  </h4>

                  <p className="service-details__item__text text-white mt-3">
                    {item.text}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
