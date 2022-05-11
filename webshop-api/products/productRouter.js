import express from "express";
import {
  productById,
  allCategories,
  filterProducts,
} from "./productController.js";

const router = express.Router();

router.route("/categories").get(allCategories);
router.route("/:id").get(productById);
router.route("/").get(filterProducts);
export default router;
