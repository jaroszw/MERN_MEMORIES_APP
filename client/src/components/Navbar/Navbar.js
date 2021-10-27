import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Avatar, Button, Toolbar } from '@mui/material';
import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt[0]}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.givenName}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            color="primary"
            variant="contained"
          >
            Sign In{' '}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
