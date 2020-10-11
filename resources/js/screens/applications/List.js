import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField
} from 'react-admin';

export default function(props) {
  return (
    <List {...props} title="Solicitudes">
      <Datagrid>
        <TextField label='Descripción' source="description" />
        <TextField label='Estado' source="state.name" />
        <TextField label='Categoría' source="category.name" />
      </Datagrid>
    </List>
  );
}

