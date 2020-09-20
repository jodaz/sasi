import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
  Col
} from '../../components';
import { isEmpty, goBack } from '../../utils';
import { Link } from 'react-router-dom';
import { Actions } from '../../store';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, control, errors } = useForm();
  const [selectedParish, setSelectedParish] = useState({});
  const dispatch = useDispatch();

  const onSubmit = data => {
    setIsLoading(true);
    dispatch(Actions.registerUser(data));
  }

  const getError = useSelector(store => store.errors);

  useEffect(() => {
    axios.get('/api/users/create')
      .then( res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch( err => dispatch(Actions.setErrors({
        'success': false,
        'message':'Ups! Tuvimos un error!'
      })));
  }, []);

  useEffect(() => {
    if (!isEmpty(selectedParish)) {
      axios.get(`/api/parishes/${selectedParish.value}/communities`)
        .then(res => {
          setData({ ...data, communities: res.data });
        })
        .catch( err => dispatch(Actions.setErrors({
          'success': false,
          'message': `Ups! No pudimos cargar las comunidades de ${selectedParish.label}!`
        })));
    } 
  }, [selectedParish]);

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
            {
              (isLoading)
              ? <Loading />
              : <>
                <form className='kt-login__form kt-form' onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <label>Primer nombre <span className='text-danger'> *</span></label>
                        <input className="form-control" type="text" placeholder="Primer nombre (*)" name="first_name" ref={register({ required: true })}/>
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
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <label>Género <span className='text-danger'> *</span></label>
                        <Controller
                          as={Select}
                          name="genre"
                          options={data.genres}
                          control={control}
                          placeholder='Seleccione'
                          inputRef={register}
                          rules={{ required: true }}
                        /> 
                        {errors.genre && <span className='text-danger'>Seleccione su género</span>}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <label>Cédula de identidad<span className='text-danger'> *</span></label>
                        <input className="form-control" type="text" placeholder="Cédula de identidad (*)" name="dni" ref={register({ required: true })}/>
                        {errors.dni && <span className='text-danger'>Ingrese su cédula</span>}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <label>Parroquia <span className='text-danger'> *</span></label>
                        <Controller
                          name="parish"
                          control={control}
                          inputRef={register}
                          rules={{ required: true }}
                          render={({ onChange }) => (
                            <Select
                              options={data.parishes}
                              onChange={selected => setSelectedParish(selected)}
                              placeholder='Seleccione'
                            />
                          )}
                        /> 
                        {errors.parish && <span className='text-danger'>Seleccione una parroquia</span>}
                      </div>
                    </Col>
                    { (!isEmpty(data.communities)) &&
                      <Col md={12}>
                        <div className="form-group">
                          <label>Comunidad <span className='text-danger'> *</span></label>
                          <Controller
                            as={Select}
                            name="community"
                            options={data.communities}
                            control={control}
                            placeholder='Seleccione'
                            inputRef={register}
                            rules={{ required: true }}
                          /> 
                          {errors.community && <span className='text-danger'>Seleccione una parroquia</span>}
                        </div>
                      </Col>
                    }
                    <Col md={12}>
                      <div className="form-group">
                        <label>Dirección <span className='text-danger'> *</span></label>
                        <input className="form-control" type="text" placeholder="Ave. Libertad #217 (*)" name="address" ref={register({ required: true })}/>
                        {errors.address && <span className='text-danger'>Ingrese su dirección</span>}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <label>Correo electrónico <span className='text-danger'> *</span></label>
                        <input className="form-control" type="email" placeholder="ejemplo@email.com" name="email" ref={register({ required: true })}/>
                        {errors.email && <span className='text-danger'>Ingrese su correo electrónico</span>}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <label>Contraseña <span className='text-danger'> *</span></label>
                        <input className="form-control" type="password" name="password" ref={register({ required: true })}/>
                        {errors.password && <span className='text-danger'>Ingrese su dirección</span>}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="form-group">
                        <label>Repita la contraseña <span className='text-danger'> *</span></label>
                        <input className="form-control" type="password" name="password_confirmation" ref={register({ required: true })}/>
                        {errors.password_confirmation && <span className='text-danger'>Repita su contraseña</span>}
                      </div>
                    </Col>
                  </Row>

                  <div className="kt-login__actions">
                    <button className="btn btn-success btn-pill" disabled={(isLoading) && true}>
                      {'Registrarme'}
                    </button>
                  </div>
                </form>
              </>
            }
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

