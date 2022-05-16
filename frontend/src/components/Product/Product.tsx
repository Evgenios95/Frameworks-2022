import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import { addProductToBasket } from "../../utils/functions";
import { Link } from "react-router-dom";
import { useBasketUpdate } from "../../utils/providers/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export interface ProductProps {
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

export function capitalizeFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

export const Product = ({ product }: { product: ProductProps }) => {
  const setBasket: (basket: number[]) => void = useBasketUpdate();

  // Check more information about framer-motion
  // https://www.framer.com/docs/animation/
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
    <motion.div className="product-wrapper" variants={animationVariants}>
      {product.discountAmount !== "no" && <p className={"sale-tag"}>ON SALE</p>}

      <img src={product.productImage} alt="coffee" />

      <p className="product-name">{product.productName}</p>

      <div className="product-specifics product-categories">
        <div className="product-brand">
          {capitalizeFirstLetter(product.productCategories.brand)}
        </div>
        <div>{product.productCategories.roast}</div>
        <div> {product.productWeight}</div>
      </div>

      <div className="product-specifics product-price">
        <div>{product.productPrice} DKK</div>

        {product.discountAmount !== "no" && (
          <div className="discount-price">
            {product.productPrice + parseInt(product.discountAmount)} DKK
          </div>
        )}
      </div>

      <button
        className="product-button"
        onClick={() => addProductToBasketHandler(product.productId)}
      >
        Add to Basket{" "}
        <FontAwesomeIcon className="shopping-basket" icon={faShoppingBasket} />
      </button>

      <Link className="product-link" to={productUrl}>
        Details
      </Link>
    </motion.div>
  );
};
