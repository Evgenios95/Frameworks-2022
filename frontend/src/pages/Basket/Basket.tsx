import "./style.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NoResultImg from "./../../assets/coffee.gif";

import {
  addProductToBasket,
  removeOneFromBasket,
  removeAllFromBasket,
  transformBasket,
} from "../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClose,
  faMinus,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../components/Product/Product";

interface BasketProps {
  basket: [];
  setBasket: (basket: []) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: " #f2eee5",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

export const Basket = ({ basket, setBasket }: BasketProps) => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <div className={"basketContentWrapper"}>
        {basketProducts.length === 0 && (
          <div className={"noBasketMessage"}>
            <p>There is nothing in your basket.</p>
            <img src={NoResultImg} alt="No basket content" />
          </div>
        )}
        {basketProducts.map((product: BasketProduct) => (
          <div className={"basket-product"} key={product.productId}>
            <div className={"basket-image-wrapper"}>
              <img src={product.image} alt="Product pic" />
            </div>

            <div className={"basketMeta"}>
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

            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Are you sure you would like to remove all{" "}
                    <span className="modal-product-name">
                      {product.productName}
                    </span>{" "}
                    from your basket?
                  </Typography>
                  <div className="modal-button-wrapper">
                    <button
                      className="product-button modal-button"
                      onClick={() => {
                        removeAllProducts(product.productId);
                        handleClose();
                      }}
                    >
                      Remove
                    </button>
                    <button
                      className="product-button modal-button"
                      onClick={handleClose}
                    >
                      Keep
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>

            <button className={"closeModal"} onClick={handleOpen}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        ))}
      </div>

      <div className={"basketSummary"}>
        <div>Total: {basketTotal} DKK</div>
        <button className={"product-button checkout-button"}>Check out</button>
      </div>
    </div>
  );
};
