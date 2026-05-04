"use client";

import Link from "next/link";
import { useEffect } from "react";

const ThankYouModal = ({
  open,
  onClose,
  title = "Thank You!",
  message = "Your request has been received. Our team will contact you shortly.",
}) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Thank you dialog"
      onMouseDown={(e) => {
        // click outside closes
        if (e.target === e.currentTarget) onClose?.();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        style={{
          width: "min(850px, 95%)",
          background: "#ffffff",
          borderRadius: 28,
          padding: 64,
          boxShadow: "0 25px 100px rgba(0,0,0,0.3)",
        }}
      >
        <div className="d-flex align-items-start justify-content-between gap-3">
          <div style={{ width: "100%" }}>
            <h3 style={{ 
              margin: 0, 
              color: "#0E222A",
              fontSize: "52px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "28px",
              letterSpacing: "-0.5px"
            }}>{title}</h3>
            <p style={{ 
              margin: 0, 
              color: "#334155",
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 500
            }}>{message}</p>
          </div>

          <button
            type="button"
            onClick={() => onClose?.()}
            aria-label="Close"
            style={{
              border: "none",
              background: "transparent",
              fontSize: 40,
              lineHeight: 1,
              cursor: "pointer",
              color: "#0E222A",
              padding: "4px 8px",
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-5">
          <Link href="/" className="procounsel-btn text-uppercase">
            <i>Back To Home</i>
            <span>Back To Home</span>
          </Link>
          <Link href="/services/" className="procounsel-btn text-uppercase">
            <i>View Services</i>
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
