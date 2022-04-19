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
        "userID": Object.keys(users).length + 1,
        "username": username,
        "password": password,
        "email": email

    }
    users.push(newUser)
    await fs.writeFile(USERS_FILE, JSON.stringify(users))
    return newUser
}

async function isUniqueEmail(email) {
    const users = await getUsers()
    const userIndex = users.findIndex((currentUser) => currentUser.email === email)
    return users[userIndex] === undefined;
}

async function isValidPassword(email, password) {
    const user = await getUserByEmail(email);
    return user.password === password;

}

async function getUserByEmail(email) {
    const users = await getUsers()
    const userIndex = users.findIndex((currentUser) => currentUser.email === email)
    const currentUser = users[userIndex]
    if (currentUser === undefined) throw Error("User does not exists");

    return currentUser
}

export async function getUserById(id) {
    const users = await getUsers();
    const userIndex = users.findIndex((currentUser) => currentUser.userID === id)
    const currentUser = users[userIndex]
    if (currentUser === undefined) throw Error("User does not exists");
    return currentUser;
}



