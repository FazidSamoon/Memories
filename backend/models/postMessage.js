import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  name: {
    type: String,
  },
  tags: {
    type: Array,
  },
  selectedFile: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  likes: { 
    type: [String], 
    default: [] 
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postModel = mongoose.model("PostMessage", postSchema);
export default postModel;
