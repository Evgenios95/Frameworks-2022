import express from "express";

const router = express.Router()

import allProducts from "../controllers/productController"

router.route('/all').get(allProducts)

module.exports = router
