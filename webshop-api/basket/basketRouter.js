import express from "express"
import {create, removeFromBasket, basketForUser, addToBasket} from "./basketController.js"

const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('Basket')
// })

router.route('/user/:username').post(create)
router.route('/user/:username').put(addToBasket)
router.route('/user/:username').get(basketForUser)
router.route('/user/:username/product/:id').delete(removeFromBasket)




export default router
