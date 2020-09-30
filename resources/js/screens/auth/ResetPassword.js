import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Box,
  Grid,
  Link,
  Checkbox,
  TextField,
  FormControlLabel,
  Button,
  Avatar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Actions } from '../../store';
import { isEmpty } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';

// Layout
import Auth from '../../layouts/Auth';

const ErrorTypo = (text) => (
  <Typography variant="overline" color="error">
    {text}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginErrors = useSelector(store => store.errors);
  
  const onSubmit = data => dispatch(Actions.login(data));

  return (
    <Auth title="Inicio de sesión">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            error={errors.email && true}
            margin="normal"
            fullWidth
            id="login"
            label="Correo electrónico"
            name="email"
            required
            inputRef={register({ required: true })}
            helperText={errors.email && 'Ingrese su correo electrónico'}
          />
          <TextField
            variant="outlined"
            error={errors.password && true}
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            required
            inputRef={register({ required: true })}
            helperText={errors.password && 'Introduzca su contraseña'}
          />
          {!isEmpty(loginErrors) && ErrorTypo(loginErrors.message) }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Acceder
          </Button>
        </form>
      </div>
    </Auth>
  );
}
