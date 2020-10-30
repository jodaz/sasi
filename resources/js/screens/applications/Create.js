import * as React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  DateInput,
  SelectInput
} from 'react-admin';
import {
  useQuery,
  NumberInput,
  Loading,
  Error
} from 'react-admin';

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
  const { data, loading, error } = useQuery({
    type: 'NEW', 
    resource: 'applications'
  });

  return (
    <Create {...props} title="Nueva solicitud">
      { (loading)
        ? <Loading loadingPrimary="Cargando..." loadingSecondary="Cargando..." />
        : ( 
        <SimpleForm
          validate={validator}
        >
          <TextInput
            source="description"
            label="Asunto"
            multiline
          />
          <SelectInput
            source="category"
            choices={data} 
            label='Categoría (*)'
            initialValue={1}
          />
          <NumberInput source="quantity" label='Elementos requeridos' />
        </SimpleForm>
      )}
    </Create>
  );
};

export default ApplicationCreate;

