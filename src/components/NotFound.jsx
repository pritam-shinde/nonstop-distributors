const NotFound = () => {
  return (
    <>
      <section className="error-404" style={{ backgroundColor: "#0E222A" }}>
        <div className="container">
          <div
            className="error-404__image wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <img src="/assets/images/shapes/error-404-shape.png" alt="404" />
          </div>
          <h3 className="error-404__title text-white">Oops! Page not Found</h3>
          <p className="error-404__text text-white">
            The page you are looking for is not exist.
          </p>
          <div className="error-404__btns ">
            <a href="/" className="procounsel-btn text-white">
              <i>Back To Home</i>
              <span>Back To Home</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
