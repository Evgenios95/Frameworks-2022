import fs from "fs/promises";

const PRODUCTS_FILE = "./products.json";

export async function getAllProducts() {
    try {
        let productsTxt = await fs.readFile(PRODUCTS_FILE);
        let products = JSON.parse(productsTxt);
        return products;
    } catch (err) {
        if (err.code === "ENOENT") {
            return [];
        } else throw err;
    }
}