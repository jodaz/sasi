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
      title="Comunidades"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
    >
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
        <TextField source='parish_names' label='Parroquia (s)' />
        <Actions {...props} show delete={{ 'label': 'Anular' }} />
      </Datagrid>
    </List>
  );
}

