import {getAllProducts, getProductById} from "./productModel.js"

export async function allProducts(req, res) {
    try {
        const products = await getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function productById(req, res) {
    try {
        const product = await getProductById(req.params.id)
        res.json(product)
    } catch {
        res.status(500).send("Invalid ID")
    }
}