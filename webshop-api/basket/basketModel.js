import fs from "fs/promises";
import {getProductById} from "../products/productModel.js";

const USERS_FILE = "./user/users.json";


export async function getUsers() {
    try {
        const usersTxt = await fs.readFile(USERS_FILE);
        return JSON.parse(usersTxt);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        } else throw error
    }
}

export async function getUserByID(id) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID == id)
    const currentUser = users[userIndex]

    return currentUser;
}


export async function getBasket(id) {
    const currentUser = await getUserByID(id);

    if(currentUser == undefined) throw Error("User does not exists");
    if(!currentUser.basket) throw Error("User has no basket");

    return currentUser.basket;
}



export async function createNewBasket(id) {
    const users = await getUsers();

    const userIndex = users.findIndex((currentUser) => currentUser.userID == id);
    const currentUser = users[userIndex];

    if(currentUser== undefined) throw Error("User does not exists");
    if(currentUser.basket) throw Error("User already has a basket");

    let basket = {
                "products": [],
                "totalPrice": 0,        
    }

    currentUser["basket"] = basket;

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
}


export async function deleteAll(id) {
    const users = await getUsers();

    const userIndex = users.findIndex((currentUser) => currentUser.userID == id);
    const currentUser = users[userIndex];

    if(currentUser == undefined) throw Error("User does not exists");
    if(!currentUser.basket) throw Error("User has no basket");

    const basket = "basket";
    delete currentUser.basket;

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
}

export async function addProduct(id, pid){
    const users = await getUsers();

    const userIndex = users.findIndex((currentUser) => currentUser.userID == id);
    const currentUser = users[userIndex];

    if(currentUser == undefined) throw Error("User does not exists");
    if(!currentUser.basket) throw Error("User has no basket");

    let basketProducts = currentUser.basket.products
    basketProducts.push(pid);

    const product = getProductById(pid);
    
    const productPrice = product.productPrice;

    const newTotal = currentUser.basket.totalPrice + productPrice;
    currentUser.basket.totalPrice = newTotal;

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
    return productPrice;

}














