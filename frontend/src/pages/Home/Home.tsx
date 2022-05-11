import "./style.css";
import React, { useEffect, useState } from "react";
import { ProductDisplay } from "../../components/ProductDisplay";
import { Carousel } from "../../components/Carousel";
import { fetchDiscountedProducts } from "../../utils/functions";
import { Link } from "react-router-dom";

export const Home = ({ setBasket }: any) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchDiscounted() {
      const productsOnDiscount = await fetchDiscountedProducts();
      setProducts(productsOnDiscount.slice(2));
    }

    fetchDiscounted();
  }, []);

  return (
    <div className={"pageWrapper"}>
      <Carousel />
      <h1 className={"homeDiscountHeading"}>LIMITED OFFERS</h1>
      <Link to={"/catalog?discount=true"}>See all offers</Link>
      {products ? (
        <ProductDisplay products={products} setBasket={setBasket} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
