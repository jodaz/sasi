import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField
} from 'react-admin';
import { useAuth } from'../../utils';

export default function(props) {
  const auth = useAuth();

  return (
    <List {...props} title="Communidades">
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
        <TextField source='parish_names' label='Parroquia (s)' />
      </Datagrid>
    </List>
  );
}

