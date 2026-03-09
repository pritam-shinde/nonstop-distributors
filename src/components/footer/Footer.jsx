import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "../icons/Social";

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <LinkedinIcon />, label: "LinkedIn" },
    { href: "#", icon: <XIcon />, label: "Twitter" },
    { href: "https://www.facebook.com/people/NonStop-Distributors/61584965491773/", icon: <FacebookIcon />, label: "Facebook" },
    { href: "https://www.instagram.com/nonstopdistributors/", icon: <InstagramIcon />, label: "Instagram" },
  ];

  return (
    <footer className="main-footer">
      <div
        className="main-footer__bg"
        style={{
          backgroundImage:
            "url('/assets/distributor-img/footer-istockphoto.jpg')",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ================= TOP ================= */}
      <div className="main-footer__top">
        <div className="container">
          <div className="row">
            {/* ===== Logo + About ===== */}
            <div className="col-xl-5 col-lg-5 col-md-6 col-12">
              <div className="footer-widget footer-widget--about">
                <a href="/" className="footer-widget__logo">
                  <Image
                    src="/assets/distributor-img/nonstop-distributor-light.png"
                    alt="Procounsel"
                    width={209}
                    height={73}
                  />
                </a>

                <p className="footer-widget__text mt-3">
                  India's leading FMCG distribution partner, connecting premium
                  consumer brands to every major sales channel across the
                  country.
                </p>

                {/* Social Icons */}
                <div className="footer-widget__social mt-4">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      aria-label={item.label}
                      className="mx-2"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-6 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget footer-widget--links">
                    <p className="footer-widget__title custom-heading-h3 fs-5 fw-bold">
                      Quick Links
                    </p>

                    <ul className="list-unstyled footer-widget__links">
                      {[
                        { label: "Home", href: "/" },
                        { label: "Our Services", href: "/services/" },
                        { label: "About Us", href: "/about-us/" },
                        { label: "Contact Us", href: "/contact-us/" },
                        { label: "Careers", href: "/careers/" },
                        { label: "Privacy Policy", href: "/privacy-policy/" },
                        {
                          label: "Terms & Conditions",
                          href: "/terms-and-conditions/",
                        },
                      ].map((link, idx) => (
                        <li key={idx}>
                          <a href={link.href} className=" text-white">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                  <div className="footer-widget footer-widget--contact">
                    <p className="footer-widget__title custom-heading-h3 fs-5 fw-bold">
                      Contact
                    </p>
                    <ul className="list-unstyled footer-widget__contact">
                      <li>
                        {/* <i className="pe-2 icon-pin"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-white">
                          Nagpur, Maharashtra, India
                        </span>
                      </li>
                      <li>
                        {/* <i className="pe-2 icon-telephone-call-1"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                        <a href="tel:+ 89566 41833">
                          <span className="text-white">89566 41833</span>
                        </a>
                      </li>
                      <li>
                        {/* <i className="pe-2 icon-mail"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                        <a href="mailto:info@nonstopdistributors.com">
                          <span className="text-white">
                            info@nonstopdistributors.com
                          </span>
                        </a>
                      </li>
                      <li>
                        {/* <i className="pe-2 icon-clock"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 6v6l4 2" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span className="text-white">
                          Mon - Sat: 10AM - 7PM
                        </span>
                      </li>
                    </ul>
                    <div>
                      <Image
                        src="/assets/distributor-img/dmca.png"
                        width={187}
                        height={60}
                        alt="DMCA"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner text-center">
            <p className="text-white mb-0">
              © {new Date().getFullYear()} <a href="/">NONSTOP Distributors</a>.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
