import SpinImg from "./../../assets/spin.png";
import ArrowUpImg from "./../../assets/arrowUp.png";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const scrollButtonVariants = {
    exit: { opacity: 0, transform: "scale(0.7)" },
    initial: { opacity: 0, transform: "scale(1.3)" },
    animate: { opacity: 1, transform: "scale(1)" },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={"scroll-button"}
          onClick={() => scrollToTop()}
          variants={scrollButtonVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <img
            className={"spin-button"}
            alt={"scroll up button"}
            src={SpinImg}
          />
          <img
            className={"nonspin-arrow"}
            alt={"scroll up button"}
            src={ArrowUpImg}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
