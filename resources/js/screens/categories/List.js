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
    <List {...props} title="Categorías">
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
      </Datagrid>
    </List>
  );
}

