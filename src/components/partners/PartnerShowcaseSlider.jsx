"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function PartnerShowcaseSlider({ partners }) {
  const items = Array.isArray(partners) ? partners : [];
  const shouldLoop = items.length > 3;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper || !prevRef.current || !nextRef.current) return;
    if (!swiper.navigation) return;

    swiper.params.navigation = {
      ...(swiper.params.navigation || {}),
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, [swiper]);

  return (
    <div className="partners-showcase-slider mt-4">
      <button
        ref={prevRef}
        type="button"
        className="partners-showcase__navBtn partners-showcase__navBtn--prev"
        aria-label="Previous partners"
        onClick={() => swiper?.slidePrev()}
      >
        <i className="fa fa-angle-left" aria-hidden="true" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ enabled: true, prevEl: null, nextEl: null }}
        onSwiper={setSwiper}
        onInit={(swiperInstance) => {
          if (!prevRef.current || !nextRef.current) return;
          if (!swiperInstance.navigation) return;
          swiperInstance.params.navigation = {
            ...(swiperInstance.params.navigation || {}),
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          };
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={650}
        spaceBetween={60}
        loop={shouldLoop}
        rewind={!shouldLoop}
        observer
        observeParents
        resizeObserver
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 52,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 52,
          },
        }}
        className="partners-showcase-swiper px-lg-5"
      >
        {items.map((partner) => (
          <SwiperSlide key={partner.name}>
            <article className="partners-showcase-card">
              <div className="partners-showcase-card__media position-relative">
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgb(0 0 0 / 0.7)",
                    zIndex: 1,
                  }}
                />
                <Image
                  src={
                    partner.coverSrc ||
                    "/assets/distributor-img/other-fmcg-product.jpg"
                  }
                  alt={`${partner.name} category`}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="partners-showcase-card__badge">
                  {partner.subcategory || "FMCG"}
                </div>

                <div
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: 10,
                    right: 20,
                  }}
                >
                  <Image
                    src={partner.logoSrc}
                    width={partner.width}
                    height={partner.height}
                    alt={partner.name}
                    style={{
                      height: "auto",
                      maxHeight: partner.maxHeight || 40,
                      width: "auto",
                      marginTop: "12px",
                    }}
                  />
                </div>
              </div>
              <div className="partners-showcase-card__body">
                {/* <Image
                  src={partner.logoSrc}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.name}
                  style={{
                    height: "auto",
                    maxHeight: partner.maxHeight || 40,
                    width: "auto",
                    marginTop: "12px",
                  }}
                /> */}
                <p className="partners-showcase-card__text">
                  {partner.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={nextRef}
        type="button"
        className="partners-showcase__navBtn partners-showcase__navBtn--next"
        aria-label="Next partners"
        onClick={() => swiper?.slideNext()}
      >
        <i className="fa fa-angle-right" aria-hidden="true" />
      </button>
    </div>
  );
}
