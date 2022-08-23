import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;