import React, { useEffect, useState } from 'react';
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
  Icon,
  PortletToolbar
} from '../../components';
import { isEmpty, history, goBack } from '../../utils';
import { Link } from 'react-router-dom';

const NewCategory = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(createCategory(data));
  const getError = useSelector(store => store.errors);

  useEffect(() => {
    if (isEmpty(getError)) return;
    Error(getError.message);
    return;
  }, [errors])

  return (<>
    <Meta title='Nueva categoría' />
    <Row>
      <Col md={12}>
        <Portlet>
          <PortletHeader label='Registrar nueva categoría'>
            <PortletToolbar>
              <button type="text" className='btn-secondary btn-sm' onClick={e => goBack(e)}>
                <Icon icon='reply' />{' '}Cancelar
              </button>
            </PortletToolbar>
          </PortletHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PortletBody>
              <div className="form-group">
                <label>Categoría </label>
                <input className="form-control" type="text" placeholder="Ejem.: Salud" name="name" ref={register({ required: true })}/>
                {errors.name && <span className='text-danger'>Ingrese un nombre</span>}
              </div>
            </PortletBody>
            <PortletFooter>
              <div className="btn-group">
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
  </>);
};

export default NewCategory;

