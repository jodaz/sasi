import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import Meta from '../../components/Meta';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(login(data));

  return (
    <>
      <Meta title="Inicio de sesión" />

      <div className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
          <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
            <div className="kt-login__container">
              <div className="kt-login__logo">
                <a href="#">
                  <img className="img-responsive" src="/logo.png" />  	
                </a>
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
                    <div className="col">
                      <label className="kt-checkbox">
                        <input type="checkbox" name="remember" /> Recuérdame 
                        <span></span>
                      </label>
                    </div>
                    <div className="col kt-align-right">
                      <a href="#" className="kt-link kt-login__link">¿Olvidó su contraseña ?</a>
                    </div>
                  </div>
                  <div className="kt-login__actions">
                    <button className="btn btn-pill kt-login__btn-primary">Sign In</button>
                  </div>
                </form>
              </div>
              <div className="kt-login__account">
                <span className="kt-login__account-msg">
                  ¿No tiene una cuenta?
                </span>&nbsp;&nbsp;
                <a className="kt-link kt-link--light kt-login__account-link">Regístrese</a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Login;

