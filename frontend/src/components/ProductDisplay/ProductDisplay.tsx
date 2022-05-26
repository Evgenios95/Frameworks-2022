import "./style.css";
import React, { useEffect, useState } from "react";
import { Product } from "../Product";
import { motion } from "framer-motion";
import NoResultImg from "../../assets/coffee.gif";
import { ProductProps } from "../Product/Product";
import useProductsPagination from "../../utils/hooks/useProductsPagination";
import { Pagination } from "@mui/material";
import { useLocation } from "react-router";
import { ScrollButton } from "../ScrollButton";

interface ProductDisplayProps {
  products: ProductProps[];
}

export const ProductDisplay = ({ products }: ProductDisplayProps) => {
  let [page, setPage] = useState(1);

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

  useEffect(() => {
    paginatedProducts.jump(1);
    setPage(1);

    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const productCount = Math.ceil(products.length / 9);
  const paginatedProducts: any = useProductsPagination(products, 9);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    paginatedProducts.jump(p);
  };

  const location = useLocation();

  const shownProducts =
    location.pathname === "/products"
      ? paginatedProducts.currentProducts()
      : products;

  const isProductsPage = location.pathname === "/products";

  return (
    <>
      <motion.div
        variants={containerAnim}
        className="product-display"
        initial="hidden"
        animate="show"
      >
        {shownProducts.map((product: ProductProps) => (
          <Product key={product.productId} product={product} />
        ))}
      </motion.div>

      {isProductsPage && paginatedProducts.currentProducts().length > 0 && (
        <Pagination
          count={productCount}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      )}

      <ScrollButton />

      {products.length === 0 && (
        <div className={"no-products-message"}>
          <p>No results found</p>
          <img src={NoResultImg} alt={"No basket content"} />
        </div>
      )}
    </>
  );
};
