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
      title="Organizaciones"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
    >
      <Datagrid>
        <TextField source='rif' label='RIF' />
        <TextField source='name' label='Nombre' />
        <TextField source='full_address' label='Dirección' />
        <TextField source='applications_count' label='Solicitudes' />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

