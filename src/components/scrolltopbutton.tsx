"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed top-2/4  mt-72 right-1  p-3 py-2  text-black rounded-full shadow-lg hover:bg-blue-300 "
      aria-label="Scroll to top"
      style={{ zIndex: 1000 }}
    >
      <FontAwesomeIcon icon={faAngleUp}  />
    </button>
  );
};

export default ScrollToTopButton;
