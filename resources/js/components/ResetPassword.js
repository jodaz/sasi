import * as React from 'react';
import { useState } from 'react';
import {
  useLogin, 
  useNotify,
  Notification,
  Title
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
  Avatar
} from '@material-ui/core';
// Layout
import Auth from './Auth';

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

const Login = () => {
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .catch(() => notify('Correo o contraseña inválidos.'));
  };

  return (
    <Auth>
      <Title title='Inicio de sesión' />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de sesión
        </Typography>
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
      </div>

      <Notification />
    </Auth>
  );
};

export default Login;
