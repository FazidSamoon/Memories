import postModel from "../models/postMessage.js";
import { makeResponse } from "../utils/response.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postModel.find();
    makeResponse(
      res,
      200,
      postMessages,
      "Retreiving posts successful"
    );
  } catch (error) {
    makeResponse(res, 404, error.message, "Something went wrong");
  }
};

export const createPost = async (req, res) => {
  try {
    const createdPost = await postModel.create(req.body);
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
