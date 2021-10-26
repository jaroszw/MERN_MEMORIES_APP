import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Input = ({ handleShowPassword, handleChange, type, name }) => {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        handleChange={handleChange}
        type={type}
        InputProps={
          name === "email" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
