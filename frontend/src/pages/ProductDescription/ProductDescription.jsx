import "./style.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchProductInfo,
  fetchSimilarRoastedProducts,
} from "../../utils/functions";
import { ProductDisplay } from "../../components/ProductDisplay";

export const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getProductInfo() {
      const productInfo = await fetchProductInfo(id);
      setProduct(productInfo);
      console.log(productInfo);
      const similarProductsInfo = await fetchSimilarRoastedProducts(
        id,
        productInfo.productCategories.roast
      );
      setSimilarProducts(similarProductsInfo);
    }

    getProductInfo();
  }, []);

  return (
    <div className={"pageWrapper"}>
      {product && (
        <div className={"productPageContainer"}>
          <div className={"productImageWrapper"}>
            <img src={product.productImage} />
          </div>
          <div className={"productDescriptionWrapper"}>
            <h1>{product.productName}</h1>
            <h2>{product.productCategories.roast}</h2>
            <h2>{product.productCategories.brand}</h2>
            <p> {product.productWeight} </p>
            <h3 className={"productPrice"}>{product.productPrice} DKK</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
      {!product && <p>Loading</p>}
      {similarProducts && (
        <>
          <h1>
            You might also like these {product.productCategories.roast} coffees
          </h1>
          <ProductDisplay products={similarProducts} />
        </>
      )}
    </div>
  );
};