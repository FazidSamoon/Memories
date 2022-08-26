import authModel from "../models/userModel";
import { makeResponse } from "../utils/response.js";
import bcrypt from "bcrypt";
import { bcryptPassword, comparePassword } from "../utils/bcryptPassword";
import { generateAccessToken } from "../utils/jwt";

export const userLogin = async (req, res) => {
  const { email, password: userPassword } = req.body;
  try {
    const user = await authModel.findOne({ email }).lean();
    if (!user) {
      return makeResponse(res, 404, "", "No user with given credentials");
    }
    const hashedPassword = user.password;
    const comparedPassword = await comparePassword(
      userPassword,
      hashedPassword
    );
    if(!comparedPassword) {
        return makeResponse(res, 400, "", "Username or password incorrect");
    }

    const token = await generateAccessToken({
      email: user.email,
      id: user._id,
    });
    delete user.password
    makeResponse(res, 200, { user, token }, "Login successful");
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (req, res) => {
  const data = req.body;
  const { email, username, password } = data;
  if (!email || !password || !username) {
    return makeResponse(res, 404, "", "Please provide required data");
  }
  const user = await authModel.findOne({ email });
  if (user) {
    return makeResponse(
      res,
      400,
      "",
      "User with given email address already exists.... Please choose another adderess"
    );
  }
  const hashedPassword = await bcryptPassword(password);
  const tempUser = { email, username, password: hashedPassword };
  const response = await authModel.create(tempUser);
  const token = await generateAccessToken({
    email: response.email,
    id: response._id,
  });
  delete response.password
  makeResponse(res, 200, { response, token }, "User successfully created");
};
