import * as React from "react";
import { cloneElement, useMemo } from 'react';
import {
  List, 
  Datagrid,
  BulkDeleteButton,
  TextField
} from 'react-admin';
import { Actions, Filter, ModuleActions } from '../../components';
import { useAuth } from'../../utils';

const CategoriesActionsButtons = props => (
  <>
    <BulkDeleteButton {...props} />
  </>
);

export default function(props) {
  const auth = useAuth();

  return (
    <List {...props}
      title="Categorías"
      bulkActionButtons={<CategoriesActionsButtons />}
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name'/>}
    >
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <TextField source='applications_count' label='Solicitudes' />
        <Actions {...props} shouldEdit shouldDelete />
      </Datagrid>
    </List>
  );
}

