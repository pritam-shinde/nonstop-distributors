"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { partners } from "@/constants/partners";

export default function BrandSlider() {
  const items = useMemo(() => (Array.isArray(partners) ? partners : []), []);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(Boolean(mediaQuery.matches));

    handleChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const deck = useMemo(() => {
    if (!items.length) return [];
    const minItems = 10;
    const repeats = Math.max(1, Math.ceil(minItems / items.length));
    return Array.from({ length: repeats }, () => items).flat();
  }, [items]);

  const trackA = useMemo(() => [...deck, ...deck], [deck]);
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, items.length - 1));
  const active = items[safeActiveIndex] || items[0];

  return (
    <>
      <section
        style={{
          position: "relative",
          background: "linear-gradient(to right, #247ba0, #0E222A )",
        }}
        className="why-choose-four brands-marqueeSection"
        aria-label="Brands we distribute"
      >
        <div className="tailored-redline-new" />

        <div className="container">
          <div className="brands-strip__header">
            <div>
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white mb-0">
                Our <span>Brand</span> Partners
              </h2>
              <p className="brands-strip__sub text-white mb-0">
                Trusted brands we proudly distribute across diverse sales
                channels.
              </p>
            </div>
          </div>

          <div
            className={`brands-marquee${reduceMotion ? " brands-marquee--reduced" : ""}`}
            aria-label="Scrolling list of brands"
          >
            <div className="brands-marquee__row brands-marquee__row--a">
              <div className="brands-marquee__track" aria-hidden="true">
                {trackA.map((partner, index) => (
                  <Link
                    key={`${partner.name}-a-${index}`}
                    href={partner.websiteUrl || "/partners"}
                    target={partner.websiteUrl ? "_blank" : undefined}
                    rel={partner.websiteUrl ? "noopener noreferrer" : undefined}
                    className="brand-pill"
                    tabIndex={-1}
                  >
                    <Image
                      src={partner.logoSrc}
                      width={partner.width}
                      height={partner.height}
                      alt={partner.name}
                      sizes="220px"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxHeight: partner.maxHeight || 48,
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="brands-marquee__grid" aria-label="Brands grid">
              {items.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.websiteUrl || "/partners"}
                  target={partner.websiteUrl ? "_blank" : undefined}
                  rel={partner.websiteUrl ? "noopener noreferrer" : undefined}
                  className="brand-card"
                  aria-label={`${partner.name} - view partner details`}
                >
                  <div className="brand-card__logo">
                    <Image
                      src={partner.logoSrc}
                      width={partner.width}
                      height={partner.height}
                      alt={partner.name}
                      sizes="220px"
                      style={{ width: "auto", height: "auto", maxHeight: partner.maxHeight || 52 }}
                    />
                  </div>
                  <div className="brand-card__meta" aria-hidden="true">
                    <div className="brand-card__name">{partner.name}</div>
                    <div className="brand-card__tag">
                      {partner.subcategory || partner.category || "FMCG"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <ul className="visually-hidden" aria-label="Brand partners list">
              {items.map((partner) => (
                <li key={partner.name}>
                  <Link
                    href={partner.websiteUrl || "/partners"}
                    target={partner.websiteUrl ? "_blank" : undefined}
                    rel={partner.websiteUrl ? "noopener noreferrer" : undefined}
                  >
                    {partner.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link
              href="/partners"
              className="tailored-btn d-inline-flex align-items-center justify-content-center"
              aria-label="View all partner brands"
            >
              <i>View All Partners</i>
              <span>View All Partners</span>
            </Link>
          </div>
        </div>

        <div
          className="tailored-redline-new"
          style={{ rotate: "0deg", top: "unset", bottom: 0 }}
        />
      </section>

      {/* <section className="brands-explorerSection" aria-label="Explore brands">
        <div className="container">
          <div className="brands-explorer__header">
            <div>
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white mb-0">
                Explore <span>Brands</span>
              </h2>
              <p className="brands-explorer__sub text-white mb-0">
                Tap a brand to see category and distribution summary.
              </p>
            </div>

            <Link
              href="/partners"
              className="brands-explorer__cta"
              aria-label="Open partners page"
            >
              All partners
              <i className="fa fa-angle-right" aria-hidden="true" />
            </Link>
          </div>

          <div className="brands-explorer">
            <div className="brand-tabs" role="tablist" aria-label="Brand list">
              {items.map((partner, index) => (
                <button
                  key={`${partner.name}-tab`}
                  type="button"
                  role="tab"
                  id={`brand-tab-${index}`}
                  aria-selected={index === safeActiveIndex}
                  aria-controls={`brand-panel-${index}`}
                  className="brand-tab"
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="brand-tab__logo" aria-hidden="true">
                    <Image
                      src={partner.logoSrc}
                      width={partner.width}
                      height={partner.height}
                      alt=""
                      sizes="120px"
                      style={{ width: "auto", height: "auto", maxHeight: 34 }}
                    />
                  </span>

                </button>
              ))}
            </div>

            <div
              className="brand-preview"
              role="tabpanel"
              id={`brand-panel-${safeActiveIndex}`}
              aria-labelledby={
                items.length ? `brand-tab-${safeActiveIndex}` : undefined
              }
            >
              {active ? (
                <>
                  <div className="brand-preview__media">
                    <Image
                      src={
                        active.coverSrc ||
                        "/assets/distributor-img/other-fmcg-product.jpg"
                      }
                      alt="partner brand image"
                      fill
                      sizes="(max-width: 991px) 100vw, 58vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="brand-preview__overlay" aria-hidden="true" />
                  </div>

                  <div className="brand-preview__body">
                    <h3 className="brand-preview__title">{active.name}</h3>
                    <p className="brand-preview__text">
                      {active.description ||
                        "Trusted partner brand distributed with care and consistency."}
                    </p>

                    <div className="brand-preview__actions">
                      <Link
                        href="/partners"
                        className="brand-preview__btn"
                        aria-label="View partner details"
                      >
                        View details
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="brand-preview__empty text-white">
                  No brands available.
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
