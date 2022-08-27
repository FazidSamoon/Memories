import Jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwt";
import { makeResponse } from "../utils/response.js";

export const verifyAccessToken = async(req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return makeResponse(res,400,"","Not authorized....")
    }
    const isCustomAuthHeader = authHeader.length < 1000
    if(isCustomAuthHeader) {
        const token = authHeader.split(" ")[1]; 
        const decodedUser = await verifyToken(token)
        req.userID = decodedUser.userID
    } else {
        const token = authHeader.split(" ")[1]; 
        const decodedUser = Jwt.decode(token)
        req.userID = decodedUser.sub
    }
    next()
}