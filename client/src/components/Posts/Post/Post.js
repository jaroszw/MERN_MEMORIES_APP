import React from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import moment from 'moment';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <React.Fragment>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <ThumbUpOffAltIcon fontSize="small" />
        &nbsp;Like
      </React.Fragment>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {user?.result?.googleId === post?.creator ||
          (user?.result?._id === post?.creator && (
            <Button
              style={{ color: 'white' }}
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              <MoreHorizIcon fontSize="inherit" />
            </Button>
          ))}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => ` #${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <Likes />
        </Button>
        {user?.result?.googleId === post?.creator ||
          (user?.result?._id === post?.creator && (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                dispatch(deletePost(post._id));
              }}
            >
              <DeleteOutlineIcon fontSize="small" /> Delete
            </Button>
          ))}
      </CardActions>
    </Card>
  );
};

export default Post;
