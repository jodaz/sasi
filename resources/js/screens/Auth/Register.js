import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';

const Register = () => {
  const dispatch = useDispatch();

  return (
    <div className="kt-login__signup">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign Up</h3>
        <div className="kt-login__desc">Enter your details to create your account:</div>
      </div>
      <form className="kt-login__form kt-form" action="">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Fullname" name="fullname" />
        </div>
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Email" name="email" autocomplete="off" />
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
  );
};

export default Register;

