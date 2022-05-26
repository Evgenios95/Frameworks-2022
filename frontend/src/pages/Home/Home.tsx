import "./style.css";
import React, { useEffect, useState } from "react";
import { ProductDisplay } from "../../components/ProductDisplay";
import { Carousel } from "../../components/Carousel";
import { Link } from "react-router-dom";
import { fetchDiscountedProducts } from "../../utils/productFunctions";

export const Home = () => {
  // State with discounted products
  const [products, setProducts] = useState(null);

  // Fetching of discounted products on load
  useEffect(() => {
    async function fetchDiscounted() {
      const productsOnDiscount = await fetchDiscountedProducts();
      setProducts(productsOnDiscount.slice(2));
    }

    fetchDiscounted();
  }, []);

  return (
    <>
      <Carousel />
      <div className={"page-wrapper"}>
        <h1 className={"home-discount-heading"}>LIMITED OFFERS</h1>
        <Link to={"/products?discount=true"}>See all offers</Link>
        {products ? <ProductDisplay products={products} /> : <p>Loading</p>}
      </div>
    </>
  );
};
