import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import Auth from '../layouts/Auth';
import {
  Meta,
  Loading,
  Error,
  ToastWrapper
} from '../../components';
import { isEmpty } from '../../utils';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(login(data));
  const errors = useSelector(store => store.errors);

  useEffect(() => {
    if (!isEmpty(errors)) {
      Error(errors.message);
    }
  }, [errors])

  return (
    <Auth type='login'>
      <Meta title="Inicio de sesión" />
    
      <div className="kt-login__container">
        <div className="kt-login__logo">
          <Link to='/login'>
            <img className="img-responsive" src="/logo.png" />  	
          </Link>
        </div>
        <div className="kt-login__signin">
          <div className="kt-login__head">
            <h3 className="kt-login__title">Inicio de sesión</h3>
          </div>
          <form className="kt-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Correo electrónico" name="email" ref={register}/>
            </div>
            <div className="input-group">
              <input className="form-control" type="password" placeholder="Contraseña" name="password" ref={register}/>
            </div>
            <div className="row kt-login__extra">
              <div className="col kt-align-right">
                <Link to="/forget-password" className="kt-link kt-login__account-link">
                  ¿Olvidó su contraseña ?
                </Link>
              </div>
            </div>
            <div className="kt-login__actions">
              <button className="btn btn-pill kt-login__btn-primary">Iniciar sesión</button>
            </div>
          </form>
        </div>
        <div className="kt-login__account">
          <span className="kt-login__account-msg">
            ¿No tiene una cuenta?
          </span>&nbsp;&nbsp;
          <Link className="kt-link kt-login__account-link" to='/register'>
            Regístrese
          </Link>
        </div>
      </div>
      <ToastWrapper />
    </Auth>
  );
};

export default Login;

