import fs from "fs/promises";

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

export async function getFilteredProducts(queryCategory) {
    let products = await getAllProducts();
    return await applyAllFilters(products, queryCategory);
}

export async function applyAllFilters(products, queryCategory) {
    //maybe loop through the different filters here and invoke the appropriate ones
    const filteredProducts = await filterByBrandORRoast(products, queryCategory)
    //filteredProducts = await filterByBrandAndRoast(filteredProduct, queryValue)

    return filteredProducts;
}

export async function filterByBrandORRoast(products, queryCategory) {
    // would be nice if we split it to two different functions so we just need one simple condition in the filter function
    return products.filter((product) => product["productCategories"]["roast"] === queryCategory || product["productCategories"]["brand"] === queryCategory);
}

export async function getCategoryNames() {
   let product = await getProductById(1);
   const arrayOfCategories = Object.keys(product["productCategories"])
   
   return arrayOfCategories;


}