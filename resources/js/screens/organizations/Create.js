import * as React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  SelectInput,
  Loading,
  useNotify,
  useRedirect
} from 'react-admin';
import { useFetch } from '../../fetch';

const validator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.description = ['Ingrese un asunto.'];
  }

  if (!values.categories.length) {
    errors.categories = ['Seleccione una categoría.'];
  }

  return errors;
}

const OrganizationCreate = (props) => {
  const { isLoading, response: data } = useFetch('organizations/create');
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`¡Ha creado la organización ${data.name}!`);
    redirect('/organizations');
  }

  return (
    <Create {...props} title="Nueva institución" onSuccess={onSuccess}>
      { (isLoading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : (
        <SimpleForm>
          <SelectInput
            source="types"
            choices={data.types} 
            label='Tipo (*)'
            initialValue={1}
          />
          <TextInput
            source="rif"
            label="RIF"
          />
          <TextInput
            source="name"
            label="Nombre"
          />
          <SelectInput
            source="parishes"
            choices={data.parishes} 
            label='Parroquia (*)'
            initialValue={1}
          />
          <SelectInput
            source="communities"
            choices={data.communities} 
            label='Comunidad (*)'
            initialValue={1}
          />

          <TextInput
            source="address"
            label="Dirección"
          />
          <SelectInput
            source="categories"
            choices={data.categories} 
            label='Sector (*)'
            initialValue={1}
          />
        </SimpleForm>
      )}
    </Create>
  );
};

export default OrganizationCreate;

