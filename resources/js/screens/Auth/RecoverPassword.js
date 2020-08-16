import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../store/actions';
import Auth from '../layouts/Auth';
import {
  Meta,
  Loading,
  Error,
  ToastWrapper
} from '../../components';
import { isEmpty } from '../../utils';
import { Link, useParams } from 'react-router-dom';

const RecoverPassword = () => {
  const { token } = useParams();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const errors = useSelector(store => store.errors);

  const onSubmit = formData => {
    let data = {
      ...formData,
      token: token 
    };

    setIsLoading(true);
    dispatch(resetPassword(data));
  }

  useEffect(() => {
    if (!isEmpty(errors)) {
      Error(errors.message);
    }
  }, [errors])

  return (
    <Auth type='login'>
      <Meta title="Cambiar contraseña" />
    
      <div className="kt-login__container">
        <div className="kt-login__logo">
          <Link to='/login'>
            <img className="img-responsive" src="/logo.png" />  	
          </Link>
        </div>
        <div className="kt-login__signin">
          <div className="kt-login__head">
            <h3 className="kt-login__title">Cambiar contraseña</h3>
          </div>
          <form className="kt-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input className="form-control" type="password" placeholder="Nueva contraseña" name="password" ref={register}/>
            </div>
            <div className="input-group">
              <input className="form-control" type="password" placeholder="Repita la nueva contraseña" name="password_confirmation" ref={register}/>
            </div>
            <div className="kt-login__actions">
              <button className="btn btn-success btn-pill" disabled={(isLoading) && true}>
                { (isLoading) ? <Loading color='#fff'/> : 'Recuperar contraseña' }
              </button>
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
    </Auth>
  );
};

export default RecoverPassword;

