import BlogSkeleton from "@/components/BlogSkeleton";
import NewsLetter from "@/components/NewsLetter";
import ScriptsLoader from "@/components/ScriptsLoader";
import { handlerMetaDetails } from "@/constants/seo";
import { Suspense } from "react";

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

const MainBlogSection = async () => {
  let fetchedData = { data: [] };

  // Blog API listing is temporarily disabled.
  // Uncomment this block to re-enable posts rendering from API.
  // try {
  //   // Keep pagination stable even when `page` is missing from the URL.
  //   const currentPage = queryParams?.page ?? 1;
  //   const url = `${process.env.SERVER_BASE_URL}/posts?page=${currentPage}`;
  //   const response = await fetch(url, { cache: "no-store" });

  //   // Fail fast on non-2xx responses so the fallback UI can be shown.
  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch posts: ${response.status}`);
  //   }

  //   fetchedData = await response.json();
  // } catch (error) {
  //   // Keep the page renderable even when the API is unavailable.
  //   fetchedData = { data: [] };
  // }

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
            <p style={{ marginTop: "80px" }} className="mb-2 text-capitalize">
              OUR <span className="fw-bold read-more-btn"> BLOG</span>
            </p>
            <h1 className="">
              Insights that power smarter
              <br />
              <span style={{ color: "#fb3640" }}>FMCG distribution</span>
            </h1>

            <p style={{ marginBottom: "0px" }}>
              Market trends, channel strategies, and practical ideas to help
              your brand grow faster across modern and general trade.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>
              The NONSTOP Distributors blog shares real-world learnings from
              FMCG distribution, including retail expansion, supply chain
              planning, merchandising, and e-commerce execution. Explore
              actionable content built to support better decisions and stronger
              market presence.
            </p>

            <div>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 gap-md-4">
                <a
                  href="#blog-0"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>Explore Latest Articles</i>
                  <span className="">Explore Latest Articles</span>
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
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((post, index) => {
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
                  })
                ) : (
                  <div className="col-12 text-center text-white py-5">
                    <h3 className="mb-0 text-white fs-2">Coming soon !</h3>
                  </div>
                )}
              </div>
            </div>
          </Suspense>
        </div>
      </section>

      <NewsLetter />

      <ScriptsLoader />
    </>
  );
};

export default MainBlogSection;
