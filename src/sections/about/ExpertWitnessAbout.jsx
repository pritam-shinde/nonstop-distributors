export const ExpertWitnessAbout = () => {
  const items = [
    {
      number: "01",
      href: "/medical-malpractice/",
      title: "Medical Malpractice",
      text: `Access board-certified physicians, nurses, and healthcare specialists across key areas of medicine including orthopedics, neurology, cardiology, emergency care, and life-care planning. Our experts review records, assess standards of care, and provide clear, defensible testimony that helps your firm present complex medical issues with accuracy, insight, and credibility`,
    },
    {
      number: "02",
      href: "/product-liability/",
      title: "Product Liability",
      text: `Connect with engineers and scientists experienced in:
      product design, mechanical and electrical systems, materials analysis, manufacturing defects, and failure reconstruction.
      We help your firm identify and explain the technical factors behind product-related claims with precision and clarity.`,
    },
    {
      number: "03",
      href: "/personal-injury/",
      title: "Personal Injury",
      text: `Partner with professionals who can evaluate cause, impact, and damages, including:
      accident reconstructionists, biomechanical engineers, rehabilitation specialists, economists, and safety experts.
      Their findings help quantify damages and support your client’s claim with defensible data.`,
    },
    {
      number: "04",
      href: "/forensic/",
      title: "Forensic Experts",
      text: `Engage specialists in:
      digital forensics, toxicology, pathology, accounting, and document analysis.
      From data recovery to evidence interpretation, our forensic experts provide clarity in complex or high-stakes investigations.`,
    },
  ];

  return (
    <section className="team-one" style={{ background: "#0E222A" }}>
      <div className="container">
        <div className="sec-title text-left">
          <h3 className="sec-title__title bw-split-in-up text-white">
            Expert Witnesses Across Every <br /> <span>Major Discipline</span>
          </h3>
          <p className="why-choose-four__item__text text-white custom-max-width2">
            Homestead Experts partners with attorneys, law firms, and insurance
            organizations that rely on credible, courtroom-ready expert
            witnesses to support litigation and claims. Whether you’re building
            a complex medical malpractice case or reviewing an accident
            reconstruction, our team connects you with specialists who bring
            clarity, credibility, and experience to every matter.
          </p>
        </div>
                  {/* <a  className="text-white hover-btn-experts text-decoration-none"> */}

        <div className="row gutter-y-30">
          {items.map((item, index) => (
            <a href={item.href}
              key={index}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${index * 100}ms`}
            >
              <div
                className="service-details__item text-white service-support"
                style={{ height: "100%", alignItems: "start" }}
              >
                <div className="service-details__item__content">
                    <div
                      className="number-badge"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#247BA0",
                        marginBottom: "10px",
                      }}
                    >
                      {item.number}
                    </div>
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
