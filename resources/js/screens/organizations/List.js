import * as React from "react";
import {
  List,
  Datagrid,
  Filter,
  TextInput,
  DateInput,
  SimpleList,
  TextField
} from 'react-admin';
import { Actions, ModuleActions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

const OrganizationFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source='name' alwaysOn />
    <TextInput label="Dirección" source="address" />
    <TextInput label="RIF" source="rif" />
    <DateInput label="Ingreso" source="created_at" />
  </Filter>
);

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Instituciones"
      actions={<ModuleActions shouldCreate/>}
      filters={<OrganizationFilter />}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.name}`}
          secondaryText={record => `${record.full_address}`}
          tertiaryText={record => `${record.applications_count} solicitudes`}
          linkType={"show"}
        />
      ) : (
        <Datagrid>
          <TextField source='rif' label='RIF' />
          <TextField source='name' label='Nombre' />
          <TextField source='full_address' label='Dirección' />
          <TextField source='applications_count' label='Solicitudes' />
          <Actions {...props} shouldShow />
        </Datagrid>
      )}
    </List>
  );
}

