import Express, { application } from "express";
import postRouter from "./posts.routes.js";
const router = Express.Router()

router.use("/posts", postRouter)

export default router