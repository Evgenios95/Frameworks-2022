import express from "express"
import {
    createBasket,
    deleteBasket,
    removeFromBasket,
    addToBasket,
    getBasket
} from "./basketController.js"

const router = express.Router()

router.route('/create').put(createBasket)
router.route('/delete/:userId').delete(deleteBasket)
router.route('/get/:userId').get(getBasket)
router.route('/add').post(addToBasket)
router.route('/user/:id/product/:pid').delete(removeFromBasket)
router.route('/user/:id/product/:pid').put(addToBasket)

export default router
