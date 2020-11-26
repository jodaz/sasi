import * as React from "react";
import {
  Create,
  Loading,
  SelectArrayInput,
  SimpleForm,
  useQuery,
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

const CommunityCreate = (props) => { 
  const { isLoading, response: data, error } = useFetch('communities/create');

  return (
    <Create {...props} title="Nueva comunidad" >
      <SimpleForm validate={validator} redirect="list">
        <TextInput
          source="name"
          label="Nombre"
        />
        { (!isLoading) &&
          <SelectArrayInput
            source="parishes"
            choices={data} 
            label='Parroquia(s)'
            options={{
              fullWidth: true
            }}
          />
        }
      </SimpleForm>
    </Create>
  );
};

export default CommunityCreate;

