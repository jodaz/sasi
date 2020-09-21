import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store';
import Auth from '../layouts/Auth';
import {
  Meta,
  Loading,
} from '../../components';
import { isEmpty } from '../../utils';
import { Link, useParams } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const { token } = useParams();

  const onSubmit = data => {
    setIsLoading(true);
    dispatch(Actions.login(data));
  }

  useEffect(() => {
    if (!isEmpty(store.errors)) {
      setIsLoading(false);
      dispatch(Actions.makeNotification(store.errors));
    }
  }, [store]);

  useEffect(() => {
    if (!isEmpty(token)) {
      dispatch(Actions.activateAccount(token));
      setIsLoading(false);
    } 
  }, []);

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
              { (isLoading) 
                ? <Loading color='#781adb'/>
                : <> 
                  <button className="btn btn-success btn-pill" disabled={(isLoading) && true}>
                    {'Iniciar sesión'}
                  </button>
                </>
              }
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

export default Login;

