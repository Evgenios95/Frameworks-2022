import express from "express";
import {
    allProducts,
    filteredProducts,
    productById,
} from "./productController.js";

const router = express.Router();

router.route("/all").get(allProducts);
router.route("/filtered").get(filteredProducts);
router.route("/:id").get(productById);

export default router;
