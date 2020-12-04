import * as React from "react";
import {
  List, 
  Datagrid, 
  SimpleList,
  TextField
} from 'react-admin';
import { Filter, Actions, ModuleActions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Organizaciones"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.name}`}
          secondaryText={record => `${record.full_address}`}
          tertiaryText={record => `${record.applications_count} solicitudes`}
        />
      ) : (
        <Datagrid>
          <TextField source='rif' label='RIF' />
          <TextField source='name' label='Nombre' />
          <TextField source='full_address' label='Dirección' />
          <TextField source='applications_count' label='Solicitudes' />
          <Actions {...props} />
        </Datagrid>
      )}
    </List>
  );
}

