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

export async function getBasketByUser(username) {
    const users = await getUsers()
    for (const user in users) {
        if (users[user].username === username) return users[user]

    }
    return false
}


