import Mongoose from "mongoose";

const authSchema = new Mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const authModel = Mongoose.model("Auth", authSchema);
export default authModel;
