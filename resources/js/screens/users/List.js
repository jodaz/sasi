import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
  SimpleList,
  Pagination
} from 'react-admin';
import { Filter, ModuleActions, Actions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

const UserPagination = props =>
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List {...props}
      title="Usuarios"
      pagination={<UserPagination />}
      actions={<ModuleActions/>}
      filters={<Filter defaultfilter='email'/>}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.profile.full_name}`}
          secondaryText={record => `${record.email}`}
        />
      ) : (
        <Datagrid>
          <TextField label='Correo' source="email" />
          <TextField label='Nombre' source="profile.full_name" />
          <TextField label='Rol' source="role.name" />
          <Actions />
        </Datagrid>
      )}
    </List>
  );
}

