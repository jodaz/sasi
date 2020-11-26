import * as React from "react";
import {
  Create,
  SelectArrayInput,
  SimpleForm,
  TextInput
} from 'react-admin';
import { useFetch } from  '../../fetch';

const validator = (values) => {
  const errors = {};

  if (!values.parishes) {
    errors.parishes = ['Seleccione una o más parroquias.'];
  }
  if (!values.name) {
    errors.name = ['Ingrese un nombre.'];
  }

  return errors;
}

const AxisCreate = (props) => { 
  const { isLoading, response: data } = useFetch('axes/create');

  return (
    <Create {...props} title='Nuevo eje'>
      <SimpleForm validate={validator} redirect="list">
        <TextInput source='name' label='Nombre (*)'/>
        { (!isLoading) &&
          <SelectArrayInput label="Parroquia (*)" source="parishes" choices={data} />
        }
      </SimpleForm>
    </Create>
  );
};

export default AxisCreate;

