"use client";
import React from "react";

const PaginationButton = ({ href, isActive, children }) => {
  return (
    <a
      href={href}
      className={isActive ? "active" : ""}
      onClick={isActive ? (e) => e.preventDefault() : undefined}
    >
      {children}
    </a>
  );
};

export default PaginationButton;
