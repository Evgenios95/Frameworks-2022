import fs from "fs/promises";

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
    let currentUser = null;
    for (const user in users) {
        if (users[user].userID == parseInt(id)) currentUser = users[user];
    }
    return currentUser;
}

export async function basketExists(id) {
    const currentUser = await getUserByID(id);
    if(!currentUser.basket) return false;
    return true;
}

export async function userExists(id) {
    const currentUser = await getUserByID(id);
    if(currentUser == null) return false;
    return true;
}

export async function getBasket(id) {
    const currentUser = await getUserByID(id);
    if(currentUser == null) throw Error("User does not exists");
    if(!currentUser.basket) throw Error("User has no basket");
    return currentUser.basket;
}



export async function createNewBasket(id) {
    const users = await getUsers();
    let user = await getUserByID(id);
    if(user == null) throw Error("User does not exists");
    if(user.basket) throw Error("User already has a basket");

    let basket = {
                "products": [],
                "totalPrice": 0,
                
    }
    user = users[id-1];
    user["basket"] = basket;
    await fs.writeFile(USERS_FILE, JSON.stringify(users));
    }

export async function deleteAll(id) {
    const users = await getUsers();
    let user = await getUserByID(id);
    if(user == null) throw Error("User does not exists");
    if(!user.basket) throw Error("User has no basket");

    user = users[id-1];
    const basket = "basket";
    delete user.basket;
    await fs.writeFile(USERS_FILE, JSON.stringify(users));
    }












