import {getBasketByUser} from "./basketModel.js"

export async function basketForUser(req, res) {
    try {
        const product = await getBasketByUser(req.params.username)
        res.json(user)
    } catch {
        res.status(500).send("Invalid ID")
    }
}

export async function create(req, res) {
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