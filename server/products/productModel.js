import fs from "fs/promises";
import {
  filterByBrand,
  filterByRoast,
  filterForDiscountedProducts,
} from "./filterFunctions.js";

const PRODUCTS_FILE = "./products/products.json";

export async function getAllProducts() {
  try {
    let products = await fs.readFile(PRODUCTS_FILE);
    return JSON.parse(products);
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    } else throw err;
  }
}

export async function getProductById(id) {
  let products = await getAllProducts();
  return products[parseInt(id)];
}

export async function getFilteredProducts(filters) {
  let products = await getAllProducts();
  for (const category in filters) {
    if (category === "brand") {
      products = filterByBrand(products, filters["brand"]);
    } else if (category === "discount") {
      products = filterForDiscountedProducts(products, filters["discount"]);
    } else if (category === "roast") {
      products = filterByRoast(products, filters["roast"]);
    }
  }
  return products;
}

export async function getCategoryNames() {
  let product = await getProductById(1);
  return Object.keys(product["productCategories"]);
}
