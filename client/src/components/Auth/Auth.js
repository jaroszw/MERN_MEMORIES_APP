import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import useStyles from "./styles.js";
import { useTheme } from "@mui/styles";
import Input from "./Input";

const Auth = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showPassword, setShowPassword] = useState(false);

  const isSignup = true;

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignup ? "Sign Up" : " Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              handleShowPassword={handleShowPassword}
              handleChange={handleChange}
              type="email"
            />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
