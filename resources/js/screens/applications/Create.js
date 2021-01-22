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
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';
import { useFetch } from '../../fetch';

const validator = (values) => {
  const errors = {};

  if (values.title) {
    if (values.title.length > 100) {
      errors.title = ['El máximo número de caracteres permitidos es 100.'];
    }
  }

  if (!values.title || !values.title.trim()) {
    errors.title = ['Ingrese un título.'];
  }

  if (!values.description || !values.description.trim()) {
    errors.description = ['Ingrese un asunto.'];
  }

  if (values.description) {
    if (values.description.length > 500) {
      errors.description = ['El máximo número de caracteres permitidos es 500.'];
    }
  }

  if (!values.category) {
    errors.category = ['Seleccione una categoría.'];
  }

  return errors;
}

const ApplicationCreate = (props) => { 
  const user = useSelector(store => store.user.user);
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
        <TextInput source="title" label="Título" multiline fullWidth />
        <TextInput source="description" label="Mensaje" multiline fullWidth />
        { (!isLoading) &&
          <SelectInput label="Categoría" source="category" choices={response} fullWidth/>
        }
        { (!isEmpty(user) && !isEmpty(user.profile.organizations)) &&
            <SelectInput
              label="Institución"
              source="institution_id"
              choices={user.profile.organizations} fullWidth
            />
        }
        <NumberInput source="quantity" label='Elementos requeridos' fullWidth/>
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

