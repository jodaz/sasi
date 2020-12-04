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

  if (!values.rif || !values.rif.trim()) {
    errors.rif = ['Ingrese el RIF.'];
  }

  if (!values.address || !values.address.trim()) {
    errors.address = ['Ingrese la dirección.'];
  }

  if (!values.name || !values.name.trim()) {
    errors.name = ['Ingrese un nombre.'];
  }

  if (!values.community_id) {
    errors.community_id = ['Seleccione una comunidad.'];
  }

  if (!values.parish_id) {
    errors.parish_id = ['Seleccione una parroquia.'];
  }

  if (!values.organization_type_id) {
    errors.organization_type_id = ['Seleccione el tipo de la institución.'];
  }

  if (!values.category_id) {
    errors.category_id = ['Seleccione el sector al cual pertenece.'];
  }

  return errors;
}

const OrganizationCreate = (props) => {
  const { isLoading, response: data } = useFetch('organizations/create');
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`¡Ha creado la institución ${data.name}!`);
    redirect('/organizations');
  }

  return (
    <Create {...props} title="Nueva institución" onSuccess={onSuccess}>
      { (isLoading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : (
        <SimpleForm validate={validator}>
          <SelectInput source="organization_type_id" choices={data.types} label='Tipo (*)' />
          <TextInput
            source="rif"
            label="RIF"
            resettable
          />
          <TextInput source="name" label="Nombre" resettable/>
          <SelectInput source="parish_id" choices={data.parishes} label='Parroquia (*)' />
          <SelectInput source="community_id" choices={data.communities} label='Comunidad (*)'/>
          <TextInput source="address" label="Dirección" resettable/>
          <SelectInput source="category_id" choices={data.categories} label='Sector (*)'/>
        </SimpleForm>
      )}
    </Create>
  );
};

export default OrganizationCreate;

