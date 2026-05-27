import Image from "next/image";
import { LinkedinIcon } from "@/components/icons/Social";

export default function BlogAuthorSection({ author, image, title, link, bio }) {
  if (!author && !bio) {
    return null;
  }

  return (
    <section className="blog-author section-color pb-5" style={{ background: "#0E222A" }}>
      <div className="container">
        <div
          className="blog-author-card"
          style={{
            backgroundColor: "#112a34",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "30px",
            padding: "30px",

          }}
        >
          <div className="row align-items-start g-4">
            <div className="col-auto">
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(255, 255, 255, 0.14)",
                }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={author || "Author"}
                    width={110}
                    height={110}
                    style={{ objectFit: "cover", width: "110px", height: "110px" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "110px",
                      height: "110px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                  >
                    {author ? author.charAt(0) : "A"}
                  </div>
                )}
              </div>
            </div>

            <div className="col">
              <p className="custom-heading-all text-white mb-1 fs-3">{author || "Author"}</p>
              {title && (
                <p className="text-secondary mb-2" style={{ opacity: 0.85 }}>
                  {title}
                </p>
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-flex align-items-center gap-2 text-white"
                  style={{ textDecoration: "none", opacity: 0.9 }}
                >
                  <LinkedinIcon />
                  <span className="fw-semibold" style={{ fontSize: "14px" }}>
                    LinkedIn
                  </span>
                </a>
              )}

              {bio && (
                <p
                  className="mt-3 text-white"
                  style={{ opacity: 0.85, maxWidth: "760px", lineHeight: 1.9 }}
                >
                  {bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
