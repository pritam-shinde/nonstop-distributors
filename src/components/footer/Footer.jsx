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
    { href: "#", icon: <FacebookIcon />, label: "Facebook" },
    { href: "#", icon: <InstagramIcon />, label: "Instagram" },
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
                  {/* <Image
                    src="/assets/distributor-img/nonstop-distributor-dark.png"
                    // src="/assets/images/logos/homestead-experts-logo-light.png"
                    width={200}
                    height={45}
                    alt="Nonstop Distributors"
                  /> */}
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
                    <h3 className="footer-widget__title">Quick Links</h3>

                    <ul className="list-unstyled footer-widget__links">
                      {[
                        { label: "Home", href: "/" },
                        { label: "Our Services", href: "/services/" },
                        { label: "About Us", href: "/about-us/" },
                        { label: "Contact Us", href: "/contact-us/" },
                        { label: "Careers", href: "/careers/" },
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
                    <h3 className="footer-widget__title">Contact</h3>
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
                        <a href="tel:+ 89564 15939">
                          <span className="text-white">89564 15939</span>
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
                        <span className="text-white">Mon - Sat: 9AM - 6PM</span>
                      </li>
                    </ul>
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

// import Image from "next/image";

// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Quick Links",
//       delay: "100ms",
//       links: [
//         { label: "About Us", href: "/about-us/" },
//         { label: "Contact Us", href: "/contact-us/" },
//         { label: "Pricing", href: "/pricing/" },
//         { label: "Blog", href: "/blog/" },
//       ],
//     },
//     {
//       title: "Services",
//       href: "/services/",
//       delay: "200ms",
//       links: [
//         { label: "Expert Witness", href: "/expert-witness/" },
//         { label: "Nurse Services", href: "/nurse-services/" },
//         {
//           label: "Background Checks",
//           href: "/expert-witness-profile-challenge-study/",
//         },
//         // { label: "Lorem ipsum", href: "#" },
//       ],
//     },
//     {
//       title: "Experts",
//       href: "/experts/",
//       delay: "100ms",
//       links: [
//         { label: "Medical Malpractice", href: "/medical-malpractice/" },
//         { label: "Product Liability", href: "/product-liability/" },
//         { label: "Personal Injury", href: "/personal-injury/" },
//         { label: "Forensic", href: "/forensic/" },
//       ],
//     },

//   ];

//   const contactSection = {
//   title: "Contact",
//   delay: "100ms",
//   items: [
//     {
//       icon: "icon-pin",
//       type: "text",
//       value: (
//         <>
//           Mumbai, Maharashtra,<br />
//           India
//         </>
//       ),
//     },
//     {
//       icon: "icon-telephone-call-1",
//       type: "link",
//       href: "tel:+912212345678",
//       value: "+91 22 1234 5678",
//     },
//     {
//       icon: "icon-mail",
//       type: "link",
//       href: "mailto:info@nonstopdistributors.com",
//       value: "info@nonstopdistributors.com",
//     },
//     {
//       icon: "icon-clock",
//       type: "text",
//       value: "Mon - Sat: 9AM - 6PM",
//     },
//   ],
// };

//   const contactInfo = [
//     {
//       icon: "icon-telephone-call-1",
//       content: (
//         <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703">
//           (877) 244-3703
//         </a>
//       ),
//     },
//     {
//       icon: "icon-mail",
//       content: (
//         <a href="mailto:info@homesteadexperts.com">info@homesteadexperts.com</a>
//       ),
//     },
//   ];

//   const socialLinks = [
//     { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
//     {
//       href: "https://pinterest.com",
//       icon: "icon-pinterest",
//       label: "Pinterest",
//     },
//     { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
//     { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
//   ];

//   return (
//     <footer className="main-footer">
//       <div
//         className="main-footer__bg"
//         style={{
//           backgroundImage: "url('/assets/distributor-img/footer.jpg')",
//           backgroundPosition: "bottom center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div>
//       <div className="main-footer__top">
//         <div className="container">
//           <div className="row">
//             {/* Logo + About */}
//             <div className="col-md-6 col-xl-5 wow fadeInUp" data-wow-delay="00ms">
//               <div className="footer-widget footer-widget--about">
//                 <a href="#" className="footer-widget__logo">
//                   <Image
//                     src="/assets/images/logos/homestead-experts-logo-light.png"
//                     width={250}
//                     height={40}
//                     alt="Homestead Logo"
//                   />
//                 </a>
//                 <p className="footer-widget__text">
//                   Leading FMCG distribution partner, connecting premium consumer brands to every major sales channel.
//                 </p>
//               </div>
//             </div>

//             {/* Dynamic Link Sections */}
//             <div className="col-md-6 col-xl-7">
//               <div className="row">
//                 {footerLinks.map((section, index) => (
//                   <div
//                     key={index}
//                     className="col-md-6 col-xl-4 wow fadeInUp"
//                     data-wow-delay={section.delay}
//                   >
//                     <div className="footer-widget footer-widget--links">
//                       <div className="footer-widget__title read-more-btn">
//                         {section.href ? (
//                           <a href={section.href}>{section.title}</a>
//                         ) : (
//                           section.title
//                         )}
//                       </div>
//                       <ul className="list-unstyled footer-widget__links">
//                         {section.links.map((link, idx) => (
//                           <li key={idx}>
//                             <a className="text-white" href={link.href}>
//                               {link.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
//         <div className="container">
//           <div className="main-footer__bottom__inner">
//             <p className="main-footer__copyright text-white">
//               &copy; <span className="dynamic-year"></span> Nonstop Distributors.
//               All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import Image from "next/image";

// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Quick Links",
//       delay: "100ms",
//       links: [
//         { label: "Home", href: "/" },
//         { label: "About Us", href: "/about-us/" },
//         { label: "Our Services", href: "/services/" },
//         { label: "Partner Brands", href: "/partners/" },
//         { label: "Contact Us", href: "/contact-us/" },
//       ],
//     },
//     {
//       title: "Services",
//       delay: "200ms",
//       links: [
//         { label: "Distribution", href: "/distribution/" },
//         { label: "Logistics", href: "/logistics/" },
//         { label: "Retail Coverage", href: "/retail-coverage/" },
//         { label: "Market Insights", href: "/market-insights/" },
//         { label: "Brand Building", href: "/brand-building/" },
//       ],
//     },
//   ];

//   const contactSection = {
//     title: "Contact",
//     delay: "300ms",
//     items: [
//       {
//         icon: "icon-pin",
//         value: (
//           <>
//             Mumbai, Maharashtra,
//             <br />
//             India
//           </>
//         ),
//       },
//       {
//         icon: "icon-telephone-call-1",
//         value: <a href="tel:+912212345678">+91 22 1234 5678</a>,
//       },
//       {
//         icon: "icon-mail",
//         value: (
//           <a href="mailto:info@nonstopdistributors.com">
//             info@nonstopdistributors.com
//           </a>
//         ),
//       },
//       {
//         icon: "icon-clock",
//         value: "Mon - Sat: 9AM - 6PM",
//       },
//     ],
//   };

//   const socialLinks = [
//     { href: "#", icon: "icon-linkedin" },
//     { href: "#", icon: "icon-twitter" },
//     { href: "#", icon: "icon-facebook" },
//     { href: "#", icon: "icon-instagram" },
//   ];

//   return (
//     <footer className="main-footer">
//       <div
//         className="main-footer__bg"
//         style={{
//           backgroundImage: "url('/assets/distributor-img/footer.jpg')",
//           backgroundPosition: "bottom center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div>

//       <div className="main-footer__top">
//         <div className="container">
//           <div className="row">
//             {/* Logo + About */}
//             <div className="col-md-6 col-xl-5 wow fadeInUp">
//               <div className="footer-widget footer-widget--about">
//                 <a href="/" className="footer-widget__logo">
//                   <Image
//                     src="/assets/distributor-img/nonstop-distributor-light.png"
//                     width={180}
//                     height={50}
//                     alt="Nonstop Distributors"
//                   />
//                 </a>

//                 <p className="footer-widget__text">
//                   India’s leading FMCG distribution partner, connecting premium
//                   consumer brands to every major sales channel across the
//                   country.
//                 </p>

//                 <div className="footer-widget__social">
//                   {socialLinks.map((item, index) => (
//                     <a key={index} href={item.href}>
//                       <i className={item.icon}></i>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Links + Contact */}
//             <div className="col-md-6 col-xl-7">
//               <div className="row">
//                 {footerLinks.map((section, index) => (
//                   <div
//                     key={index}
//                     className="col-md-6 col-xl-4 wow fadeInUp"
//                     data-wow-delay={section.delay}
//                   >
//                     <div className="footer-widget footer-widget--links">
//                       <div className="footer-widget__title">
//                         {section.title}
//                       </div>
//                       <ul className="list-unstyled footer-widget__links">
//                         {section.links.map((link, idx) => (
//                           <li key={idx}>
//                             <a href={link.href}>{link.label}</a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}

//                 {/* Contact Column */}
//                 <div
//                   className="col-md-12 col-xl-4 wow fadeInUp text-white"
//                   data-wow-delay={contactSection.delay}
//                 >
//                   <div className="footer-widget footer-widget--contact">
//                     <div className="footer-widget__title">
//                       {contactSection.title}
//                     </div>
//                     <ul className="list-unstyled footer-widget__contact">
//                       {contactSection.items.map((item, index) => (
//                         <li key={index}>
//                           <i className={`${item.icon} pe-3`}></i>
//                           <span>{item.value}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
//         <div className="container">
//           <div className="main-footer__bottom__inner">
//             <p className="main-footer__copyright text-white">
//               &copy; <span className="dynamic-year"></span> Nonstop Distributors.
//               All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
