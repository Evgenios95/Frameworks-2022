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
router.route('/remove').post(removeFromBasket)


export default router
