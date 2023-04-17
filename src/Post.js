import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Chat as ChatIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Post = ({ image, title, text, date, likes, comments }) => {
  const classes = useStyles();
  const [numLikes, setNumLikes] = useState(likes);
  const [numComments, setNumComments] = useState(comments);

  const handleLikeClick = () => {
    setNumLikes(numLikes + 1);
  };

  const handleCommentClick = () => {
    setNumComments(numComments + 1);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="span">
          {numLikes}
        </Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add a comment" onClick={handleCommentClick}>
          <ChatIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="span">
          {numComments}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
