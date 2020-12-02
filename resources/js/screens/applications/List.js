import * as React from "react";
import {
  List, 
  SimpleList,
  ChipField,
  Datagrid, 
  TextField,
} from 'react-admin';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

export default function(props) {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List {...props}
      title="Solicitudes"
      actions={<ModuleActions />}
      filters={<Filter defaultfilter='description'/>}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.description}`}
          secondaryText={record => `${record.state.name}`}
          linkType={"show"}
        />
      ) : (
        <Datagrid>
          <TextField label='Descripción' source="description" />
          <TextField label='Estado' source="state.name" />
          <ChipField label='Categoría' source="category.name" />
          <Actions {...props} shouldShow shouldDelete={{ label: 'Anular' }} />
        </Datagrid>
      )}
    </List>
  );
}

