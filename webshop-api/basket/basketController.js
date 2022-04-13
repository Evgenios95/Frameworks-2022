import {getBasket, createNewBasket, deleteAll} from "./basketModel.js"

export async function basketForUser(req, res) {
    try {
        const basket = await getBasket(req.params.id)
        res.json(basket)
    } catch(error) {
        res.status(500).send(error.message)
    }
}


export async function create(req, res) {
    try {
        await createNewBasket(req.params.id)
        res.json({success: "Basket created"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteBasket(req, res) {
    try {
        await deleteAll(req.params.id)
        res.json({success: "Basket deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function removeFromBasket(req, res) {
    try {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const user = await processRegister(username, password, email)
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function addToBasket(req, res) {
    try {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const user = await processRegister(username, password, email)
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
