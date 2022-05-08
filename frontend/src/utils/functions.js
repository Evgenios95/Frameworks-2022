import axios from "axios";
import { productImages } from "./productImages";

export async function transformBasket(basket) {
  const productsReq = await axios.get("product/all");
  const products = productsReq.data;
  const basketCounts = basket.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  const productInfo = [];
  for (const productId of basketCounts.keys()) {
    const productIndex = products.findIndex(product => product.productId === productId);
    products[productIndex]["quantity"] = basketCounts.get(productId);
    productInfo.push(products[productIndex]);
  }
  return productInfo;
}

export async function removeOneFromBasket(productId, user) {
  if (user) {
    const basketReq = await axios.post("/basket/remove", {
      "userId": user.userID,
      "productId": productId,
      "all": false
    });
    return basketReq.data.newBasket;
  } else {

  }
}

export async function removeAllFromBasket(productId, user) {
  if (user) {

  } else {

  }
}

export async function fetchDiscountedProducts() {
  const filter = {
    "filters": {
      "discount": true
    }
  };
  const productsReq = await axios.post("/product/filter", filter);
  const products = productsReq.data.products;
  return products.map(product => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchSimilarRoastedProducts(productId, value) {
  const filter = {
    "filters": {
      "roast": value
    }
  };
  const productsReq = await axios.post("/product/filter", filter);
  var products = productsReq.data.products;
  products = products.filter(product => product.productId !== parseInt(productId));
  return products.map(product => {
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
  const productsReq = await axios.get("/product/all");
  const products = productsReq.data;
  return products.map(product => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchFilteredProducts(filter) {
  const data = {
    "filters": filter
  };
  const productsReq = await axios.post("/product/filter", data);
  return productsReq.data.products.map(product => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}