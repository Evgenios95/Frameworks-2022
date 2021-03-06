import { processLogin, processRegister } from "./userModel.js";

export async function login(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await processLogin(email, password);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function register(req, res) {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;
    const user = await processRegister(firstname, lastname, password, email);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
