"use client";

import Image from "next/image";
import React from "react";

const SpecialtyMedicalMalpracticeClient = ({ data }) => {
    const [showAll, setShowAll] = React.useState(false);

    return (
        <>
            <section
                className="team-one subspeciality-medical-experts"
                id="nurse-services"
                style={{ position: "relative", backgroundColor: "#0E222A !important" }}
            >
                <Image
                    src="/assets/images/backgrounds/section-2-1-b-new.png"
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "bottom",
                        overflow: "hidden",
                    }}
                    alt="about-background"
                />
                <div className="container">
                    <div className="sec-title text-left">
                        <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white">
                            Subspecialties and Expert Types
                        </h2>
                        <p className="about-four__text text-white custom-max-width">
                            We source from a nationwide network of clinicians and medical
                            professionals across every major discipline, ensuring your case is
                            supported by the right credentials and courtroom experience.
                        </p>
                    </div>

                    <div className="wow fadeInUp" data-wow-delay="0ms">
                        <div
                            style={{ marginLeft: 0, marginRight: 0 }}
                            className="custom-max-width"
                        >
                            <ul className="list-unstyled about-four__list row">
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`about-four__item text-white col-12 col-sm-6 col-lg-4 ${!showAll && index >= 12 ? "d-none" : ""
                                            }`}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start !important",
                                        }}
                                    >
                                        <i className="icon-check mt-2"></i>
                                        <a
                                            href={item.href}
                                            className="mb-0 text-white fw-normal text-decoration-none hover-underline"
                                        >
                                            <p className="mb-0">{item.label}</p>
                                        </a>
                                    </li>
                                ))}
                                {data.length > 12 && (
                                    <div className="flex mt-3">
                                        <button
                                            className="btn btn-link p-0 text-decoration-none read-more-btn hover-underline"
                                            onClick={() => setShowAll(!showAll)}
                                        >
                                            {showAll ? "Read Less..." : "Load More..."}
                                        </button>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialtyMedicalMalpracticeClient;
