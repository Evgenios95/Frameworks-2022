import axios from "axios";
import { productImages } from "./productImages";

export async function transformBasket(basket) {
  //get basket into {ID: quantity} form
  const basketCounts = basket.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  //fetch All Products
  const productsReq = await axios.get("/products");
  const products = productsReq.data.products;

  //add meta data of products to products in the basket
  const productInfo = [];
  for (const productId of basketCounts.keys()) {
    const productIndex = products.findIndex(
      (product) => product.productId === productId
    );
    products[productIndex]["quantity"] = basketCounts.get(productId);
    products[productIndex]["image"] = productImages[productId];
    productInfo.push(products[productIndex]);
  }
  return productInfo;
}

export async function removeOneFromBasket(productId) {
  const currentUser = localStorage.getItem("user") || null;
  if (currentUser) {
    //loggedIn
    const userObject = JSON.parse(currentUser);
    const productData = {
      userId: userObject.userID,
      productId: productId,
      all: false,
    };

    const productReq = await axios.delete("/basket", { data: productData });

    return productReq.data.newBasket;
  } else {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    for (var i = 0; i < basket.length; i++) {
      if (basket[i] === productId) {
        basket.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    return basket;
  }
}

export async function addProductToBasket(productId) {
  const suser = localStorage.getItem("user") || null;
  if (suser) {
    //loggedIn
    const userObject = JSON.parse(suser);
    const productData = {
      userId: userObject.userID,
      productId: productId,
    };

    const options = {
      headers: { "content-type": "application/json" },
    };

    const productReq = await axios.put("/basket", productData, options);

    return productReq.data.newBasket;
  } else {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(productId);
    localStorage.setItem("basket", JSON.stringify(basket));
    return basket;
  }
}

export async function removeAllFromBasket(productId) {
  const suser = localStorage.getItem("user") || null;
  if (suser) {
    const userObject = JSON.parse(suser);
    const productData = {
      userId: userObject.userID,
      productId: productId,
      all: true,
    };
    const productReq = await axios.delete("/basket", { data: productData });
    return productReq.data.newBasket;
  } else {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket = basket.filter((product) => product !== productId);
    localStorage.setItem("basket", JSON.stringify(basket));
    return basket;
  }
}
