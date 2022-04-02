const express = require("express");
const app = express();
const port = 3000;

const basketRouter = require('./routes/basket.js')

app.use('/basket', basketRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`${port}`);
});

