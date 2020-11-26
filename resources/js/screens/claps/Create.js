import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';
import { useFetch } from '../../fetch';

const validator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = ['Ingrese un nombre.'];
  }

  return errors;
}

const ClapCreate = (props) => { 
  return (
    <Create {...props} title='Nuevo clap'>
      <SimpleForm validate={validator} redirect="list">
        <TextInput source='name' label='Nombre'/>
      </SimpleForm>
    </Create>
  );
};

export default ClapCreate;

