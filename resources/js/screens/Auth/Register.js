import React from 'react';
import { Meta, ToastWrapper, Row, Col  } from '../../components';
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
          <div className="kt-login__desc">Ingresa tus datos para crear una cuenta</div>
        </div>
        <form className="kt-login__form kt-form" action="">
          <Row>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Primer nombre (*)" name="first_name" />
            </Col>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Segundo nombre" name="second_name" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Primer apellido (*)" name="surname" />
            </Col>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Segundo apellido" name="second_surname" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Correo electrónico" name="email"/>
            </Col>
            <Col md={6}>
              <input className="form-control" type="text" placeholder="Teléfono" name="phone"/>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <input className="form-control" type="password" placeholder="Contraseña" name="password" />
            </Col>
            <Col md={6}>
              <input className="form-control" type="password" placeholder="Confirm Password" name="confirm_password" />
            </Col>
          </Row>
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

