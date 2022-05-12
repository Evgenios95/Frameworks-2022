import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import { addProductToBasket } from "../../utils/functions";
import { Link } from "react-router-dom";
import { useBasketUpdate } from "../../UserProvider";

interface ProductProps {
  productId: number;
  productName: string;
  productWeight: string;
  productPrice: number;
  description: string;
  productCategories: {
    roast: string;
    brand: string;
  };
  productImage: string;
  isInBasket: number;
  discountAmount: string;
}

export const Product = ({ product }: any) => {
  // Check more information about framer-motion
  // https://www.framer.com/docs/animation/
  const setBasket = useBasketUpdate();

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  async function addProductToBasketHandler(pID: number) {
    const newBasket = await addProductToBasket(pID);
    setBasket(newBasket);
  }

  const productUrl = "/product/" + product.productId;

  return (
    <motion.div className={"productWrapper"} variants={animationVariants}>
      {product.discountAmount !== "no" && <p className={"saleTag"}>ON SALE</p>}

      <img src={product.productImage} alt={"coffee"} />
      <h4>{product.productCategories.brand}</h4>
      <h2>{product.productName}</h2>
      <p> {product.productWeight}</p>
      <h4>{product.productCategories.roast}</h4>
      <h3>{product.productPrice} DKK</h3>

      {product.discountAmount !== "no" && (
        <h4 className={"discountPrice"}>
          {product.productPrice + parseInt(product.discountAmount)} DKK
        </h4>
      )}

      <Link to={productUrl}>Details</Link>

      <button onClick={() => addProductToBasketHandler(product.productId)}>
        Add me
      </button>
    </motion.div>
  );
};
