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
      title="Comunidades"
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name' />}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.name}`}
          secondaryText={record => `${record.applications_count}`}
        />
      ) : (
        <Datagrid>
          <TextField source='name' label='Nombre' />
          <TextField source='applications_count' label='Solicitudes' />
          <TextField source='parish_names' label='Parroquia (s)' />
          <Actions {...props} show delete={{ 'label': 'Anular' }} />
        </Datagrid>
      )}
    </List>
  );
}

