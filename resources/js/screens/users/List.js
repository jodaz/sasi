import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
  Pagination
} from 'react-admin';
import { Filter, ModuleActions } from '../../components';

const UserPagination = props =>
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export default function(props) {

  return (
    <List {...props}
      title="Usuarios"
      pagination={<UserPagination />}
      actions={<ModuleActions/>}
      filters={<Filter defaultfilter='email'/>}
      bulkActionButtons={false}
    >

      <Datagrid>
        <TextField label='Correo' source="email" />
        <TextField label='Nombre' source="full_name" />
        <TextField label='Rol' source="role.name" />
      </Datagrid>
    </List>
  );
}

