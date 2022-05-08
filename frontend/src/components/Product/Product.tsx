import "./style.css";
import React from "react";
import { motion } from "framer-motion";

export const Product = ({ product }: any) => {
  // Check more information about framer-motion
  // https://www.framer.com/docs/animation/
  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className={"productWrapper"} variants={animationVariants}>
      {product.discountAmount !== "no" && <p className={"saleTag"}>ON SALE</p>}

      <img src={product.productImage} alt={"coffee"} />
      <h2>{product.productName}</h2>
      <p> {product.productWeight}</p>
      <h4>{product.productCategories.roast}</h4>
      <h4>{product.productCategories.brand}</h4>
      <h3>{product.productPrice} DKK</h3>

      {product.discountAmount !== "no" && (
        <h4 className={"discountPrice"}>
          {product.productPrice + parseInt(product.discountAmount)} DKK
        </h4>
      )}

      <a href={"/product/" + product.productId}>Details</a>
    </motion.div>
  );
};
