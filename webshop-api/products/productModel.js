import fs from "fs/promises";

const PRODUCTS_FILE = "./products/products.json";

export async function getAllProducts() {
  try {
    let products = await fs.readFile(PRODUCTS_FILE);
    let parsedProducts = JSON.parse(products);
    return parsedProducts;
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    } else throw err;
  }
}

export async function getProductById(id) {
  let products = await getAllProducts();
  return products[parseInt(id) - 1];
}

export async function getFilteredProducts(queryCategory) {
  try {
    let products = await getAllProducts();

    const filteredProducts = products.filter((product) => {
      const filteredCategory = Object.values(product.productCategories).find(
        (category) => category === queryCategory
      );

      return filteredCategory;
    });

    return filteredProducts;
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    } else throw err;
  }
}
