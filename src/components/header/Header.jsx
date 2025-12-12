"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuData } from ".";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Optimized Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 150);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Recursive render function for dropdowns
  // const renderMenu = (items) => (
  //   <ul className="sub-menu">
  //     {items.map((item, i) => (
  //       <li key={i} className={item.children ? "dropdown" : ""}>
  //         <a href={item.href || "#"}>{item.label}</a>
  //         {item.children && renderMenu(item.children)}
  //       </li>
  //     ))}
  //   </ul>
  // );

  const renderMenu = (items, level = 0) => (
    <ul className={level === 0 ? "main-menu__list" : "sub-menu"}>
      {(items.isAlphabeticFormate
        ? items.sort((a, b) => a.label.localeCompare(b.label))
        : items
      ).map((item, i) => {
        const hasChildren = !!item.children;
        const liClass = [
          hasChildren ? "dropdown" : "",
          `menu-level-${level}`, // 👈 class based on depth
        ]
          .join(" ")
          .trim();

        return (
          <li key={i} className={liClass}>
            <a href={item.href || "#"}>{item.label}</a>
            {hasChildren && renderMenu(item.children, level + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <header
        className="main-header sticky-header sticky-header--normal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          backgroundColor: scrolled ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="container-fluid">
          <div
            className="main-header__inner"
            style={{ width: "100%", margin: 0 }}
          >
            {/* Logo */}
            <div
              className="main-header__logo"
              style={{ maxWidth: "250px", width: "100%", marginRight: 0 }}
            >
              <a href="/" style={{ width: "100%" }}>
                <Image
                  src={
                    scrolled
                      ? "/assets/images/logos/homestead-experts-logo-dark01.png"
                      : "/assets/images/logos/homestead-experts-logo-light.png"
                  }
                  alt="Procounsel"
                  width={160}
                  height={40}
                  style={{ width: "100%", objectFit: "contain", marginBottom: "4px !important" }}
                />
              </a>
            </div>

            {/* Navigation */}
            <nav
              className="main-header__nav main-menu"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "start",
                alignItems: "center",
                marginLeft: "60px",
              }}
            >
              <ul className="main-menu__list">
                {menuData.map((item, idx) => (
                  <li
                    key={idx}
                    className={item.children || item.megaMenu ? "dropdown" : ""}
                  >
                    <a
                      href={item.href || "#"}
                      style={{ color: scrolled ? "#000000" : "#ffffff" }}
                    >
                      {item.label}
                    </a>

                    {/* Mega Menu for Home */}
                    {item.megaMenu && (
                      <ul>
                        <li>
                          <section className="home-showcase">
                            <div className="container-fluid">
                              <div className="home-showcase__inner">
                                <div className="row">
                                  {item.showcase.map((demo, j) => (
                                    <div className="col-md-6 col-lg-3" key={j}>
                                      <div className="demo-one__card">
                                        <div className="demo-one__image">
                                          <img
                                            src={demo.img}
                                            alt={demo.title}
                                          />
                                          <div className="demo-one__btns">
                                            {demo.links.map((link, k) => (
                                              <a
                                                key={k}
                                                href={link.href}
                                                className="procounsel-btn demo-one__btn"
                                                style={{
                                                  color: scrolled
                                                    ? "#000000"
                                                    : "#ffffff",
                                                }}
                                              >
                                                <i>{link.label}</i>
                                                <span>{link.label}</span>
                                              </a>
                                            ))}
                                          </div>
                                        </div>
                                        <div className="demo-one__content">
                                          <h3 className="demo-one__title">
                                            <a
                                              href={demo.links[0].href}
                                              style={{
                                                color: scrolled
                                                  ? "#000000"
                                                  : "#ffffff",
                                              }}
                                            >
                                              {demo.title}
                                            </a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </section>
                        </li>
                      </ul>
                    )}

                    {/* Normal Dropdowns */}
                    {item.children && renderMenu(item.children)}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section */}
            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span
                  style={{ backgroundColor: scrolled ? "#000000" : "#ffffff" }}
                ></span>
                <span
                  style={{ backgroundColor: scrolled ? "#000000" : "#ffffff" }}
                ></span>
                <span
                  style={{ backgroundColor: scrolled ? "#000000" : "#ffffff" }}
                ></span>
              </div>
              <div className="main-header__btn">
                {/* <a href='#' className="free-consultation-btn text-uppercase" style={{ whiteSpace: "nowrap" }}>Request an Expert</a> */}
                <a
                  href="/contact-us/#contact-service"
                  className="procounsel-btn d-flex flex-column flex-sm-row text-center text-sm-start"
                >
                  <i>REQUEST AN EXPERT</i>
                  <span className="">REQUEST AN EXPERT</span>
                </a>
              </div>
              <div className="main-header__info d-none d-lg-flex">
                <div className="main-header__info__icon">
                  <i className="icon-phone-1"></i>
                  <span className="main-header__info__icon__zoom">
                    <i className="icon-phone-1"></i>
                  </span>
                </div>
                <div>
                  {/* <span className="main-header__info__text" style={{ color: scrolled ? "#000000" : "#ffffff" }}>Call anytime</span> */}
                  <a
                    href="tel:+8772443703"
                    style={{
                      color: scrolled ? "#000000" : "#ffffff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    (877) 244-3703
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile-nav__wrapper start */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          {/* <!-- /.mobile-nav__overlay --> */}
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fa fa-times"></i>
            </span>

            <div className="logo-box">
              <a href="/" aria-label="logo image">
                <Image
                  src={"/assets/images/logos/homestead-experts-logo-light.png"}
                  alt="Homestead Experts"
                  width={140}
                  height={30}
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="mobile-nav__container"></div>

            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:needhelp@procounsel.com">
                  needhelp@procounsel.com
                </a>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>

            <div className="mobile-nav__social">
              <a href="https://facebook.com">
                <i className="icon-facebook"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://pinterest.com">
                <i className="icon-pinterest"></i>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="https://twitter.com">
                <i className="icon-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com">
                <i className="icon-youtube"></i>
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
