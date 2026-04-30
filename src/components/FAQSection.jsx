"use client";

import { useState } from "react";

export default function FAQSection({ faqData, title = "Frequently Asked Questions" }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    if (!faqData || faqData.length === 0) {
        return null;
    }

    return (
        <section className="faq-one pt-2 pb-5" style={{ background: "#0E222A" }}>
            <div className="container">
                <div className="sec-title text-left pb-1">
                    <h2 className="sec-title__title bw-split-in-up custom-heading-all font-Montserrat text-white">
                        {title}
                    </h2>
                </div>

                <div className="row">
                    {/* Split FAQs into two columns for better layout */}
                    {Math.ceil(faqData.length / 2) === 1 ? (
                        // Single column if 1-2 items
                        <div className="col-lg-6">
                            <div className="faq-one__content">
                                <div
                                    className="faq-one__accordion procounsel-accrodion"
                                    data-grp-name="procounsel-accrodion"
                                >
                                    {faqData.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`accrodion ${expandedIndex === index ? "active" : ""}`}
                                        >
                                            <div
                                                className="accrodion-title"
                                                onClick={() => toggleAccordion(index)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <span className="accrodion__number text-white"></span>
                                                <h3 className="fs-6 text-white">
                                                    {item.question}
                                                    <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                                </h3>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">

                                                    <p
                                                        className="text-white"
                                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                                    ></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Two columns for more items
                        <>
                            <div className="col-lg-6">
                                <div className="faq-one__content">
                                    <div
                                        className="faq-one__accordion procounsel-accrodion"
                                        data-grp-name="procounsel-accrodion"
                                    >
                                        {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                                            <div
                                                key={index}
                                                className={`accrodion ${expandedIndex === index ? "active" : ""}`}
                                            >
                                                <div
                                                    className="accrodion-title"
                                                    onClick={() => toggleAccordion(index)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <span className="accrodion__number text-white"></span>
                                                    <h3 className="fs-6 text-white">
                                                        {item.question}
                                                        <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                                    </h3>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">

                                                        <p
                                                            className="text-white"
                                                            dangerouslySetInnerHTML={{ __html: item.answer }}
                                                        ></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-one__content">
                                    <div
                                        className="faq-one__accordion procounsel-accrodion"
                                        data-grp-name="procounsel-accrodion"
                                    >
                                        {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => {
                                            const actualIndex = Math.ceil(faqData.length / 2) + index;
                                            return (
                                                <div
                                                    key={actualIndex}
                                                    className={`accrodion ${expandedIndex === actualIndex ? "active" : ""}`}
                                                >
                                                    <div
                                                        className="accrodion-title"
                                                        onClick={() => toggleAccordion(actualIndex)}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <span className="accrodion__number text-white"></span>
                                                        <h3 className="fs-6 text-white">
                                                            {item.question}
                                                            <i className="accrodion-title__icon accrodion-title__icon1"></i>
                                                        </h3>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">

                                                            <p
                                                                className="text-white"
                                                                dangerouslySetInnerHTML={{ __html: item.answer }}
                                                            ></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
