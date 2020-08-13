import React, { useEffect, useState } from 'react';
import Auth from './layouts/Auth';
import {
  Meta,
  Loading,
} from '../components';
import { Link } from 'react-router-dom';

const ForgetPassword = () => (
  <Auth type='login'>
    <Meta title="¡Revise su correo electrónico!" />

    <div className="kt-login__container">
      <div className="kt-login__logo">
        <Link to='/login'>
          <img className="img-responsive" src="/logo.png" />  	
        </Link>
      </div>
      <div className="kt-login__signin">
        <div className="kt-login__head">
          <h3 className="kt-login__title">¡Hemos enviado un email a su correo!</h3>
        </div>
      </div>
      <div className="kt-login__account">
        <span className="kt-login__account-msg">
          Volver al
        </span>&nbsp;&nbsp;
        <Link to='/'>
          Inicio
        </Link>
      </div>
    </div>
  </Auth>
);

export default ForgetPassword;

