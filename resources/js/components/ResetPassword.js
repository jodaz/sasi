import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../initializers';
import SendIcon from '@material-ui/icons/Send';
import LoadingButton from './LoadingButton';
import {
  makeStyles,
  TextField,
  Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';
// Layout
import Auth from './Auth';
import { setErrors, postData } from '../actions';

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
    dispatch(postData(data, 'recover-account'));
  };

  const handleData = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]: value });
    dispatch(setErrors({...errors, [name]: ''}));
  }

  React.useEffect(() => {
    if (response.success) {
      history.push('/check-email');
    }
  }, [response]);

  return (
    <Auth title='Recuperar contraseña'>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          error={errors.email && true}
          type='email'
          margin="normal"
          fullWidth
          id="login"
          label="Correo electrónico"
          name="email"
          onChange={handleData}
          required
          helperText={errors.email && errors.email}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          color='secondary'
          classes={classes.submit}
          icon={<SendIcon />} 
          loading={loading}
          fullWidth
        >
          Enviar
        </LoadingButton>

        <Grid container>
          <Grid item xs>
            <Link to="/login" variant="body2">
              {"Iniciar sesión"}
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2">
              {"¿No tiene una cuenta?"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Auth>
  );
};

export default Login;
