import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Menu from './Menu';
import Post from './Post';
import FriendList from './FriendList';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Menu />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
          <Post
              image="https://picsum.photos/200/300"
              title="Título da postagem"
              text="Texto da postagem. Texto da postagem 1."
              date="14/04/2023"
            />
            <Post
              image="https://picsum.photos/200/300"
              title="Outro título da postagem"
              text="Outro texto da postagem. Texto da postagem 2."
              date="15/04/2023" />
            
          </Grid>
          <Grid item xs={12} md={4}>
            <FriendList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
