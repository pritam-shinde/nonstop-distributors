import BlogSkeleton from "@/components/BlogSkeleton";
import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";
import { Suspense } from "react";

function getFormattedDate(inputDate) {
  const date = inputDate ? new Date(inputDate) : new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = String(date.getFullYear());

  return { day, month, year };
}

const MainBlogSection = async ({ searchParams }) => {
  const queryParams = await searchParams;
  let fetchedData;

  try {
    const url = `${process.env.SERVER_BASE_URL}/posts?page=${queryParams.page}`;
    const response = await fetch(url, { cache: "no-store" });

    fetchedData = await response.json();
  } catch (error) {}

  const { data, total_page, page } = fetchedData || {};

  return (
    <>
      {/* banner */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage:
              "url('/assets/distributor-img/blog-page-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top  center",
            backgroundRepeat: "no-repeat",
            height: "800px",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <h1 className="">
              Insights That Strengthen
              <br />
              <span style={{ color: "#fb3640" }}>Your Case Strategy</span>
            </h1>

            <p style={{ marginBottom: "0px" }}>
              Expert guidance, practical takeaways, and perspectives from the
              intersection of law, medicine, and expert witness practice.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>
              The Homestead Blog is where attorneys, legal teams, and
              professionals gain a deeper understanding of expert witness
              strategy and case preparation. Each article is built on real-world
              experience, from sourcing the right expert to managing complex
              litigation timelines, helping you stay informed, prepared, and
              confident at every stage of your case.
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
          <Suspense fallback={<BlogSkeleton />}>
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
                        className="blog-card wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="00ms"
                      >
                        <div className="blog-card__content">
                          <h3 className="blog-card__title">
                            <a
                              href={`/blog/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title,
                              }}
                              className="truncate-2-lines"
                            />
                          </h3>
                        </div>

                        <div className="blog-card__image">
                          <div className="blog-card__image__inner">
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              style={{ minHeight: "240px" }}
                            />
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              style={{ minHeight: "240px" }}
                            />
                            <a
                              href={`/blog/${post.slug}`}
                              className="blog-card__image__link"
                            >
                              <span
                                className="sr-only"
                                dangerouslySetInnerHTML={{
                                  __html: post.title,
                                }}
                              />
                            </a>
                          </div>

                          <div className="blog-card__date">
                            <span>{date.day}</span>
                            {date.month}
                          </div>
                        </div>

                        <ul className="list-unstyled blog-card__meta ">
                          <li className="w-100 border-0 text-white">
                            <a href={`/blog/${post.slug}`}>Read More</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Suspense>
        </div>
      </section>

      {/* contact */}
      {/* <section className="contact-one" id="contact-service">
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
                    <span className="text-white"> Ready to Find the</span>{" "}
                    <br />
                    <span>Right Expert for Your Case?</span>
                  </h2>

                  <p className="contact-one__info__text text-white">
                    Turn insight into action. Whether you need a medical
                    specialist, technical expert, or financial professional, our
                    team will help you find the right fit quickly and
                    confidently. No subscriptions, no upfront fees, and a free
                    consultation before you commit.
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
      </section> */}
      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default MainBlogSection;
