import express from "express";
import basketRouter from "./basket/basketRouter.js";
import productRouter from "./products/productRouter.js";
import { allCategories } from "./products/productController.js";
import { login, register } from "./user/userController.js";

const app = express();
app.use(express.json());
const port = 4000;

//routing for Basket
app.use("/basket", basketRouter);

//routing for Products
app.use("/products", productRouter);
app.route("/categories").get(allCategories);

//routing for User
app.route("/login").post(login);
app.route("/register").post(register);

//Listening to requests
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
