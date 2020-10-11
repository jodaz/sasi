import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { isEmpty } from '../utils';
import {
  useLogin, 
  useNotify
} from 'react-admin';
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Link,
  FormControlLabel,
  TextField,
  Button,
} from '@material-ui/core';
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

const Login = () => {
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .catch(() => notify('Correo o contraseña inválidos.'));
  };

  useEffect(() => {
    if (!isEmpty(token)) {
      axios.get(`/activate-account/${token}`)
        .then(res => notify(res.data.message))
        .catch(err => notify(res.data.message));
    }
  }, []);

  return (
    <Auth title='Inicio de sesión'>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          error={errors.email && true}
          margin="normal"
          fullWidth
          id="login"
          label="Correo electrónico"
          name="email"
          onChange={e => setEmail(e.target.value)}
          required
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
          onChange={e => setPassword(e.target.value)}
          required
          helperText={errors.password && 'Introduzca su contraseña'}
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

export default Login;
