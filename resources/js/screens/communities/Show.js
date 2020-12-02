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

const Title = ({ record }) => (
  <span>{record ? `${record.name}` : ''}</span>
);

const CommunityShow = (props) => { 
  return (
    <Show {...props} title={<Title />}>
      <SimpleShowLayout>
        <TextField source="name" label='Nombre' />
        <TextField source="applications_count" label="Nro° de solicitudes" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CommunityShow;

