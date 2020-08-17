import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createApplication, clear } from '../../store/actions';
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

const NewApplication = () => {
  const [data, setData] = useState({});
  const { register, handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(createApplication(data));
  const getError = useSelector(store => store.errors);
  const getData = useSelector(store => store.data);

  useEffect(() => {
    if (isEmpty(getError)) return;
    Error(getError.message);
    return;
  }, [errors]);

  useEffect(() => {
    axios.get('/api/applications/create')
      .then(res => setData(res.data))
      .catch(err => Error(err.message));
  }, [getData]);

  return (<>
    <Meta title='Nueva Solicitud' />
    <Row>
      <Col md={12}>
        <Portlet>
          <PortletHeader label='Enviar nueva solicitud'>
            <PortletToolbar>
              <button type="text" className='btn-secondary btn-sm' onClick={e => goBack(e)}>
                <Icon icon='chevron-left' />{'  '}Regresar
              </button>
            </PortletToolbar>
          </PortletHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PortletBody>
              <div className="form-group">
                <label>Mensaje <span className='text-danger'> *</span></label>
                <textarea className="form-control" type="textarea" placeholder="Describa su problema..." name="description" ref={register({ required: true })} rows="3" maxlength="500"/>
                {errors.description && <span className='text-danger'> Ingrese una descripción para su solicitud</span>}
              </div>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label>Categoría <span className='text-danger'> *</span></label>
                    <Controller
                      as={Select}
                      name="category"
                      options={data}
                      control={control}
                      placeholder='Seleccione'
                      inputRef={register}
                      rules={{ required: true }}
                    /> 
                    {errors.category && <span className='text-danger'>Seleccione una categoría</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label>Elementos requeridos </label>
                    <input className="form-control" type="number" min={0} placeholder="0" name="quantity" ref={register()}/>
                  </div>
                </Col>
              </Row>
            </PortletBody>
            <PortletFooter>
              <div className="btn-group">
                <button className='btn btn-success btn-md'>
                  <Icon icon='paper-plane' /> 
                  Enviar
                </button>
              </div>
            </PortletFooter>
          </form>
        </Portlet> 
      </Col>
    </Row>
  </>);
};

export default NewApplication;

