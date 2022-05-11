import "./style.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addProductToBasket,
  fetchProductInfo,
  fetchSimilarRoastedProducts,
  removeOneFromBasket,
} from "../../utils/functions";
import { ProductDisplay } from "../../components/ProductDisplay";

interface Product {
  productName: string;
  productWeight: string;
  productPrice: number;
  description: string;
  productId: number;
  productCategories: {
    roast: string;
    brand: string;
  };
  productImage: string;
}

export const ProductDescription = ({ setBasket }: any) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[] | null>(
    null
  );
  const { id } = useParams();

  async function addProductToBasketHandler(pID: number) {
    const newBasket = await addProductToBasket(pID);
    setBasket(newBasket);
  }

  useEffect(() => {
    async function getProductInfo() {
      const productInfo = await fetchProductInfo(id);
      setProduct(productInfo);

      const similarProductsInfo = await fetchSimilarRoastedProducts(
        id,
        productInfo.productCategories.roast
      );
      setSimilarProducts(similarProductsInfo);
    }

    getProductInfo();
  }, [id]);

  return (
    <div className={"pageWrapper"}>
      {product && (
        <div className={"productPageContainer"}>
          <div className={"productImageWrapper"}>
            <img alt="product" src={product.productImage} />
          </div>
          <div className={"productDescriptionWrapper"}>
            <h1>{product.productName}</h1>
            <h2>{product.productCategories.roast}</h2>
            <h2>{product.productCategories.brand}</h2>
            <p> {product.productWeight} </p>
            <h3 className={"productPrice"}>{product.productPrice} DKK</h3>
            <p>{product.description}</p>
            <button
              onClick={() => addProductToBasketHandler(product.productId)}
              style={{ padding: "100px" }}
            >
              +
            </button>
          </div>
        </div>
      )}

      {!product && <p>Loading</p>}

      {similarProducts && (
        <>
          <h1 className={"similarProductHeader"}>
            You might also like these {product!.productCategories.roast} coffees
          </h1>
          <ProductDisplay products={similarProducts} setBasket={setBasket} />
        </>
      )}
    </div>
  );
};
