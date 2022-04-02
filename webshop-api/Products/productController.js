import {getAllProducts} from "./productModel.js"

export async function allProducts(req, res) {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
}