import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
