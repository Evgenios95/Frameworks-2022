import "./style.css";
import React from "react";
import { capitalizeFirstLetter } from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClose, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  addProductToBasket,
  removeAllFromBasket,
  removeOneFromBasket,
} from "../../utils/functions";
import { useBasketUpdate } from "../../utils/providers/UserProvider";

export interface BasketProductInterface {
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

export const BasketProduct = ({
  product,
}: {
  product: BasketProductInterface;
}) => {
  const setBasket: (basket: number[]) => void = useBasketUpdate();

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

  return (
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
          <div className="basket-product-price">{product.productPrice}kr</div>
          {" | "}
          {product.productWeight}
          <p>{product.productCategories.roast} roast</p>
        </div>

        <div className="basket-product-description">{product.description}</div>
      </div>

      <div className="basket-price-qty">
        <div className="basket-product-total-price">
          Item total: {product.productPrice * product.quantity} kr
        </div>
        <div className="quantity-input">
          <button
            className="quantity-input__modifier quantity-input__modifier--left"
            onClick={() => removeProductFromBasketHandler(product.productId)}
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
      </div>

      <button
        className={"close-modal"}
        onClick={() => removeAllProducts(product.productId)}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
};
