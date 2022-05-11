import axios from "axios";
import { productImages } from "./productImages";

export async function transformBasket(basket) {
  //get basket into {ID: quantity} form
  const basketCounts = basket.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  //fetch All Products
  const productsReq = await axios.get("/product");
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

export async function removeOneFromBasket(productId, user) {
  const suser = localStorage.getItem("user") || null;
  if (suser) {
    //loggedIn
    const userObject = JSON.parse(suser);
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
