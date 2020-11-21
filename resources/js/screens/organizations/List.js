import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField
} from 'react-admin';
import { Filter, Actions, ModuleActions } from '../../components';

export default function(props) {

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
        <Actions {...props} />
      </Datagrid>
    </List>
  );
}

