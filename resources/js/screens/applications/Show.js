import * as React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  DateField,
  NumberField
} from 'react-admin';

const ApplicationTitle = ({ record }) => (
  <span>Solicitud #{record ? `${record.num}` : ''}</span>
);

const ApplicationShow = (props) => { 
  return (
    <Show {...props} title={<ApplicationTitle />}>
      <SimpleShowLayout>
        <TextField source="title" label="Asunto" />
        <TextField source="description" label="Mensaje" />
        <TextField source="category.name" label='Categoría' />
        <TextField source="state.name" label='Estado' />
        <NumberField source="quantity" label='Elementos requeridos' />
        <TextField source="profile.full_name" label='Usuario' />
        <DateField source="created_at" label="Enviada" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ApplicationShow;

