import React from 'react';
import Post from './Post/Post';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const classes = useStyles();

  return (
    <React.Fragment>
      <h1>POSTS</h1>
      <Post posts={posts} />
    </React.Fragment>
  );
};

export default Posts;
