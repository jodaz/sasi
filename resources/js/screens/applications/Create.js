import * as React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  NumberInput,
  SelectInput,
  useNotify,
  useRedirect
} from 'react-admin';
import { useFetch } from '../../fetch';

const validator = (values) => {
  const errors = {};

  if (!values.description || !values.description.trim()) {
    errors.description = ['Ingrese un asunto.'];
  }

  if (!values.category) {
    errors.category = ['Seleccione una categoría.'];
  }

  return errors;
}

const ApplicationCreate = (props) => { 
  const { isLoading, response, error } = useFetch('applications/create');
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('¡Solicitud enviada!');
    redirect('/home');
  }

  return (
    <Create {...props} title="Nueva solicitud" onSuccess={onSuccess}>
      <SimpleForm validate={validator}>
        { (!isLoading) &&
          <SelectInput label="Categorías" source="category" choices={response} fullWidth/>
        }
        <NumberInput source="quantity" label='Elementos requeridos' fullWidth/>
        <TextInput
          source="description"
          label="Asunto"
          multiline
          fullWidth
        />
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

