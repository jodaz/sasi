import * as React from "react";
import { cloneElement, useMemo } from 'react';
import {
  List, 
  Datagrid, 
  TextField
} from 'react-admin';
import { Link } from 'react-router-dom';
import { useAuth } from'../../utils';
import {
  EditButton,
  DeleteButton,
  useListContext,
  sanitizeListRestProps,
  BulkDeleteButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button
} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';

const CategoriesActionsButtons = props => (
  <>
    <BulkDeleteButton {...props} />
  </>
);

const CategoriesActions = props => {
  const {
    className,
    exporter,
    filters,
    maxResults,
    ...rest
  } = props;
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    hasCreate,
    basePath,
    selectedIds,
    showFilter,
    total,
  } = useListContext();

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters && cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button',
      })}
      <CreateButton />
    </TopToolbar>
  );
};

export default function(props) {
  const auth = useAuth();

  return (
    <List {...props}
      title="Categorías"
      bulkActionButtons={<CategoriesActionsButtons />}
      actions={<CategoriesActions />}
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

