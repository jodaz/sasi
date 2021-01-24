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

  if (!values.role_id) {
    errors.role_id = ['Seleccione el sector al cual pertenece.'];
  }

  return errors;
}

const OrganizationCreate = (props) => {
  const { isLoading, response: data } = useFetch('roles');
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`¡Se ha actualizado los permisos de usuario con éxito!`);
    redirect('/users');
  }

  return (
    <Create {...props} title="Nueva institución" onSuccess={onSuccess}>
      { (isLoading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : (
        <SimpleForm validate={validator}>
          <SelectInput source="role_id" choices={data.roles} label='Sector (*)'/>
        </SimpleForm>
      )}
    </Create>
  );
};

export default OrganizationCreate;

