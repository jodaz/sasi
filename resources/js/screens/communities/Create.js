import * as React from "react";
import {
  Create,
  Loading,
  SelectArrayInput,
  SimpleForm,
  useQuery,
  TextInput
} from 'react-admin';

const validator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = ['Ingrese un nombre.'];
  }

  return errors;
}

const CommunityCreate = (props) => { 
  const { data, loading, errors } = useQuery({
    type: 'NEW',
    resource: 'communities'
  });

  return (
    <Create {...props}
      title="Nueva comunidad" 
    >
      { (loading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : ( 
        <SimpleForm validate={validator}>
          <TextInput
            source="name"
            label="Nombre"
          />
          <SelectArrayInput
            source="parishes"
            choices={data} 
            label='Parroquia(s)'
            options={{
              fullWidth: true
            }}
          />
        </SimpleForm>
      )}
    </Create>
  );
};

export default CommunityCreate;

