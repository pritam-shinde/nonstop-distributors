"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const Banner8Contact = () => {
  const captchaRef = useRef(null);
  const router = useRouter();

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    const _fullname = form.fullname.trim();
    if (!_fullname) {
      newErrors.fullname = "Full name is required";
    } else if (_fullname.length < 4) {
      newErrors.fullname = "Full name must be at least 4 characters";
    } else if (_fullname.length > 40) {
      newErrors.fullname = "Full name cannot exceed 40 characters";
    } else if (!/^(?!.*  )[a-zA-Z0-9 ]+$/.test(_fullname)) {
      newErrors.fullname =
        "Full name can only contain letters, digits, and single spaces";
    }

    const _companyName = form.companyname.trim();
    if (_companyName && _companyName.length < 8) {
      newErrors.companyname = "Company name must be at least 8 characters";
    } else if (_companyName && _companyName.length > 40) {
      newErrors.companyname = "Company name cannot exceed 40 characters";
    }

    const _email = form.email.trim();
    if (!_email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(_email)) {
      newErrors.email = "Enter a valid email";
    }

    const _phoneNumber = form.phonenumber.trim();
    if (!_phoneNumber) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(_phoneNumber)) {
      newErrors.phonenumber = "Phone number must be exactly 10 digits";
    }

    const allowedEnquiries = [
      "distribution",
      "bulk-order",
      "retail",
      "logistics",
      "support",
      "other",
    ];

    if (!form.enquiryType) {
      newErrors.enquiryType = "Please select enquiry type";
    } else if (!allowedEnquiries.includes(form.enquiryType)) {
      newErrors.enquiryType = "Invalid enquiry type";
    }

    const _subject = form.subject.trim();
    if (!_subject) {
      newErrors.subject = "Message is required";
    } else if (_subject.length < 8) {
      newErrors.subject = "Message must be at least 8 characters";
    } else if (_subject.length > 200) {
      newErrors.subject = "Message cannot exceed 200 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      captchaRef.current?.reset();
      setCaptchaToken(null);
      return;
    }

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
          fullname: form.fullname.trim(),
          companyname: form.companyname.trim(),
          email: form.email.trim(),
          phonenumber: form.phonenumber.trim(),
          enquiryType: form.enquiryType.trim(),
          subject: form.subject.trim(),
          token: captchaToken,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong. Try again.");
      }

      setForm({
        fullname: "",
        companyname: "",
        email: "",
        phonenumber: "",
        enquiryType: "",
        subject: "",
      });
      setErrors({});
      router.replace("/contact-us/thank-you");
      router.refresh();
    } catch (err) {
      setErrors({ submit: err?.message || "Something went wrong. Try again." });
    } finally {
      captchaRef.current?.reset();
      setCaptchaToken(null);
      setLoading(false);
    }
  };

  return (
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
                <form
                  className="form-one__group"
                  style={{ position: "relative", background: "white" }}
                  onSubmit={handleSubmit}
                >
                  <div className="form-one__control form-one__control--full">
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      placeholder="Full Name *"
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
                    {errors.companyname ? (
                      <small className="text-danger">
                        {errors.companyname}
                      </small>
                    ) : null}
                  </div>

                  <div className="form-one__control form-one__control--full">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email *"
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
                      placeholder="Phone Number *"
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
                        Type of Enquiry *
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

                    <span className="dropdown-arrow">&#9660;</span>
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
                      placeholder="Enter your subject or message here *"
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
                      type="submit"
                      className="procounsel-btn text-uppercase"
                      disabled={loading || !captchaToken}
                      style={{
                        cursor:
                          loading || !captchaToken ? "not-allowed" : "pointer",
                      }}
                    >
                      <i>{loading ? "Sending..." : "Send Message"}</i>
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                    </button>
                  </div>
                </form>
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
  );
};

export default Banner8Contact;
