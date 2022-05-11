import "./style.css";
import React, { useEffect, useState } from "react";
import NoResultImg from "./../../assets/coffee.gif";

import {
  addProductToBasket,
  removeOneFromBasket,
  removeAllFromBasket,
  transformBasket,
} from "../../utils/functions";

interface BasketProps {
  basket: [];
  user: string | boolean;
  setUser: (user: any) => void;
  setBasket: (basket: []) => void;
}

interface Product {
  productId: number;
  productName: string;
  productWeight: string;
  productPrice: number;
  quantity: number;
  image: any;
  description: string;
}

export const Basket = ({ basket, user, setUser, setBasket }: BasketProps) => {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
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
    <div className={"basketPage"}>
      <div className={"basketContentWrapper"}>
        {basketProducts.length === 0 && (
          <div className={"noBasketMessage"}>
            <p>There is nothing in your basket.</p>
            <img src={NoResultImg} alt={"No basket content"} />
          </div>
        )}
        {basketProducts.map((product: Product) => (
          <div className={"basketProduct"} key={product.productId}>
            <div className={"basketImageWrapper"}>
              <img src={product.image} />
            </div>
            <div className={"basketMeta"}>
              <h1>{product.productName}</h1>
              <p>{product.description}</p>
              <p>{product.productWeight}</p>
              <h3>{product.productPrice} DKK</h3>
              <p>Qty: {product.quantity}</p>
              <div className={"editQtyInBasket"}>
                <button
                  onClick={() => addProductToBasketHandler(product.productId)}
                >
                  +
                </button>
                <button
                  onClick={() =>
                    removeProductFromBasketHandler(product.productId)
                  }
                >
                  -
                </button>
              </div>
            </div>
            <button
              className={"removeAllFromBasket"}
              onClick={() => removeAllProducts(product.productId)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className={"basketSummary"}>
        <h1>Total: {basketTotal} DKK</h1>
        <button className={"checkoutButton"}>Check out</button>
      </div>
    </div>
  );
};
