import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const FriendListItem = ({ avatarSrc, name, mutualFriends }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={avatarSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {mutualFriends} amigos em comum
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

const FriendList = () => {
  const classes = useStyles();

  const friends = [
    {
      id: 1,
      name: 'Amanda',
      avatarSrc: 'https://picsum.photos/200/200',
      mutualFriends: 3,
    },
    {
      id: 2,
      name: 'John',
      avatarSrc: 'https://picsum.photos/200/200',
      mutualFriends: 2,
    },
    {
      id: 3,
      name: 'José',
      avatarSrc: 'https://picsum.photos/200/200',
      mutualFriends: 5,
    },
  ];

  return (
    <List className={classes.root}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
};

export default FriendList;
