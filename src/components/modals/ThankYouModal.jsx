"use client";

import { useEffect } from "react";

const ThankYouModal = ({
  open,
  onClose,
  title = "Thank you!",
  message = "Your inquiry has been sent. We’ll contact you soon.",
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
          width: "min(560px, 100%)",
          background: "#ffffff",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 16px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div className="d-flex align-items-start justify-content-between gap-3">
          <div>
            <h3 style={{ margin: 0, color: "#0E222A" }}>{title}</h3>
            <p style={{ margin: "8px 0 0", color: "#334155" }}>{message}</p>
          </div>

          <button
            type="button"
            onClick={() => onClose?.()}
            aria-label="Close"
            style={{
              border: "none",
              background: "transparent",
              fontSize: 22,
              lineHeight: 1,
              cursor: "pointer",
              color: "#0E222A",
            }}
          >
            ×
          </button>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-4">
          <a href="/" className="procounsel-btn text-uppercase">
            <i>Back To Home</i>
            <span>Back To Home</span>
          </a>
          <a href="/services/" className="procounsel-btn text-uppercase">
            <i>View Services</i>
            <span>View Services</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
