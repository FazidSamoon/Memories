import Express from "express";
import { registerUser, userLogin } from "../controllers/auth";
const authRouter = Express.Router()

authRouter.post("/login", userLogin)
authRouter.post("/register", registerUser)

export default authRouter