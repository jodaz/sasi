import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
  Pagination
} from 'react-admin';
import { useAuth } from'../../utils';

const UserPagination = props =>
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export default function(props) {
  const auth = useAuth();

  return (
    <List {...props} title="Usuarios" pagination={<UserPagination />}>

      <Datagrid>
        <TextField label='Correo' source="email" />
        <TextField label='Nombre' source="full_name" />
        <TextField label='Rol' source="role.name" />
      </Datagrid>
    </List>
  );
}

