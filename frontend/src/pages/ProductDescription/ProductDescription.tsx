import "./style.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addProductToBasket,
  fetchProductInfo,
  fetchSimilarRoastedProducts,
} from "../../utils/functions";
import { ProductDisplay } from "../../components/ProductDisplay";
import { useBasketUpdate } from "../../utils/providers/UserProvider";
import {
  capitalizeFirstLetter,
  ProductProps,
} from "../../components/Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const ProductDescription = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [similarProducts, setSimilarProducts] = useState<ProductProps[] | null>(
    null
  );

  const { id } = useParams();

  const setBasket: (basket: number[]) => void = useBasketUpdate();

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
    <div className={"page-wrapper"}>
      {product && (
        <div className={"product-page-container"}>
          <div className={"product-image-wrapper"}>
            <img alt="product" src={product.productImage} />
          </div>
          <div className={"product-description-wrapper"}>
            <p className="individual-product-name">{product.productName}</p>

            <div className="individual-product-categories">
              <div className="">
                <b>Brand: </b>
                {capitalizeFirstLetter(product.productCategories.brand)}
              </div>
              <div>
                <b>Roast:</b> {product.productCategories.roast}
              </div>
              <div>
                <b>Weight:</b> {product.productWeight}
              </div>
            </div>

            <div className="individual-product-description">
              {product.description}
            </div>

            <div className="individual-product-price">
              <div>{product.productPrice} DKK</div>

              {product.discountAmount !== "no" && (
                <div className={"discount-price"}>
                  {product.productPrice + parseInt(product.discountAmount)} DKK
                </div>
              )}
            </div>

            <button
              className="product-button individual-product-button"
              onClick={() => addProductToBasketHandler(product.productId)}
            >
              Add to Basket{" "}
              <FontAwesomeIcon
                className="shopping-basket"
                icon={faShoppingBasket}
              />
            </button>
          </div>
        </div>
      )}

      {!product && <p>Loading</p>}

      {similarProducts && (
        <>
          <h1 className={"similar-product-header "}>
            You might also like these {product!.productCategories.roast}{" "}
            coffees...
          </h1>
          <ProductDisplay products={similarProducts} />
        </>
      )}
    </div>
  );
};
