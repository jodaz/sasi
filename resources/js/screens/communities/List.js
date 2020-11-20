import * as React from "react";
import {
  List, 
  EditButton,
  DeleteButton,
  Datagrid, 
  TextField
} from 'react-admin';
import { useAuth } from'../../utils';
import { Filter, Actions, ModuleActions } from '../../components';

export default function(props) {
  const auth = useAuth();

  return (
    <List
      {...props}
      title="Comunidades"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
    >
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
        <TextField source='parish_names' label='Parroquia (s)' />
        <Actions {...props} shouldEdit />
      </Datagrid>
    </List>
  );
}

