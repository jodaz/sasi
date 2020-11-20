import * as React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  DateField,
  SelectField
} from 'react-admin';
import {
  useQuery,
  NumberField,
  Loading,
  Error
} from 'react-admin';

const ApplicationTitle = ({ record }) => (
  <span>Solicitud #{record ? `${record.num}` : ''}</span>
);

const ApplicationShow = (props) => { 
  return (
    <Show {...props} title={<ApplicationTitle />}>
      <SimpleShowLayout>
        <TextField
          source="description"
          label="Asunto"
          multiline
        />
        <TextField
          source="category.name"
          label='Categoría'
        />
        <NumberField source="quantity" label='Elementos requeridos' />
      </SimpleShowLayout>
    </Show>
  );
};

export default ApplicationShow;

