import React from 'react';
import { useStyles } from './styles';

const Post = ({ posts }) => {
  const classes = useStyles();
  return (
    <div>
      {posts.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <h1>{post.creator}</h1>
        </div>
      ))}
    </div>
  );
};

export default Post;
