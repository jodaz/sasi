import * as React from "react";
import { cloneElement, useMemo } from 'react';
import {
  List, 
  Datagrid,
  BulkDeleteButton,
  TextField
} from 'react-admin';
import { Actions, Filter, ModuleActions } from '../../components';

const AxesActionsButtons = props => (
  <>
    <BulkDeleteButton {...props} />
  </>
);

export default function(props) {

  return (
    <List {...props}
      title="Ejes"
      bulkActionButtons={<AxesActionsButtons />}
      actions={<ModuleActions shouldCreate/>}
      filters={<Filter defaultfilter='name'/>}
    >
      <Datagrid>
        <TextField source='name' label='Nombre' />
        <Actions {...props} shouldEdit shouldDelete />
      </Datagrid>
    </List>
  );
}

