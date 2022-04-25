import express from "express";
import {login, register} from "./userController.js";

const userRouter = express.Router()

userRouter.route('/login').post(login)
userRouter.route('/register').post(register)

export default userRouter