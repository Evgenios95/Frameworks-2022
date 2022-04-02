import express from "express"
import basketRouter from "./routes/basket.js"
import productRouter from "./Products/productRouter.js"
import userRouter from "./routes/user.js"

const app = express();
const port = 3000;

//routing for Basket
app.use('/basket', basketRouter);

//routing for Products
app.use('/product', productRouter);

//routing for User
app.use('/user', userRouter);

//Listening to requests
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

