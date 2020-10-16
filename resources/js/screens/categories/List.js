import * as React from "react";
import { cloneElement, useMemo } from 'react';
import {
  List, 
  Datagrid, 
  EditButton,
  DeleteButton,
  BulkDeleteButton,
  TopToolbar,
  Button,
  TextField,
  TextInput
} from 'react-admin';
import { Filter, ModuleActions } from '../../components';
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
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

