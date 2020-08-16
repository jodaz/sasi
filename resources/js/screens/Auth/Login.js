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
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = data => {
    setIsLoading(true);
    dispatch(login(data));
  }
  const getErrors = useSelector(store => store.errors);

  useEffect(() => {
    if (!isEmpty(getErrors)) {
      Error(getErrors.message);
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
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Correo electrónico" name="email" ref={register({ required: true })}/>
              {errors.email && <span className='text-danger'>Ingrese su correo electrónico</span>}
            </div>
            <div className="form-group">
              <input className="form-control" type="password" placeholder="Contraseña" name="password" ref={register({ required: true })}/>
              {errors.password && <span className='text-danger'>Ingrese su contraseña</span>}
            </div>
            <div className="row kt-login__extra">
              <div className="col kt-align-right">
                <Link to="/forget-password" className="kt-link kt-login__account-link">
                  ¿Olvidó su contraseña ?
                </Link>
              </div>
            </div>
            <div className="kt-login__actions">
              <button className="btn btn-success btn-pill" disabled={(isLoading) && true}>
                { (isLoading) ? <Loading color='#fff'/> : 'Iniciar sesión' }
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
      <ToastWrapper />
    </Auth>
  );
};

export default Login;

