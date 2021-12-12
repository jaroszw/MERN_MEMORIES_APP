import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useStyles } from '../Posts/Post/styles';
import { getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  const dispatch = useDispatch();
  const posts = useSelector((status) => status.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
