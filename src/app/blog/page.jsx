import ContactFormHubspot from "@/components/forms/ContactFormHubspot";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import Image from "next/image";
import { STATIC_BLOG_POSTS } from "./staticPosts";

export const generateMetadata = () => {
  return handlerMetaDetails("blog");
};

function getFormattedDate(inputDate) {
  const date = inputDate ? new Date(inputDate) : new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = String(date.getFullYear());

  return { day, month, year };
}

const MainBlogSection = () => {
  const data = STATIC_BLOG_POSTS.slice().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('/assets/distributor-img/blog-page-banner.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <h1 className="">
              Insights That Power
              <br />
              <span style={{ color: "#fb3640" }}>FMCG Growth</span>
            </h1>

            <p style={{ marginBottom: "0px" }}>
              Practical perspectives on distribution, retail coverage, and
              supply chain execution - built for brands and retailers across
              India.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>
              The NONSTOP Distributors Blog shares playbooks and lessons from
              everyday FMCG operations - from improving availability and
              visibility to planning routes, inventory discipline, and
              multi-channel expansion.
            </p>

            <div>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                <a
                  href="#blog-0"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Explore the Latest Articles</i>
                  <span className="">Explore the Latest Articles</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-three section-color">
        <div className="container">
          <div className="row gutter-y-30">
            {data?.map((post, index) => {
              const date = getFormattedDate(post.date);
              return (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6"
                  id={`blog-${index}`}
                >
                  <div
                    className="blog-card wow fadeInUp h-100 d-flex flex-column"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                  >
                    <div className="blog-card__content" style={{ flex: 1 }}>
                      <h2 className="blog-card__title custom-heading-all">
                        <a
                          href={`/blog/${post.slug}/`}
                          className="truncate-2-lines"
                        >
                          {post.title}
                        </a>
                      </h2>
                    </div>

                    <div
                      className="blog-card__image"
                      style={{ display: "flex", alignItems: "end" }}
                    >
                      <div
                        className="blog-card__image__inner w-100"
                        style={{ height: "270px" }}
                      >
                        <Image
                          src={post.featured_image}
                          alt={post.featured_image_alt || post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                          quality={90}
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                          quality={90}
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                        <a
                          href={`/blog/${post.slug}/`}
                          className="blog-card__image__link"
                        >
                          <span className="sr-only">{post.title}</span>
                        </a>
                      </div>

                      <div className="blog-card__date">
                        <span>{date.day}</span>
                        {date.month}
                      </div>
                    </div>

                    <ul className="list-unstyled blog-card__meta ">
                      <li className="w-100 border-0 text-white">
                        <a href={`/blog/${post.slug}/`}>Read More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
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
                  <h2 className="sec-title__title bw-split-in-up">
                    <span className="text-white"> Ready to Scale</span>{" "}
                    <br />
                    <span>Your Distribution?</span>
                  </h2>
                  <h3 className="contact-one__info__text text-white fs-5 fw-bold custom-heading-h3">
                    From onboarding and planning to retail execution and
                    fulfilment, we help FMCG brands build stronger reach,
                    visibility, and velocity across channels.
                  </h3>
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
                              href="tel:8956641833"
                              aria-label="Call us at 89566 41833"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            >
                              89566 41833
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
                          Wardha Rd, near Bhawan&apos;s School,
                          <br /> Nagpur, Maharashtra 440005
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
                          href="mailto:info@nonstopdistributors.com"
                          className="text-white"
                        >
                          <p
                            className="contact-one__info__text text-white"
                            style={{ fontSize: "14px" }}
                          >
                            info@nonstopdistributors.com
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
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
              </div> */}
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="contact-one__form__bg-one"></div>
                <div className="contact-one__form__bg-two"></div>
                <ContactFormHubspot />
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

      <ScriptsLoader />
    </>
  );
};

export default MainBlogSection;
