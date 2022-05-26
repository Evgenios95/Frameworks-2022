import "./style.css";
import React, { useEffect, useState } from "react";
import NoResultImg from "./../../assets/coffee.gif";
import { useBasket } from "../../utils/providers/UserProvider";
import { BasketProduct } from "../../components/BasketProduct";
import { BasketProductInterface } from "../../components/BasketProduct/BasketProduct";
import { transformBasket } from "../../utils/basketFunctions";

export const Basket = () => {
  // Custom hook utilizing React Context Provider giving the state of basket
  const basket: number[] = useBasket();

  // List of basket products transformed (with product metadata)
  const [basketProducts, setBasketProducts] = useState<
    BasketProductInterface[]
  >([]);

  // Basket total state
  const [basketTotal, setBasketTotal] = useState(0);

  // Handles basket transformation and basket total on changing basket
  useEffect(() => {
    // Transforms current user basket (list of product IDs) into a  list with quantity and product description
    const getBasketInfo = async () => {
      return await transformBasket(basket);
    };

    // Once we have the basket meta-data, we also count the basket total
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
