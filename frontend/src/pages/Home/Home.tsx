import "./style.css";
import React, { useEffect, useState } from "react";
import { ProductDisplay } from "../../components/ProductDisplay";
import { fetchDiscountedProducts } from "../../utils/functions";

export const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchDiscounted() {
      const productsOnDiscount = await fetchDiscountedProducts();
      setProducts(productsOnDiscount);
    }

    fetchDiscounted();
  }, []);

  return (
    <div className={"pageWrapper"}>
      <div className={"companyBanner"}>
        <h1>Coffeenator</h1>
        <p>Get your Java beans here!</p>
      </div>

      <div className={"introWrapper"} />

      <h1> Discounted products </h1>

      {products ? <ProductDisplay products={products} /> : <p>Loading</p>}
    </div>
  );
};
