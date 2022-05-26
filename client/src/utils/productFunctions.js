import axios from "axios";
import { productImages } from "./productImages";

export async function fetchDiscountedProducts() {
  const productsReq = await axios.get("/products?discount=true");

  const products = productsReq.data.products;
  return products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchSimilarRoastedProducts(productId, value) {
  const url = "/products?roast=" + value;
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
  const url = "/products/" + id;
  const productReq = await axios.get(url);
  var product = productReq.data;
  product.productImage = productImages[id];
  return productReq.data;
}

export async function fetchAllProducts() {
  const productsReq = await axios.get("/products");
  const products = productsReq.data;
  return products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}

export async function fetchFilteredProducts(filter) {
  const url = "/products?" + new URLSearchParams(filter).toString();
  const productsReq = await axios.get(url);

  return productsReq.data.products.map((product) => {
    const productId = parseInt(product.productId);
    product.productImage = productImages[productId];
    return product;
  });
}
