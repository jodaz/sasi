import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';

const Register = () => {
  const dispatch = useDispatch();

  return (
    <div className="kt-login__forgot">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Forgotten Password ?</h3>
        <div className="kt-login__desc">Enter your email to reset your password:</div>
      </div>
      <form className="kt-form" action="">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Email" name="email" id="kt_email" autocomplete="off">
        </div>
        <div className="kt-login__actions">
          <button id="kt_login_forgot_submit" className="btn btn-pill kt-login__btn-primary">Request</button>&nbsp;&nbsp;
          <button id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

