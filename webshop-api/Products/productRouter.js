import express from "express"
import { allProducts } from "./productController.js"

const router = express.Router()

router.route('/all').get(allProducts)

export default router;