import Express from "express";
import { createPost, getPosts } from "../controllers/posts.js";
const postRouter = Express()

postRouter.get("/" , getPosts)
postRouter.post("/" , createPost)


export default postRouter