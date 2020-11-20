import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNotify } from 'react-admin';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  Box,
  FormControlLabel,
  TextField,
  Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { history } from '../initializers';
// Layout
import Auth from './Auth';
import { postData, setErrors } from '../actions';

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
  const classes = useStyles();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector(store => store.errors.form);
  const {
    response,
    loading,
    success
  } = useSelector(store => store.fetch);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(data, 'users'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]: value });
    dispatch(setErrors({...errors, [name]: ''}));
  }

  React.useEffect(() => {
    if (success) {
      history.push('/check-email');
    }
  }, [success]);

  return (
    <Auth title={'Crear cuenta'}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          error={errors.first_name && true}
          margin="normal"
          fullWidth
          id="first_name"
          label="Primer nombre"
          name="first_name"
          onChange={handleChange}
          required
          helperText={errors.first_name && errors.first_name}
        />
        <TextField
          variant="outlined"
          error={errors.surname && true}
          margin="normal"
          fullWidth
          id="surname"
          label="Primer apellido"
          name="surname"
          onChange={handleChange}
          required
          helperText={errors.surname && errors.surname}
        />
        <TextField
          variant="outlined"
          error={errors.dni && true}
          margin="normal"
          fullWidth
          id="dni"
          label="Cédula de identidad"
          name="dni"
          onChange={handleChange}
          required
          helperText={errors.dni && errors.dni}
        />
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
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          startIcon={<AccountBoxIcon />}
        >
          Crear cuenta
        </Button>
        <p>¿Ya tiene una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
      </form>
    </Auth>
  );
};

export default SignUp;
