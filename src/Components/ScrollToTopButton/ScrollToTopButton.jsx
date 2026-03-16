import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll back to the top of the page"
        >
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
