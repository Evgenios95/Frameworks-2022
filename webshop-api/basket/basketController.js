import {getBasketById, createNewBasket, deleteAll, addProduct, removeProduct} from "./basketModel.js"

export async function getBasket(req, res) {
    try {
        const userId = parseInt(req.params.userId)
        const basket = await getBasketById(userId)
        if (basket) {
            res.json(basket).end()
        } else {
            res.status(500).send("User has no basket").end();
        }
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
        res.json({newBasket: basket})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function removeFromBasket(req, res) {
    try {
        const userId = parseInt(req.body.userId)
        const productId = parseInt(req.body.productId)
        const all = req.body.all
        const response = await removeProduct(userId, productId, all)
        res.json({newBasket: response})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

