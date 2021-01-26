import * as React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  DateField,
  NumberField
} from 'react-admin';

const OrganizationTitle = ({ record   }) => (
  <span>{record ? `${record.name}` : ''}</span>
);

const OrganizationShow = (props) => {
  return (
    <Show {...props} title={<title />}>
      <SimpleShowLayout>
        <TextField source="name" label="Nombre" />
        <TextField source="rif" label="RIF" />
        <TextField source="full_address" label='Dirección' />
        <TextField source="category.name" label='Categoría' />
        <TextField source="applications_count" label='Solicitudes enviadas' />
      </SimpleShowLayout>
    </Show>
  );
}

export default OrganizationShow;
