import express from "express";
import {
    allProducts,
    filteredProducts,
    productById,
    categories
} from "./productController.js";

const router = express.Router();

router.route("/all").get(allProducts);
router.route("/filtered").get(filteredProducts);
router.route("/categories").get(categories);
router.route("/:id").get(productById);

export default router;
