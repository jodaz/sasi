import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {
  Button,
  Container,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles
} from '@material-ui/core';
// Components 
import Helmet from 'react-helmet';
import Layout from '../../layouts';
import { useForm } from 'react-hook-form';
import { Actions } from '../../store';
import { isEmpty } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';

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

export default function UpdatePassword() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginErrors = useSelector(store => store.errors);
  
  const onSubmit = data => dispatch(Actions.updatePassword(data));

  return (
    <Layout title='Actualizar contraseña'>
      
      <Typography>Actualizar contraseña</Typography>

      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          error={errors.current_password && true}
          margin="normal"
          fullWidth
          name="current_password"
          label="Contraseña actual"
          type="password"
          id="current-password"
          required
          inputRef={register({ required: true })}
          helperText={errors.current_password && 'Introduzca su contraseña'}
        />
        <TextField
          variant="outlined"
          error={errors.new_password && true}
          margin="normal"
          fullWidth
          name="new_password"
          label="Nueva contraseña"
          type="password"
          id="new-password"
          required
          inputRef={register({ required: true })}
          helperText={errors.new_password && 'Introduzca su contraseña'}
        />
        <TextField
          variant="outlined"
          error={errors.new_password && true}
          margin="normal"
          fullWidth
          name="new_password_confirmation"
          label="Repita la nueva contraseña"
          type="password"
          id="new-password-confirm"
          required
          inputRef={register({ required: true })}
          helperText={errors.new_password && 'Introduzca su contraseña'}
        />
        {!isEmpty(loginErrors) && ErrorTypo(loginErrors.message) }
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Actualizar contraseña
        </Button>
      </form>
    </Layout>
  );
}
