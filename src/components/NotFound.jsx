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
          {/* <div
            className="error-404__image wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <img src="/assets/images/shapes/error-404-shape.png" alt="404" />
          </div> */}
          <h3 className="error-404__title text-white">Oops! Page not found</h3>
          <p className="error-404__text text-white" style={{ maxWidth: 720 }}>
            The page you’re looking for may have been moved, renamed, or no
            longer exists. Use the links below to get back on track.
          </p>
          <div className="error-404__btns d-flex flex-wrap gap-3">
            <a href="/" className="procounsel-btn text-white">
              <i>Back To Home</i>
              <span>Back To Home</span>
            </a>
            <a href="/services/" className="procounsel-btn text-white">
              <i>View Services</i>
              <span>View Services</span>
            </a>
            <a href="/contact-us/" className="procounsel-btn text-white">
              <i>Contact Us</i>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
