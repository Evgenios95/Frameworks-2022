import "./style.css";
import React, { useEffect, useState } from "react";
import { Product } from "../Product";
import { motion } from "framer-motion";
import NoResultImg from "../../assets/coffee.gif";
import { ProductProps } from "../Product/Product";
import useProductsPagination from "../../utils/hooks/useProductsPagination";
import { Pagination } from "@mui/material";
import { useLocation } from "react-router";

interface ProductDisplayProps {
  products: ProductProps[];
}

export const ProductDisplay = ({ products }: ProductDisplayProps) => {
  const location = useLocation();
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

  // Reset pagination when products change. F.ex., filtered.
  useEffect(() => {
    paginatedProducts.jump(1);
    setPage(1);
  }, [products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const totalPagesCount = Math.ceil(products.length / 9);

  // The custom hooks accepts the products & the number of products per page, so 9.
  const paginatedProducts: any = useProductsPagination(products, 9);

  // Set the page & switch paginated products on change
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    paginatedProducts.jump(p);
  };

  // Show  plain products or paginated products dynamically,
  // depending on the URL path of the user.
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
          count={totalPagesCount}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      )}

      {products.length === 0 && (
        <div className={"no-products-message"}>
          <p>No results found</p>
          <img src={NoResultImg} alt={"No basket content"} />
        </div>
      )}
    </>
  );
};
