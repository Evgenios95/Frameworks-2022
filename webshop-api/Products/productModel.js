import fs from "fs/promises";

const PRODUCTS_FILE = "./Products/products.json";

export async function getAllProducts() {
    try {
        let productsTxt = await fs.readFile(PRODUCTS_FILE);
        let products = JSON.parse(productsTxt);
        return products;
    } catch (err) {
        console.log(err)
        if (err.code === "ENOENT") {
            return [];
        } else throw err;
    }
}

export async function getProductById(id) {
    let products = await getAllProducts();
    return products[parseInt(id) - 1];
}
