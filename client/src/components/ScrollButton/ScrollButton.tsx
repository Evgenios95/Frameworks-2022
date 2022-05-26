import SpinImg from "./../../assets/spin.png";
import ArrowUpImg from "./../../assets/arrowUp.png";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";

export const ScrollButton = () => {
  // State of the button's visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // The scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
  // If more than 450px, set the button visibility to true
  const toggleScrollButtonVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    return scrolled <= 450 ? setIsVisible(false) : setIsVisible(true);
  };

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the toggleScrollButtonVisibility function to the scroll event type
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
