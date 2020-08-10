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

const ForgetPassword = () => {
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
      <Meta title="Recuperar contraseña" />
    
      <div className="kt-login__container">
        <div className="kt-login__logo">
          <Link to='/login'>
            <img className="img-responsive" src="/logo.png" />  	
          </Link>
        </div>
        <div className="kt-login__signin">
          <div className="kt-login__head">
            <h3 className="kt-login__title">Recuperar cuenta</h3>
          </div>
          <form className="kt-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Correo electrónico" name="email" ref={register}/>
            </div>
          </form>
        </div>
        <div className="kt-login__account">
          <span className="kt-login__account-msg">
            ¿No tiene una cuenta?
          </span>&nbsp;&nbsp;
          <Link className="kt-link kt-link--light kt-login__account-link" to='/register'>
            Regístrese
          </Link>
        </div>
      </div>
      <ToastWrapper />
    </Auth>
  );
};

export default ForgetPassword;

