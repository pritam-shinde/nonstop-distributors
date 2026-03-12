import ScriptsLoader from "@/components/ScriptsLoader";
import Head from "next/head";
import { notFound } from "next/navigation";

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

function formatToDayMonYear(input) {
  if (!input && input !== 0) return "";

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0"); // "01", "02", ...
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mon = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${mon}, ${year}`;
}

const SingleBlogPage = async ({ params }) => {
  const slug = (await params).slug;
  let post;

  try {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/posts/${slug}`, {
      cache: "no-store",
    });

    const { data } = await res.json();
    post = data;
  } catch (error) {}

  if (!post) {
    return notFound();
  }

  const content = cleanContent(post.content.rendered);

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
        />
      </Head>

      <section className="section-color">
        <div className="container single-blog text-white">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="text-white">
            Published At{" "}
            <strong className="text-danger">
              {formatToDayMonYear(post.date)}
            </strong>
          </p>

          <img
            src={
              post.featured_image ||
              "/assets/images/backgrounds/logos-why-choose-bg.jpg"
            }
            alt={post.title.rendered}
            className="my-4"
            style={{
              aspectRatio: "16/9",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>

      <ScriptsLoader />
    </>
  );
};

export default SingleBlogPage;
