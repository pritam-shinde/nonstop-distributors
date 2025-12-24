const Banner8Contact = () => {
  return (
    <>
      <section className="contact-one" id="contact-service">
        <div className="tailored-redline-new" />
        <div className="container">
          <div className="contact-one__wrapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="sec-title text-left">
                  <h3 className="sec-title__title bw-split-in-up">
                    <span className="text-white">Contact </span>{" "}
                    <span> Information</span>
                  </h3>

                  <p
                    className="contact-one__info__text text-white font-Merriweather"
                    style={{ fontSize: "clamp(18px,3vw,20px)" }}
                  >
                    Just a few details will get us started.
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
                              href="tel:89564 15939"
                              aria-label="Call us at 89564 15939"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            >
                              89564 15939
                            </a>
                          </p>
                          {/* <p className="main-footer__info__text">
                            <a
                              href="tel:7327438003"
                              aria-label="Call us at +21 9555-0114"
                              className="text-white"
                              style={{ fontSize: "14px" }}
                            >
                              (732) 743-8003
                            </a>
                          </p> */}
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
                      {/* <div className="contact-one__info__content">
                        <p
                          className="contact-one__info__text text-white"
                          style={{ fontSize: "14px" }}
                        >
                          NONSTOP Distributors, Chinchbhavan, 97 Crown Society, Wardha Rd, 
                          <br /> opposite Bhawan's School, Nagpur, Maharashtra 440037
                        </p>
                      </div> */}
                    </li>
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-glove"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-glove"></i>
                        </span>
                      </div>
                      {/* <div className="contact-one__info__content">
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
                      </div> */}
                      <div className="contact-one__info__content">
                        <p
                          className="contact-one__info__text text-white"
                          style={{ fontSize: "14px" }}
                        >
                          NONSTOP Distributors, Chinchbhavan, 97 Crown Society,{" "}
                          <br /> Wardha Rd, opposite Bhawan's School, <br />{" "}
                          Nagpur, Maharashtra 440037
                        </p>
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
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="companyname"
                        type="text"
                        name="companyname"
                        placeholder="Company Name"
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
                        id="phone-number"
                        type="text"
                        name="phonenumber"
                        placeholder="phone number"
                      />
                    </div>

                    <div
                      className="form-one__control form-one__control--full mt-2"
                      style={{ position: "relative" }}
                    >
                      <select
                        id="enquiry-type"
                        name="enquiryType"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Type of Enquiry
                        </option>
                        <option value="distribution">
                          Distribution Partnership
                        </option>
                        <option value="bulk-order">Bulk Order</option>
                        <option value="retail">Retail Supply</option>
                        <option value="logistics">Logistics Support</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>

                      <span className="dropdown-arrow">▼</span>
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <textarea
                        id="subject"
                        name="subject"
                        className="form-one__textarea border rounded-3 px-3"
                        placeholder="Enter your subject or message"
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <a href="#" className="procounsel-btn text-uppercase">
                        <i>Send Message</i>
                        <span>Send Message</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tailored-redline-new"
          style={{ rotate: "0deg", top: "unset", bottom: 0 }}
        />
      </section>
    </>
  );
};

export default Banner8Contact;
