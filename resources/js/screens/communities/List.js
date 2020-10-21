import * as React from "react";
import {
  List, 
  DeleteButton,
  Datagrid, 
  TextField
} from 'react-admin';
import { useAuth } from'../../utils';
import { Filter, ModuleActions } from '../../components';

export default function(props) {
  const auth = useAuth();

  return (
    <List
      {...props}
      title="Communidades"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
    >
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
        <TextField source='parish_names' label='Parroquia (s)' />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

