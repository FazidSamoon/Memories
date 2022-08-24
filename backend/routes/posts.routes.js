import Express from "express";
import { createPost, getPosts, updatePost, deletePost, likePost } from "../controllers/posts.js";
const postRouter = Express();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", updatePost);
postRouter.delete("/:id", deletePost)
postRouter.patch("/likePost/:id", likePost)

export default postRouter;
