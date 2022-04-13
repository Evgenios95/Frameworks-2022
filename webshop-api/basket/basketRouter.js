import express from "express"
import {create, deleteBasket, removeFromBasket, basketForUser, addToBasket} from "./basketController.js"

const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('Basket')
// })

router.route('/user/:id').post(create)
router.route('/user/:id').delete(deleteBasket)
router.route('/user/:id').get(basketForUser)
router.route('/user/:id/product/:pid').delete(removeFromBasket)
router.route('/user/:id/product/:pid').put(addToBasket)




export default router
