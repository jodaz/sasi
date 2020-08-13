import React, { useEffect, useState } from 'react';
import Layout from '../layouts';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../store/actions';
import Auth from '../layouts/Auth';
import {
  Meta,
  Label,
  Loading,
  Error,
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
  BtnIcon,
  Col,
  Row,
  BtnLink,
  Icon
} from '../../components';
import { isEmpty } from '../../utils';
import { Link } from 'react-router-dom';

const NewCategory = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(createCategory(data));
  const errors = useSelector(store => store.errors);

  useEffect(() => {
    if (!isEmpty(errors)) {
      Error(errors.message);
    }
  }, [errors])

  return (
    <Layout>
      <Meta title='Nueva categoría' />      

      <Row>
        <Col md={12}>
          <Portlet>
            <PortletHeader label='Registrar nueva categoría' />
            <form onSubmit={handleSubmit(onSubmit)}>
              <PortletBody>
                <div className="form-group">
                  <label>Categoría </label>
                  <input className="form-control" type="text" placeholder="Ejem.: Salud" name="name" ref={register}/>
                </div>
              </PortletBody>
              <PortletFooter>
                <div className="btn-group">
                  <BtnLink styles='btn-secondary' to='settings'>
                    <Icon icon='reply' /> 
                    Cancelar
                  </BtnLink>
                  <button className='btn btn-primary'>
                    <Icon icon='save' /> 
                    Registrar
                  </button>
                </div>
              </PortletFooter>
            </form>
          </Portlet> 
        </Col>
      </Row>
    </Layout>
  );
};

export default NewCategory;

