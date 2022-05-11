import axios from "axios";
import { productImages } from "./productImages";

export async function transformBasket(basket) {
  const productsReq = await axios.get("product");
  const products = productsReq.data;
  const basketCounts = basket.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  const productInfo = [];
  for (const productId of basketCounts.keys()) {
    const productIndex = products.findIndex(
      (product) => product.productId === productId
    );
    products[productIndex]["quantity"] = basketCounts.get(productId);
    productInfo.push(products[productIndex]);
  }
  return productInfo;
}

export async function removeOneFromBasket(productId, user) {
  if (user) {
    const basketReq = await axios.delete("/basket/remove", {
      userId: user.userID,
      productId: productId,
      all: false,
    });
    return basketReq.data.newBasket;
  } else {
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

    const stringifiedData = JSON.stringify(productData);

    const options = {
      headers: { "content-type": "application/json" },
    };

    const productReq = await axios.put("/basket", stringifiedData, options);

    return productReq.data.newBasket;
  } else {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(productId);
    localStorage.setItem("basket", JSON.stringify(basket));
    return basket;
  }
}

export async function removeAllFromBasket(productId, user) {
  if (user) {
  } else {
  }
}

export async function fetchDiscountedProducts() {
  const productsReq = await axios.get("/product?discount=true");

  const products = productsReq.data.products;
  return products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchSimilarRoastedProducts(productId, value) {
  const filter = {
    filters: {
      roast: value,
    },
  };
  const url = "/product?" + new URLSearchParams(filter).toString();
  const productsReq = await axios.get(url);
  let products = productsReq.data.products;
  products = products.filter(
    (product) => product.productId !== parseInt(productId)
  );
  return products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchProductInfo(id) {
  const url = "/product/" + id;
  const productReq = await axios.get(url);
  var product = productReq.data;
  product.productImage = productImages[id];
  return productReq.data;
}

export async function fetchAllProducts() {
  const productsReq = await axios.get("/product");
  const products = productsReq.data;
  return products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchFilteredProducts(filter) {
  const url = "/product?" + new URLSearchParams(filter).toString();
  const productsReq = await axios.get(url);

  return productsReq.data.products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}
