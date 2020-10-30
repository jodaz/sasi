import * as React from 'react';
import { useState } from 'react';
import {
  useNotify,
  Notification,
  Title
} from 'react-admin';
import {
  makeStyles,
  Typography,
  Paper,
  Link,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import { history } from '../initializers';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UpdatePassword = () => {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/update-password', data)
      .then(res => {
        notify(res.data.message);
        history.push('/home');
      })
      .catch((err) => notify('Ha ocurrido un error. Por favor intente de nuevo.'));
  };

  const handleData = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <>
      <Title title='Actualizar contraseña' />
      <Paper className={classes.paper}>
        <Typography variant="h5">
          Actualizar contraseña
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            error={errors.current_password && true}
            margin="normal"
            fullWidth
            id="login"
            type="password"
            label="Contraseña actual"
            name="current_password"
            onChange={handleData}
            required
            helperText={errors.current_password && 'Ingrese su correo electrónico'}
          />
          <TextField
            variant="outlined"
            error={errors.password && true}
            margin="normal"
            name="new_password"
            label="Nueva contraseña"
            type="password"
            id="new_password"
            fullWidth
            onChange={handleData}
            required
            helperText={errors.password && 'Introduzca su contraseña'}
          />
          <TextField
            variant="outlined"
            error={errors.password && true}
            margin="normal"
            name="new_password_confirmation"
            label="Repita la contraseña"
            type="password"
            id="new_password_confirmation"
            onChange={handleData}
            fullWidth
            required
            helperText={errors.password && 'Introduzca su contraseña'}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Actualizar
          </Button>
        </form>
      </Paper>
      <Notification />
    </>
  );
};

export default UpdatePassword;
