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

export async function processLogin(email, password) {
    const isValid = await isValidPassword(email, password)
    if (!isValid) throw Error("Invalid email and password combination")
    return await getUserByEmail(email)
}

export async function processRegister(username, password, email) {
    const isUnique = await isUniqueEmail(email)
    if (!isUnique) throw Error("User already exists")
    return await addNewUser(username, password, email)

}

async function addNewUser(username, password, email) {
    const users = await getUsers()
    const newUser = {
        "userID": Object.keys(users).length+1,
        "username": username,
        "password": password,
        "email": email,
        "basket": []
    }
    users.push(newUser)
    await fs.writeFile(USERS_FILE, JSON.stringify(users))
    return newUser
}

async function isUniqueEmail(email) {
    const users = await getUsers()
    for (const user in users) {
        if (users[user].email === email) return false
    }
    return true
}

async function isValidPassword(email, password) {
    const users = await getUsers()
    for (const user in users) {
        if (users[user].email === email) return users[user].password === password
    }
    return false
}

async function getUserByEmail(email) {
    const users = await getUsers()
    for (const user in users) {
        if (users[user].email === email) return users[user]
    }
    return false
}

