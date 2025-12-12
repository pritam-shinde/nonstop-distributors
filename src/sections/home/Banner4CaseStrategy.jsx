import { strategySteps } from "@/constants/strategySteps";
import Image from "next/image";

const Banner4CaseStrategy = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#0E222A",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
        // className="case-strategy"
      >
        {/* <div className="container-fluid case-strategy-container"> */}
        <div className="container">
          <div>
            <h3 className="sec-title__title mb-2 text-white">
              End-to-End Support for <br className="d-none d-lg-inline" /> Your
              Case Strategy
            </h3>
            <h5
              style={{ color: "#fff", fontWeight: "400", marginBottom: "20px" }}
              className="mt-2 font-Merriweather"
            >
              Streamlined Case Management That Keeps You Moving Forward
            </h5>

            <div>
              <p className="about-one__content__text">
                From expert selection to courtroom support, Homestead is built
                to serve your firm at <br className="d-none d-lg-inline" />{" "}
                every stage. We don’t just match you with a qualified expert, we
                manage the process <br className="d-none d-lg-inline" /> with
                precision, insight, and discretion.
              </p>
              <p className="about-one__content__text">
                Our team goes beyond static directories, actively sourcing the
                right experts, handling <br className="d-none d-lg-inline" />{" "}
                coordination, and ensuring every detail is buttoned up so you
                can stay focused on <br className="d-none d-lg-inline" />{" "}
                winning the case, not chasing down logistics.
              </p>

              <div
                className="row"
                // style={{ maxWidth: "680px", width: "100%" }}
              >
                {strategySteps.map((step, index) => (
                  <div className="col-12 col-md-12 mt-4 pe-0" key={index}>
                    <div
                      className="case-strategy-cards"
                      style={{ display: "flex", gap: "30px" }}
                    >
                      <div
                        className="case-strategy-icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "8px",
                          marginTop: "6px",
                        }}
                      >
                        <img
                          src={step.img}
                          alt={step.alt}
                          width="80"
                          height="80"
                        />
                      </div>
                      <div>
                        <h5
                          style={{
                            fontWeight: "600",
                            fontSize: "clamp(18px,4vw,22px)",
                            lineHeight: "26px",
                            marginBottom: "10px",
                            color: "#fff",
                          }}
                        >
                          {step.title}
                        </h5>
                        <p
                          style={{
                            fontWeight: 400,
                            marginBottom:
                              strategySteps.length - 1 === index
                                ? "0px !important"
                                : "20px !important",
                          }}
                          className="about-one__content__text"
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-12 col-lg-5 d-none d-md-block" style={{border:"1px solid red",position:"absolute", bottom:0, right:0,height:"100%", width:"100%",
              backgroundImage: "url('/assets/images/backgrounds/bg-support.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "left",
            }}></div> */}
        {/* <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            // top: "10%",
            bottom:"60px",
            right: "-15%", // push image half outside container
            width: "55%", // cover right half + a bit more
            // height: "80%",
            backgroundImage: "url('/assets/images/backgrounds/bg-support.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            // borderRadius: "0 0 0 200px", // optional curved effect
          }}
        ></div> */}

        {/* <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            // top: "10%",
            bottom: "60px",
            right: "-15%", // push image half outside container
            width: "55%", // cover right half + a bit more
            // height: "80%",
            backgroundImage: "url('/assets/images/backgrounds/bg-support.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            // borderRadius: "0 0 0 200px", // optional curved effect
          }}
        > */}
        <Image
          className="home-support-section-image"
          src="/assets/images/backgrounds/bg-support.png"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
            overflow: "hidden",
            maxWidth: "740px",
            maxHeight: "90%",
            top: "unset",
            left: "unset",
            right: "-10%",
            bottom: "60px",
          }}
          alt="about-background"
        />
        {/* </div> */}
      </section>

      {/* <div style={{ height: "60px", background: "#0E222A" }} /> */}
    </>
  );
};

export default Banner4CaseStrategy;
