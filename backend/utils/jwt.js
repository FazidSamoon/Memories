import Jwt from "jsonwebtoken";

export const generateAccessToken = async (user) => {
  const { _id, email } = user;
  const token = Jwt.sign(
    { userID: _id, email: email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRATION_TIME }
  );
  return token;
};

export const verifyToken = async (token) => {
  return Jwt.verify(token, process.env.JWT_SECRET_KEY);
};
