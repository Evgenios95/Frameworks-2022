import {getBasketById, createNewBasket, deleteAll, addProduct} from "./basketModel.js"

export async function getBasket(req, res) {
    try {
        const userId = parseInt(req.params.userId)
        const basket = await getBasketById(userId)
        if (!basket) {
            res.status(500).send("User has no basket")
        }
        ;
        res.json(basket)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export async function createBasket(req, res) {
    try {
        await createNewBasket(parseInt(req.body.userId))
        res.json({success: "Basket created"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteBasket(req, res) {
    try {
        const userId = parseInt(req.params.userId)
        await deleteAll(userId)
        res.json({success: "Basket deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export async function addToBasket(req, res) {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const basket = await addProduct(userId, productId);
        res.json(basket)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function removeFromBasket(req, res) {

}

