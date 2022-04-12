import {getBasketByUser} from "./basketModel.js"

export async function basketForUser(req, res) {
    const id = parseInt(req.params.id);
    try {
        const basket = await getBasketByUser(id)
        res.json(basket)
    } catch {
        res.status(500).send("Invalid ID")
    }
}

// export async function basketForUser(req, res) {
//     const user = parseInt(req.params.id);
//     try {
//       const cart = await getBasketByUser(user);
//       console.log(cart);
//       res.json(cart);
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   }

export async function createBasket(req, res) {
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

export async function deleteBasket(req, res) {
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