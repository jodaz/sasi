import * as React from "react";
import { cloneElement } from 'react';
import {
  useListContext,
  sanitizeListRestProps,
  TopToolbar,
  CreateButton,
} from 'react-admin';

const ModuleActions = props => {
  const {
    className,
    exporter,
    filters,
    maxResults,
    shouldCreate,
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
    </TopToolbar>
  );
};

export default ModuleActions;

