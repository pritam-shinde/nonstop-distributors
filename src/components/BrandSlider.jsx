"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partners } from "@/constants/partners";

import "swiper/css";

export default function BrandSlider() {
    return (
        <div style={{ position: "relative" }} className="why-choose-four">
            <div className="tailored-redline-new" />
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        520: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="brand-swiper"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center align-items-center">
                                <Image
                                    src={partner.logoSrc}
                                    width={partner.width}
                                    height={partner.height}
                                    alt={partner.name}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div
                className="tailored-redline-new"
                style={{ rotate: "0deg", top: "unset", bottom: 0 }}
            />
        </div>
    );
}
