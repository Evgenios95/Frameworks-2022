import fs from "fs/promises";
import {getUserById, getUsers} from "../user/userModel.js";

const USERS_FILE = "./user/users.json";

export async function getBasketById(id) {
    const currentUser = await getUserById(id);
    if (currentUser === undefined) throw Error("User does not exist");
    return currentUser.basket || false;
}


export async function createNewBasket(id) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID === id);
    const currentUser = users[userIndex];

    if (currentUser === undefined) throw Error("User does not exists");
    if (currentUser.basket) throw Error("User already has a basket");

    currentUser["basket"] = []
    await fs.writeFile(USERS_FILE, JSON.stringify(users));
}


export async function deleteAll(id) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID === id);
    const currentUser = users[userIndex];

    if (currentUser === undefined) throw Error("User does not exists");
    if (!currentUser.basket) throw Error("User does not have a basket");

    delete currentUser.basket;

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
}

export async function addProduct(userId, productId) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID === userId);
    const currentUser = users[userIndex];

    if (currentUser === undefined) throw Error("User does not exists");
    if (!currentUser.basket) throw Error("User has no basket");

    currentUser.basket.push(productId)

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
    return currentUser.basket
}


export async function removeProduct(userId, productId, all) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID === userId);
    const currentUser = users[userIndex];

    if (currentUser === undefined) throw Error("User does not exists");
    if (!currentUser.basket) throw Error("User has no basket");

    if (all) {
        currentUser.basket = currentUser.basket.filter(product => product !== productId)
    } else {
        for (var i = 0; i < currentUser.basket.length; i++) {
            if (currentUser.basket[i] === productId) {
                currentUser.basket.splice(i, 1)
                break
            }
        }
    }

    await fs.writeFile(USERS_FILE, JSON.stringify(users));
    return currentUser.basket
}










