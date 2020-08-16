import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createCommunity, clear } from '../../store/actions';
import Auth from '../layouts/Auth';
import Select from 'react-select';
import axios from 'axios';
import {
  Meta,
  Label,
  Loading,
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
  BtnIcon,
  Col,
  Row,
  Error,
  BtnLink,
  Icon,
  PortletToolbar
} from '../../components';
import { isEmpty, history, goBack } from '../../utils';
import { Link } from 'react-router-dom';

const NewCommunity = () => {
  const [data, setData] = useState({});
  const { register, handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(createCommunity(data));
  const getError = useSelector(store => store.errors);
  const getData = useSelector(store => store.data);

  useEffect(() => {
    if (isEmpty(getError)) return;
    Error(getError.message);
    return;
  }, [errors]);

  useEffect(() => {
    axios.get('/api/communities/create')
      .then(res => setData(res.data))
      .catch(err => Error(err.message));
  }, [getData]);

  return (<>
    <Meta title='Nueva comunidad' />
    <Row>
      <Col md={12}>
        <Portlet>
          <PortletHeader label='Registrar nueva comunidad'>
            <PortletToolbar>
              <button type="text" className='btn-secondary btn-sm' onClick={e => goBack(e)}>
                <Icon icon='reply' />{' '}Cancelar
              </button>
            </PortletToolbar>
          </PortletHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PortletBody>
              <div className="form-group">
                <label>Nombre <span className='text-danger'> *</span></label>
                <input className="form-control" type="text" placeholder="Ejem.: El Taparo" name="name" ref={register({ required: true })}/>
                {errors.name && <span className='text-danger'>Ingrese un nombre</span>}
              </div>
              <div className="form-group">
                <label>Parroquia (s) <span className='text-danger'> *</span></label>
                <Controller
                  as={Select}
                  name="parishes"
                  isMulti
                  options={data}
                  control={control}
                  placeholder='Seleccione'
                  inputRef={register}
                  rules={{ required: true }}
                /> 
                {errors.parishes && <span className='text-danger'>Seleccione al menos una parroquia</span>}
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

export default NewCommunity;

