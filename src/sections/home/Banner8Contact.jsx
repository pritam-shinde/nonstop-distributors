"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYouModal from "@/components/modals/ThankYouModal";

const Banner8Contact = () => {
  const captchaRef = useRef(null);

  const [form, setForm] = useState({
    fullname: "",
    companyname: "",
    email: "",
    phonenumber: "",
    enquiryType: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // ✅ Validation
  const validate = () => {
    const newErrors = {};

    if (!form.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number is required";
    }

    if (!form.enquiryType) {
      newErrors.enquiryType = "Please select enquiry type";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Message is required";
    }

    return newErrors;
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    setIsThankYouOpen(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (!captchaToken) {
      setErrors({ captcha: "Please verify captcha" });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          token: captchaToken,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong. Try again.");
      }

      // ✅ success
      setForm({
        fullname: "",
        companyname: "",
        email: "",
        phonenumber: "",
        enquiryType: "",
        subject: "",
      });

      setErrors({});

      setIsThankYouOpen(true);
    } catch (err) {
      setErrors({ submit: err?.message || "Something went wrong. Try again." });
    } finally {
      captchaRef.current?.reset();
      setCaptchaToken(null);

      setLoading(false);
    }
  };

  return (
    <>
      <ThankYouModal
        open={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />
      <section className="contact-one" id="contact-service">
        <div className="tailored-redline-new" />
        <div className="container">
          <div className="contact-one__wrapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat text-white">
                    <span className="text-white">Contact </span>
                    <span> Information</span>
                  </h2>
                  {/* <h3 className="why-choose-four__content__text tailored-subtitle font-Merriweather text-white mt-2 custom-heading-h3 fs-5 fw-bold mb-0"> </h3> */}
                  <h3
                    className="contact-one__info__text text-white font-Merriweather"
                    style={{ fontSize: "clamp(18px,3vw,20px)" }}
                  >
                    Just a few details will get us started.
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
                              href="tel:89566 41833"
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
                        <i
                          className="icon-mail"
                          style={{ fontSize: "14px" }}
                        ></i>
                        <span className="contact-one__info__icon__zoom">
                          <i
                            className="icon-mail"
                            style={{ fontSize: "14px" }}
                          ></i>
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
                    <li className="contact-one__info__item">
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
                          97 Crown Society, Chinchbhavan,
                          <br />
                          Wardha Rd, near Bhawan's School,
                          <br />
                          Nagpur, Maharashtra 440005
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="contact-one__form contact-form-validated form-one">
                  <div className="contact-one__form__bg-one"></div>
                  <div className="contact-one__form__bg-two"></div>
                  <div
                    className="form-one__group"
                    style={{ position: "relative", background: "white" }}
                  >
                    <div className="form-one__control form-one__control--full">
                      <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={form.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname ? (
                        <small className="text-danger">{errors.fullname}</small>
                      ) : null}
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="companyname"
                        type="text"
                        name="companyname"
                        placeholder="Company Name"
                        value={form.companyname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email ? (
                        <small className="text-danger">{errors.email}</small>
                      ) : null}
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="phone-number"
                        type="text"
                        name="phonenumber"
                        placeholder="phone number"
                        value={form.phonenumber}
                        onChange={handleChange}
                      />
                      {errors.phonenumber ? (
                        <small className="text-danger">
                          {errors.phonenumber}
                        </small>
                      ) : null}
                    </div>

                    <div
                      className="form-one__control form-one__control--full mt-2"
                      style={{ position: "relative" }}
                    >
                      <select
                        id="enquiry-type"
                        name="enquiryType"
                        value={form.enquiryType}
                        onChange={handleChange}
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
                      {errors.enquiryType ? (
                        <small className="text-danger d-block mt-1">
                          {errors.enquiryType}
                        </small>
                      ) : null}
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <textarea
                        id="subject"
                        name="subject"
                        className="form-one__textarea border rounded-3 px-3"
                        placeholder="Enter your subject or message"
                        rows={4}
                        required
                        value={form.subject}
                        onChange={handleChange}
                      ></textarea>
                      {errors.subject ? (
                        <small className="text-danger">{errors.subject}</small>
                      ) : null}
                    </div>

                    <div>
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        ref={captchaRef}
                        onChange={(token) => setCaptchaToken(token)}
                        onExpired={() => {
                          setCaptchaToken(null);
                          captchaRef.current?.reset();
                        }}
                        onErrored={() => {
                          setCaptchaToken(null);
                          captchaRef.current?.reset();
                        }}
                      />
                      {errors.captcha ? (
                        <p className="text-danger d-block mt-2">
                          {errors.captcha}
                        </p>
                      ) : null}
                    </div>

                    {errors.submit ? (
                      <small className="text-danger d-block mt-2">
                        {errors.submit}
                      </small>
                    ) : null}

                    <div className="form-one__control form-one__control--full">
                      <button
                        className="procounsel-btn text-uppercase"
                        disabled={loading ? true : false}
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
                        onClick={loading ? undefined : handleSubmit}
                      >
                        <i>{loading ? "Sending..." : "Send Message"}</i>
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                      </button>
                    </div>
                  </div>
                </div>
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
