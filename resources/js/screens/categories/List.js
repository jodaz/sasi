import * as React from "react";
import { cloneElement, useMemo } from 'react';
import {
  List, 
  Datagrid,
  SimpleList,
  BulkDeleteButton,
  TextField
} from 'react-admin';
import { Actions, Filter, ModuleActions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

const CategoriesActionsButtons = props => (
  <>
    <BulkDeleteButton {...props} />
  </>
);

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List {...props}
      title="Categorías"
      bulkActionButtons={<CategoriesActionsButtons />}
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name'/>}
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
          <Actions {...props} shouldEdit shouldDelete />
        </Datagrid>
      )}
    </List>
  );
}

