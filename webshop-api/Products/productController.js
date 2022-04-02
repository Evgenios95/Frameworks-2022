import {getAllProducts} from "./productModel.js"

export async function allProducts(req, res) {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}