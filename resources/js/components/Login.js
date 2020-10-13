import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { isEmpty } from '../utils';
import {
  useNotify
} from 'react-admin';
import {
  makeStyles,
  Typography,
  Box,
  FormControlLabel,
  TextField,
  Button
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { login } from '../actions';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const notify = useNotify();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
          variant="contained"
          color="primary"
          className={classes.submit}
          startIcon={<ExitToAppIcon />}  
        >
          Acceder
        </Button>
        <RouterLink to='/register'>Regístrese</RouterLink>
      </form>
    </Auth>
  );
};

export default Login;
