import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNotify } from 'react-admin';
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Link,
  FormControlLabel,
  TextField,
  Button,
  Avatar
} from '@material-ui/core';
import { history } from '../utils';
// Layout
import Auth from './Auth';

const ErrorTypo = (text) => (
  <Typography variant="overline" color="error">
    {text}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const classes = useStyles();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', data)
      .then(res => {
        history.push('/check-email');
        notify(res.data.message);
        setData({});
        setErrors({});
      })
      .catch(err => setErrors(err.response.data.errors));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;

    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  return (
    <Auth title={'Crear cuenta'}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          error={errors.email && true}
          margin="normal"
          fullWidth
          id="login"
          label="Correo electrónico"
          name="email"
          onChange={handleChange}
          required
          helperText={errors.email && errors.email}
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
          onChange={handleChange}
          required
          helperText={errors.password && errors.password}
        />
        <TextField
          variant="outlined"
          error={errors.password && true}
          margin="normal"
          fullWidth
          name="password_confirmation"
          label="Repita la contraseña"
          type="password"
          id="password_confirmation"
          onChange={handleChange}
          required
          helperText={errors.password_confirmation && errors.password_confirmation}
        />
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
    </Auth>
  );
};

export default SignUp;
