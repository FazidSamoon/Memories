import Express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import { verifyAccessToken } from "../middleware/auth.js";
const postRouter = Express();

postRouter.get("/", getPosts);
postRouter.post("/", verifyAccessToken, createPost);
postRouter.patch("/:id", verifyAccessToken, updatePost);
postRouter.delete("/:id", verifyAccessToken, deletePost);
postRouter.patch("/likePost/:id", verifyAccessToken, likePost);

export default postRouter;
