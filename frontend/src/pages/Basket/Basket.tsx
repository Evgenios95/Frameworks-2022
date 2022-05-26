import "./style.css";
import React, { useEffect, useState } from "react";
import NoResultImg from "./../../assets/coffee.gif";
import { transformBasket } from "../../utils/functions";
import { useBasket } from "../../utils/providers/UserProvider";
import { BasketProduct } from "../../components/BasketProduct";
import { BasketProductInterface } from "../../components/BasketProduct/BasketProduct";

export const Basket = () => {
  const basket: number[] = useBasket();

  const [basketProducts, setBasketProducts] = useState<
    BasketProductInterface[]
  >([]);
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
    <div className={"basket-page"}>
      <div className={"basket-content-wrapper"}>
        {basketProducts.length === 0 && (
          <div className={"empty-basket-message"}>
            <p>There is nothing in your basket.</p>
            <img src={NoResultImg} alt="No basket content" />
          </div>
        )}
        {basketProducts.map((product: BasketProductInterface) => (
          <BasketProduct product={product} />
        ))}
      </div>

      <div className={"basket-summary"}>
        <div>Total: {basketTotal} DKK</div>
        <button className={"product-button checkout-button"}>Check out</button>
      </div>
    </div>
  );
};
