import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';
import Auth from '../layouts/Auth';
import Select from 'react-select';
import {
  Meta,
  Loading,
  Heading,
  Portlet,
  PortletBody,
  Error,
  Row,
  Col,
  ToastWrapper
} from '../../components';
import { isEmpty, goBack } from '../../utils';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    setIsLoading(true);
    dispatch(registerUser(data));
  }
  const getError = useSelector(store => store.errors);

  useEffect(() => {
    if (isEmpty(getError)) return;
    Error(getError.message);
    return;
  }, [errors]);

  useEffect(() => {
    axios.get('/api/users/create')
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => Error(err.message));
  }, []);

  const handleChange = (selectedOption) => console.log(selectedOption);

  if (isLoading) return <Loading />

  return (
    <Auth type='register'>
      <Meta title="Crear cuenta" />

      <div className="kt-login__container">
        <div className="kt-login__logo">
          <Link to='/login'>
            <img className="img-responsive" src="/logo.png" />  	
          </Link>
        </div>

        <Heading>
          Ingresa tus datos para crear una cuenta
        </Heading>

        <Portlet>
          <PortletBody>
            <form className='kt-login__form kt-form' onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label>Primer nombre <span className='text-danger'> *</span></label>
                    <input className="form-control" type="text" placeholder="Primer apellido (*)" name="first_name" ref={register({ required: true })}/>
                    {errors.first_name && <span className='text-danger'>Ingrese su primer nombre</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Primer apellido <span className='text-danger'> *</span></label>
                    <input className="form-control" type="text" placeholder="Primer apellido (*)" name="surname" ref={register({ required: true })}/>
                    {errors.surname && <span className='text-danger'>Ingrese su primer apellido</span>}
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Nacionalidad <span className='text-danger'> *</span></label>
                    <Controller
                      as={Select}
                      name="citizenship"
                      options={data.citizenships}
                      control={control}
                      placeholder='Seleccione'
                      inputRef={register}
                      rules={{ required: true }}
                    /> 
                    {errors.citizenship && <span className='text-danger'>Seleccione su nacionalidad</span>}
                  </div>
                  <div className="form-group">
                    <label>Cédula de identidad<span className='text-danger'> *</span></label>
                    <input className="form-control" type="text" placeholder="Cédula de identidad (*)" name="dni" ref={register({ required: true })}/>
                    {errors.dni && <span className='text-danger'>Ingrese su primer apellido</span>}
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Parroquia <span className='text-danger'> *</span></label>
                    <Controller
                      as={Select}
                      name="parish"
                      options={data.parishes}
                      control={control}
                      placeholder='Seleccione'
                      inputRef={register}
                      rules={{ required: true }}
                      onChange={handleChange}
                    /> 
                    {errors.parish && <span className='text-danger'>Seleccione una parroquia</span>}
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>Dirección <span className='text-danger'> *</span></label>
                    <input className="form-control" type="text" placeholder="Ave. Libertad #217 (*)" name="address" ref={register({ required: true })}/>
                    {errors.address && <span className='text-danger'>Ingrese su dirección</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Correo electrónico <span className='text-danger'> *</span></label>
                    <input className="form-control" type="email" placeholder="ejemplo@email.com" name="email" ref={register({ required: true })}/>
                    {errors.email && <span className='text-danger'>Ingrese su correo electrónico</span>}
                  </div>
                </Col>
              </Row>

              <div className="kt-login__actions">
                <button className="btn btn-success btn-pill btn-md" disabled={(isLoading) && true}>
                  { (isLoading) ? <Loading color='#fff'/> : 'Regístrarme' }
                </button>
              </div>

            </form>
          </PortletBody>
        </Portlet>
      </div>
      <div className="kt-login__account">
        <span className="kt-login__account-msg">
          ¿Ya tiene una cuenta?
        </span>&nbsp;&nbsp;
        <Link className="kt-link kt-login__account-link" to='/login'>
          Inicie sesión
        </Link>
      </div>
    </Auth>
  );
};

export default Register;

