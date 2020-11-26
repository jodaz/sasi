import * as React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  DateInput,
  NumberInput,
  SelectInput
} from 'react-admin';
import { useFetch } from '../../fetch';

const validator = (values) => {
  const errors = {};

  if (!values.description) {
    errors.description = ['Ingrese un asunto.'];
  }

  if (!values.category) {
    errors.category = ['Seleccione una categoría.'];
  }

  return errors;
}

const ApplicationCreate = (props) => { 
  const { isLoading, response, error } = useFetch('applications/create');

  return (
    <Create {...props} title="Nueva solicitud">
      <SimpleForm validate={validator} redirect={'/home'}>
        <TextInput
          source="description"
          label="Asunto"
          multiline
        />
        { (!isLoading) &&
          <SelectInput label="Categorías" source="category" choices={response} />
        }
        <NumberInput source="quantity" label='Elementos requeridos' />
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

