import express from "express";
import {
    allProducts,
    productById,
    allCategories,
    filterProducts
} from "./productController.js";

const router = express.Router();

router.route("/all").get(allProducts);
router.route("/filter").post(filterProducts)
router.route("/categories").get(allCategories);
router.route("/:id").get(productById);

export default router;
