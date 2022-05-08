import "./style.css";
import React, { useEffect, useState } from "react";
import { removeOneFromBasket, transformBasket } from "../../utils/functions";

interface BasketProps {
  basket: [];
  user: string | boolean;
  setUser: (user: any) => void;
  setBasket: (basket: []) => void;
}

export const Basket = ({ basket, user, setUser, setBasket }: BasketProps) => {
  const [basketProducts, setBasketProducts] = useState<{} | any | []>([]);
  const [basketTotal, setBasketTotal] = useState(0);

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
        {basketProducts.map((product: any) => (
          <div className={"basketProduct"} key={product.productId}>
            <h1>{product.productName}</h1>
            <p>{product.description}</p>
            <p>{product.productWeight}</p>
            <h3>{product.productPrice} DKK</h3>
            <button
              className={"removeItem"}
              onClick={async () => {
                const newBasket = await removeOneFromBasket(
                  product.productId,
                  user
                );
                if (user) {
                  setUser((user: { basket: any }) => {
                    user.basket = newBasket;
                    return user;
                  });
                } else {
                  setBasket(newBasket);
                }
                console.log(basket);
              }}
            >
              -
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
