import axios from "axios";

export async function transformBasket(basket) {
    const productsReq = await axios.get('product/all')
    const products = productsReq.data
    const basketCounts = basket.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const productInfo = [];
    for (const productId of basketCounts.keys()) {
        const productIndex = products.findIndex(product => product.productId === productId)
        products[productIndex]['quantity'] = basketCounts.get(productId)
        productInfo.push(products[productIndex]);
    }
    return productInfo
}

export async function removeOneFromBasket(productId, user) {
    if (user) {
        const basketReq = await axios.post("/basket/remove", {
            "userId": user.userID,
            "productId": productId,
            "all": false
        })
        return basketReq.data.newBasket;
    } else {

    }
}

export async function removeAllFromBasket(productId, user) {
    if (user) {

    } else {

    }
}