import React from 'react';
import { Meta, ToastWrapper  } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';
import Auth from '../layouts/Auth';

const Register = () => {
  const dispatch = useDispatch();

  return (
    <Auth type="register">
      <Meta title="Regístrate" />

      <div className="kt-login__signup">
        <div className="kt-login__head">
          <h3 className="kt-login__title">Regístrate</h3>
          <div className="kt-login__desc">Ingresa tus datos para crear una cuenta:</div>
        </div>
        <form className="kt-login__form kt-form" action="">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Fullname" name="first_name" />
          </div>
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Email" name="email"/>
          </div>
          <div className="input-group">
            <input className="form-control" type="password" placeholder="Contraseña" name="password" />
          </div>
          <div className="input-group">
            <input className="form-control" type="password" placeholder="Confirm Password" name="confirm_password" />
          </div>
          <div className="kt-login__actions">
            <button id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary">Sign Up</button>&nbsp;&nbsp;
            <button id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </Auth>
  );
};

export default Register;

