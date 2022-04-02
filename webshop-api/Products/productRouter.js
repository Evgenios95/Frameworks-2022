import express from "express"

import {allProducts, productById} from "./productController.js"


const router = express.Router()
router.route('/all').get(allProducts)
router.route('/:id').get(productById)

export default router;