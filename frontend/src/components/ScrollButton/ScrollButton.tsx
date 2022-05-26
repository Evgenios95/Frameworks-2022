import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.css";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleScrollButtonVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    return scrolled <= 450 ? setIsVisible(false) : setIsVisible(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleScrollButtonVisibility);

  return (
    <FontAwesomeIcon
      icon={faArrowAltCircleUp}
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline" : "none" }}
      className="scroll-button"
    />
  );
};
