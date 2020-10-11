import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
  Pagination
} from 'react-admin';

const UserPagination = props =>
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export default function(props) {
  return (
    <List {...props} title="Usuarios" pagination={<UserPagination />}>

      <Datagrid>
        <TextField label='Correo' source="email" />
        <TextField label='Rol' source="role.name" />
      </Datagrid>
    </List>
  );
}

