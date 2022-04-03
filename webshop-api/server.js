import express from "express"
import basketRouter from "./basket/basket.js"
import productRouter from "./products/productRouter.js"
import userRouter from "./user/userRouter.js"

const app = express();
app.use(express.json());
const port = 3000;

//routing for Basket
app.use('/basket', basketRouter)

//routing for Products
app.use('/product', productRouter)

//routing for User
app.use('/user', userRouter)

//Listening to requests
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

