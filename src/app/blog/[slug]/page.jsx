import ScriptsLoader from "@/components/ScriptsLoader";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import Link from "next/link";
// import "@/app/blog.css";
import {
  getStaticLatestPosts,
  getStaticPostBySlug,
  STATIC_BLOG_POSTS,
} from "../staticPosts";
const BASE_URL = "https://www.nonstopdistributors.com";

export function generateStaticParams() {
  return STATIC_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getStaticPostBySlug(slug);

  if (post) {
    const title = post.metaTitle || post.title || "";
    const description = post.metaDescription || post.excerpt || "";

    return {
      title,
      description,
      alternates: {
        canonical: `${BASE_URL}/blog/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {};
}

function cleanContent(html) {
  if (!html) return "";

  // Remove Divi Builder Shortcodes
  html = html.replace(/\[\/?et_pb[^\]]*\]/g, "");

  // Clean extra shortcodes
  html = html.replace(/\[[^\]]*\]/g, "");

  // Remove empty paragraph tags
  html = html.replace(/<p>\s*<\/p>/g, "");

  return html;
}

// function formatToDayMon(input) {
//   if (!input && input !== 0) return { day: "", month: "" };

//   const date = input instanceof Date ? input : new Date(input);
//   if (Number.isNaN(date.getTime())) return { day: "", month: "" };

//   const day = String(date.getDate()).padStart(2, "0");
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const mon = months[date.getMonth()];

//   return { day, month: mon };
// }

function formatToDayMon(input) {
  if (!input && input !== 0) return { day: "", month: "", year: "" };

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return { day: "", month: "", year: "" };

  const day = String(date.getDate()).padStart(2, "0");

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const month = months[date.getMonth()];
  const year = date.getFullYear(); 

  return { day, month, year };
}

const SingleBlogPage = async ({ params }) => {
  const { slug } = await params;
  const post = getStaticPostBySlug(slug);

  if (!post) {
    const latestPosts = getStaticLatestPosts(null);

    return (
      <>
        <section className="section-color">
          <div className="container single-blog text-white">
            <div className="row gutter-y-60">
              <div className="col-lg-8">
                <div className="blog-details__wrapper">
                  <h1 className="blog-details__title text-white custom-heading-all mb-1">
                    Post not found
                  </h1>
                  <p className="text-white" style={{ opacity: 0.85 }}>
                    We couldn&apos;t find{" "}
                    <span className="fw-bold">{String(slug || "")}</span>. Try a
                    recent post below or go back to the blog.
                  </p>
                  <div className="blog-details__post-meta mt-4">
                    <div className="blog-details__posts">
                      <p className="custom-heading-all blog-details__posts__title text-white">
                        Explore :
                      </p>
                      <div className="sidebar__posts flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                        <Link href="/blog/">All Posts</Link>
                        <Link href="/services/">Our Services</Link>
                        <Link href="/contact-us/#contact-service">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <aside className="widget-area">
                    {latestPosts.length > 0 && (
                      <div
                        className="sidebar__single"
                        style={{ backgroundColor: "#1a3a47" }}
                      >
                        <h2
                          className="custom-heading-all sidebar__title"
                          style={{ color: "#fff", borderBottomColor: "#fb3640" }}
                        >
                          Latest Posts
                        </h2>
                        <ul className="sidebar__posts list-unstyled">
                          {latestPosts.map((p, i) => {
                            const { day: pDay, month: pMon, year: pYear } =
                              formatToDayMon(p.date);
                            const isLast = i === latestPosts.length - 1;
                            return (
                              <li
                                key={p.slug}
                                className="sidebar__posts__item"
                                style={
                                  !isLast ? { borderBottomColor: "#2a4a57" } : {}
                                }
                              >
                                <div className="sidebar__posts__image">
                                  <Image
                                    src={p.featured_image}
                                    alt={p.title}
                                    width={70}
                                    height={70}
                                    style={{
                                      objectFit: "cover",
                                      width: "70px",
                                      height: "70px",
                                    }}
                                  />
                                </div>
                                <div className="sidebar__posts__content">
                                  <p className="sidebar__posts__meta text-white">
                                    <i className="far fa-clock"></i> {pDay}{" "}
                                    {pMon} {pYear}
                                  </p>
                                  <h3
                                    className="custom-heading-all sidebar__posts__title truncate-2-lines"
                                    style={{ color: "#fff" }}
                                  >
                                    <Link
                                      href={`/blog/${p.slug}/`}
                                      style={{ color: "#fff" }}
                                    >
                                      {p.title}
                                    </Link>
                                  </h3>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScriptsLoader />
      </>
    );
  }

  const title = post.title || "";
  const content = cleanContent(post.content || "");
  const { day, month } = formatToDayMon(post.date);
  const latestPosts = getStaticLatestPosts(slug);

  return (
    <>
      {/* Blog Content */}
      <section className="section-color">
        <div className="container single-blog text-white">
          <div className="row gutter-y-60">

            {/* Main Article */}
            <div className="col-lg-8">
              <div className="blog-details__wrapper">
                <h1 className="blog-details__title text-white custom-heading-all mb-1">{title}</h1>

                  <ul className="list-unstyled blog-details__meta mb-3">
                    <li className="text-white">
                      <i className="icon-user"></i> 
                      <span className="text-white">By {post.author || "NONSTOP Distributors"}</span>
                    </li>
                    <li className="bg-white"></li>
                    <li className="text-white">
                      <i className="icon-bubble-chat-1"></i>Distribution Insights
                    </li>
                  </ul>

                <div className="blog-details__image">
                  <Image
                    src={post.featured_image}
                    alt={post.featured_image_alt || title}
                    width={770}
                    height={449}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                  <div className="blog-details__date">
                    <p className="fw-bold fs-3 mb-0" style={{lineHeight:"34px"}}>{day}</p><span>{month}</span>
                    {/* <h4>{day}</h4><span>{month}</span> */}
                  </div>
                </div>

                <div className="blog-details__content">
                  <div dangerouslySetInnerHTML={{ __html: content }} />

                  <div className="blog-details__post-meta mt-4">
                    <div className="blog-details__posts">
                      <p className="custom-heading-all blog-details__posts__title text-white">Explore : </p>
                      <div className="sidebar__posts flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                        <Link href="/blog/">All Posts</Link>
                        <Link href="/services/">Our Services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget-area">

                  {/* Latest Posts */}
                  {latestPosts.length > 0 && (
                    <div className="sidebar__single" style={{ backgroundColor: "#1a3a47" }}>
                      <h2 className="custom-heading-all sidebar__title" style={{ color: "#fff", borderBottomColor: "#fb3640" }}>Latest Posts</h2>
                      <ul className="sidebar__posts list-unstyled">
                        {latestPosts.map((p, i) => {
                          const { day: pDay, month: pMon, year: pYear } = formatToDayMon(p.date);
                          const isLast = i === latestPosts.length - 1;
                          return (
                            <li
                              key={p.slug}
                              className="sidebar__posts__item"
                              style={!isLast ? { borderBottomColor: "#2a4a57" } : {}}
                            >
                              <div className="sidebar__posts__image">
                                <Image
                                  src={p.featured_image}
                                  alt={p.title}
                                  width={70}
                                  height={70}
                                  style={{ objectFit: "cover", width: "70px", height: "70px" }}
                                />
                              </div>
                              <div className="sidebar__posts__content">
                                <p className="sidebar__posts__meta text-white" >
                                  <i className="far fa-clock"></i> {pDay} {pMon} {pYear}
                                </p>
                                <h3 className="custom-heading-all sidebar__posts__title truncate-2-lines" style={{ color: "#fff" }}>
                                  <Link href={`/blog/${p.slug}/`} style={{ color: "#fff" }}>{p.title}</Link>
                                </h3>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="sidebar__single" style={{ backgroundColor: "#1a3a47" }}>
                    <h2 className="custom-heading-all sidebar__title" style={{ color: "#fff", borderBottomColor: "#fb3640" }}>Need Distribution Support?</h2>
                    <p style={{ color: "#ccc", fontSize: "14px", marginBottom: "20px" }}>
                      Talk to our team about retail coverage, logistics, and fulfilment. We help FMCG brands improve availability and visibility across channels.
                    </p>
                    <Link href="/contact-us/#contact-service" className="procounsel-btn" style={{ fontSize: "14px" }}>
                      <i>Contact Us</i>
                      <span>Contact Us</span>
                    </Link>
                  </div>

                </aside>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {post.faqData && post.faqData.length > 0 && (
        <FAQSection faqData={post.faqData} title="FAQ" />
      )}

      <ScriptsLoader />
    </>
  );
};

export default SingleBlogPage;

