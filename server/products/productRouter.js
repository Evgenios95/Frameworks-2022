import express from "express";
import { productById, filterProducts } from "./productController.js";

const router = express.Router();

router.route("/:id").get(productById);
router.route("/").get(filterProducts);
export default router;
