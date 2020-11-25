import * as React from "react";
import {
  SelectArrayInput,
  Create,
  TextInput,
  SimpleForm,
  DateInput,
  NumberInput,
  SelectInput
} from 'react-admin';
import { getRequest } from '../../fetch';

const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getRequest(url); 
        setResponse(res.response);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  console.log(response, isLoading);

  return { response, error, isLoading  };
};

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

  console.log(isLoading, response);

  return (
    <Create {...props} title="Nueva solicitud">
      <SimpleForm
        validate={validator}
      >
        <TextInput
          source="description"
          label="Asunto"
          multiline
        />
        { (isLoading) &&
          <SelectArrayInput label="Categorías" source="categories" choices={response} />
        }
        <NumberInput source="quantity" label='Elementos requeridos' />
      </SimpleForm>
    </Create>
  );
};

export default ApplicationCreate;

