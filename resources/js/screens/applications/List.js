import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
} from 'react-admin';
import axios from 'axios';
import { useAuth } from'../../utils';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';

export default function(props) {
  const auth = useAuth();

  return (
    <List {...props}
      title="Solicitudes"
      actions={<ModuleActions />}
      filters={<Filter defaultfilter='description'/>}
    >
      <Datagrid>
        <TextField label='Descripción' source="description" />
        <TextField label='Estado' source="state.name" />
        <TextField label='Categoría' source="category.name" />
        <Actions {...props} />
      </Datagrid>
    </List>
  );
}

