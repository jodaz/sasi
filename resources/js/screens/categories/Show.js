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

const CategoryTitle = ({ record }) => (
  <span>{record ? `${record.name}` : ''}</span>
);

const CategoryShow = (props) => { 
  return (
    <Show {...props} title={<CategoryTitle />}>
      <SimpleShowLayout>
        <TextField source="name" label='Categoría' />
        <TextField source="applications_count" label='Nro° de solicitudes' />
      </SimpleShowLayout>
    </Show>
  );
};

export default CategoryShow;

