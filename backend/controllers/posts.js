import mongoose from "mongoose";
import postModel from "../models/postMessage.js";
import { makeResponse } from "../utils/response.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postModel.find();
    makeResponse(res, 200, postMessages, "Retreiving posts successful");
  } catch (error) {
    makeResponse(res, 404, error.message, "Something went wrong");
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const createdPost = await postModel.create({
      ...post,
      creator: req.userID,
    });
    makeResponse(
      res,
      200,
      createdPost,
      "Successfully created the post message"
    );
  } catch (error) {
    makeResponse(res, 404, error.message, "Something went wrong");
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return makeResponse(res, 404, "", "No post with given ID");
  }

  const updatedPost = await postModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  makeResponse(res, 200, updatedPost, "Updating post successful");
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return makeResponse(res, 404, "", "No post with given ID");
  }
  const deletePost = await postModel.findByIdAndDelete(id);
  makeResponse(res, 200, "", "Post deleted successfully");
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return makeResponse(res, 404, "", "No post with given ID");
  }
  const post = await postModel.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userID));
  if (index === -1) {
    post.likes.push(req.userID);
    post.likeCount += 1;
  } else {
    post.likes = post.likes.filter((id) => id !== req.userID);
    post.likeCount -= 1;
  }
  const updatedPost = await postModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  makeResponse(res, 200, updatedPost, "Successfully updated the like count");
};
