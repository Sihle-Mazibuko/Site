import React, { useEffect } from "react";
import "./totop.css";

const ToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollUp");
      if (scrollUp) {
        if (window.scrollY > 200) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#" className="scrollUp">
      <i className="uil uil-arrow-up scrollUp-icon"></i>
    </a>
  );
};

export default ToTop;
