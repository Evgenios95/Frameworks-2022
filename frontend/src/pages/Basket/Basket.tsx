import "./style.css";
import React, { useEffect, useState } from "react";
import NoResultImg from "./../../assets/coffee.gif";

import {
  addProductToBasket,
  removeOneFromBasket,
  removeAllFromBasket,
  transformBasket,
} from "../../utils/functions";
import { useBasket, useBasketUpdate } from "../../UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClose, faMinus } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../components/Product/Product";

interface BasketProduct {
  productId: number;
  productName: string;
  productWeight: string;
  productPrice: number;
  quantity: number;
  productCategories: {
    roast: string;
    brand: string;
  };
  image: string;
  description: string;
}

export const Basket = () => {
  const basket: number[] = useBasket();
  const setBasket: (basket: number[]) => void = useBasketUpdate();

  const [basketProducts, setBasketProducts] = useState<BasketProduct[]>([]);
  const [basketTotal, setBasketTotal] = useState(0);

  async function addProductToBasketHandler(pId: number) {
    const newBasket = await addProductToBasket(pId);
    setBasket(newBasket);
  }

  async function removeProductFromBasketHandler(pId: number) {
    const newBasket = await removeOneFromBasket(pId);
    setBasket(newBasket);
  }

  async function removeAllProducts(pId: number) {
    const newBasket = await removeAllFromBasket(pId);
    setBasket(newBasket);
  }

  useEffect(() => {
    const getBasketInfo = async () => {
      return await transformBasket(basket);
    };

    getBasketInfo().then((basketInfo) => {
      setBasketProducts(basketInfo);
      let counter = 0;
      for (const product in basketInfo) {
        counter +=
          basketInfo[product].quantity * basketInfo[product].productPrice;
      }
      setBasketTotal(counter);
    });
  }, [basket]);

  return (
    <div className={"basket-page"}>
      <div className={"basket-content-wrapper"}>
        {basketProducts.length === 0 && (
          <div className={"empty-basket-message"}>
            <p>There is nothing in your basket.</p>
            <img src={NoResultImg} alt="No basket content" />
          </div>
        )}
        {basketProducts.map((product: BasketProduct) => (
          <div className={"basket-product"} key={product.productId}>
            <div className={"basket-image-wrapper"}>
              <img src={product.image} alt="Product pic" />
            </div>

            <div className={"basket-meta"}>
              <div className="basket-name-brand-wrapper">
                <div className="product-name basket-product-name">
                  {product.productName}
                </div>
                <div className="product-brand basket-product-brand">
                  {capitalizeFirstLetter(product.productCategories.brand)}
                </div>
              </div>

              <div>
                <div className="basket-product-price">
                  {product.productPrice}kr
                </div>{" "}
                / {product.productWeight}
              </div>

              <div className="basket-product-description">
                {product.description}
              </div>
            </div>

            <div className="basket-price-qty">
              <div className="quantity-input">
                <button
                  className="quantity-input__modifier quantity-input__modifier--left"
                  onClick={() =>
                    removeProductFromBasketHandler(product.productId)
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  className="quantity-input__screen"
                  type="text"
                  value={product.quantity}
                  readOnly
                />
                <button
                  className="quantity-input__modifier quantity-input__modifier--right"
                  onClick={() => addProductToBasketHandler(product.productId)}
                >
                  <FontAwesomeIcon icon={faAdd} />
                </button>
              </div>
              <div className="basket-product-total-price">
                Item total: {product.productPrice * product.quantity}kr
              </div>
            </div>

            <button
              className={"close-modal"}
              onClick={() => removeAllProducts(product.productId)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        ))}
      </div>

      <div className={"basket-summary"}>
        <div>Total: {basketTotal} DKK</div>
        <button className={"product-button checkout-button"}>Check out</button>
      </div>
    </div>
  );
};
