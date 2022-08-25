import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../redux/actions/posts";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.mainContainer}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentID={setCurrentID} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentID={currentID} setCurrentID={setCurrentID} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
