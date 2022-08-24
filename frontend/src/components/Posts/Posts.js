import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { getPosts } from "../../redux/actions/posts";

const Posts = ({ setCurrentID }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    getPosts();
  }, []);
  
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentID={setCurrentID} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
