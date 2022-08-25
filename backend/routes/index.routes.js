import Express, { application } from "express";
import authRouter from "./auth.routes.js";
import postRouter from "./posts.routes.js";
const router = Express.Router()

router.use("/posts", postRouter)
router.use("/auth", authRouter)

export default router