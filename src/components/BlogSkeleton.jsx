"use client";
import React from "react";

const BlogSkeleton = () => {
    const SkeletonCard = () => (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card"
                style={{
                    border: "none", boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    overflow: "hidden", borderRadius: "10px"
                }}>
                <div className="placeholder-glow" style={{ width: "100%", height: "250px", backgroundColor: "#e0e0e0", }}></div>
                <div className="card-body">
                    <p className="placeholder-glow mb-2">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p className="placeholder-glow mb-2">
                        <span className="placeholder col-8"></span>
                    </p>
                    <p className="placeholder-glow mb-2">
                        <span className="placeholder col-4"></span>
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="blog-three section-color">
            <div className="container">
                <div className="row gutter-y-30">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSkeleton;
