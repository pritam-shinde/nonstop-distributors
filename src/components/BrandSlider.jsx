"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function BrandSlider() {
    const brands = [
        {
            label: "Patanjali",
            imgSrc: "/assets/distributor-img/pantanjali.png",
            width: 214,
            height: 60,
        },
        {
            label: "Britannia",
            imgSrc: "/assets/distributor-img/britannia.png",
            width: 168,
            height: 60,
        },
        {
            label: "Hersheys",
            imgSrc: "/assets/distributor-img/hersheys.jpg",
            width: 150,
            height: 60,
        },
        {
            label: "Keya",
            imgSrc: "/assets/distributor-img/keya-logo.jpg",
            width: 112,
            height: 60,
        },
    ];

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
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center align-items-center">
                                <Image
                                    src={brand.imgSrc}
                                    width={brand.width}
                                    height={brand.height}
                                    alt={brand.label}
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