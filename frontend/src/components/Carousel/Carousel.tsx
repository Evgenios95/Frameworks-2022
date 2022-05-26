import "./style.css";
import React, { useEffect, useState } from "react";
import Sale0 from "./../../assets/carousel/Carousel0.png";
import Sale1 from "./../../assets/carousel/Carousel1.png";
import Sale2 from "./../../assets/carousel/Carousel2.png";

export const Carousel = () => {
  // State holding currently displayed image
  const [currentImageId, setCurrentImageId] = useState(0);

  // Carousel images in an array so we can loop through them
  const images = [Sale0, Sale1, Sale2];

  useEffect(() => {
    // Basic implementation for carousel animation.
    const intervalForCarousel = setInterval(() => {
      setCurrentImageId((id) => {
        const newId = (id + 1) % 3;
        return newId;
      });
    }, 3900);

    return () => clearInterval(intervalForCarousel);
  }, []);

  return (
    <div className={"carousel-wrapper"}>
      <img src={images[currentImageId]} alt={"carousel image"} />
    </div>
  );
};
