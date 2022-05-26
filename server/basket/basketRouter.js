import express from "express";
import {
  removeFromBasket,
  addToBasket,
  getBasket,
} from "./basketController.js";

const router = express.Router();

router.route("/:userId").get(getBasket);
router.route("/").put(addToBasket);
router.route("/").delete(removeFromBasket);

/*
router.route('/delete/:userId').delete(deleteBasket)
router.route("/create").put(createBasket);
 */

export default router;
