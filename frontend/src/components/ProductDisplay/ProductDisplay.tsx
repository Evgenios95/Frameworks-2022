import "./style.css";
import React from "react";
import { Product } from "../Product";
import { motion } from "framer-motion";
import NoResultImg from "../../assets/coffee.gif";
import { ProductProps } from "../Product/Product";

interface ProductDisplayProps {
  products: ProductProps[];
  setBasket: (basket: number[]) => void;
}

export const ProductDisplay = ({
  products,
  setBasket,
}: ProductDisplayProps) => {
  // Check more information about framer-motion
  // https://www.framer.com/docs/animation/
  const containerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // When using variants, animations of child components
        // can be staggered by this duration (in seconds).
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerAnim}
        className="productDisplay"
        initial="hidden"
        animate="show"
      >
        {products.map((product: ProductProps) => (
          <Product
            setBasket={setBasket}
            key={product.productId}
            product={product}
          />
        ))}
      </motion.div>

      {products.length === 0 && (
        <div className={"noProductsMessage"}>
          <p>No results found</p>
          <img src={NoResultImg} alt={"No basket content"} />
        </div>
      )}
    </>
  );
};
