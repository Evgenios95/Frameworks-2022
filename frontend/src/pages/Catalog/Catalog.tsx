import "./style.css";
import React, { useEffect, useState } from "react";
import { ProductDisplay } from "../../components/ProductDisplay";
import { useSearchParams } from "react-router-dom";
import { Filters } from "../../components/Filters";
import { fetchFilteredProducts } from "../../utils/functions";

export const Catalog = () => {
  const [shownProducts, setShownProducts] = useState(null);
  const [filter] = useSearchParams();

  useEffect(() => {
    async function getFilteredProducts(filters: { [k: string]: string }) {
      const products = await fetchFilteredProducts(filters);
      setShownProducts(products);
    }

    const currentParams = Object.fromEntries([...filter]);
    getFilteredProducts(currentParams);
  }, [filter]);

  return (
    <div className="page-wrapper">
      <h1 className="catalog-header">The best coffee selection in Denmark</h1>
      <Filters />
      {shownProducts && <ProductDisplay products={shownProducts} />}
    </div>
  );
};
