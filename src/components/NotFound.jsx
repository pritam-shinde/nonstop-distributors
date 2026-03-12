import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section
        className="error-404"
        style={{ backgroundColor: "#0E222A", height: "800px" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1 className="error-404__title text-white">Oops! Page not found</h1>
          <p className="error-404__text text-white" style={{ maxWidth: 720 }}>
            The page you’re looking for may have been moved, renamed, or no
            longer exists. Use the links below to get back on track.
          </p>
          <div className="error-404__btns d-flex flex-wrap gap-3">
            <Link href="/" className="procounsel-btn text-white">
              <i>Back To Home</i>
              <span>Back To Home</span>
            </Link>
            <Link href="/services/" className="procounsel-btn text-white">
              <i>View Services</i>
              <span>View Services</span>
            </Link>
            <Link href="/contact-us/" className="procounsel-btn text-white">
              <i>Contact Us</i>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
