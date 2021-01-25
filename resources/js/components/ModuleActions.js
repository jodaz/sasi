import * as React from "react";
import { cloneElement } from 'react';
import {
  useListContext,
  sanitizeListRestProps,
  TopToolbar,
  CreateButton,
} from 'react-admin';
import { Button } from '@material-ui/core';

const ModuleActions = props => {
  const {
    className,
    exporter,
    filters,
    maxResults,
    shouldCreate,
    handleClick,
    shouldExport,
    ...rest
  } = props;
  const {
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
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
      {shouldCreate && <CreateButton label="Agregar" basePath={basePath} />}
      {shouldExport && <Button variant="outlined" color="primary" onClick={handleClick}>{'Imprimir'}</Button>}
    </TopToolbar>
  );
};

export default ModuleActions;

