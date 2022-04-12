import fs from "fs/promises";

const USERS_FILE = "./user/users.json";

export async function getUsers() {
    try {
        const usersTxt = await fs.readFile(USERS_FILE)
        return JSON.parse(usersTxt)
    } catch (error) {
        if (error.code === "ENOENT") {
            return []
        } else throw error
    }
}



export async function getBasketByUser(id) {
    const users = await getUsers()
    for (const user in users) {
        if (users[user].userID === id) return users[user]
    }
    return false;
}

// export async function getBasketByUser(id) {
//     let users = await getUsers();
//     if (users) {
//       const filteredUsers = users.filter((user) => user.userID === id);
//       const userCart = filteredUsers[0].basket;
//       if (!userCart) {
//         throw new Error("This user has no cart");
//       }
//       return userCart;
//     }
//   }




