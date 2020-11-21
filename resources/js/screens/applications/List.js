import * as React from "react";
import {
  List, 
  Datagrid, 
  TextField,
} from 'react-admin';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';
import { history } from '../../initializers';
import isEmpty from 'is-empty';

export default function(props) {

  React.useEffect(() => {
    if (isEmpty(localStorage.sasiToken)) {
      history.push('/login');
    }
  }, []);

  return (
    <List {...props}
      title="Solicitudes"
      actions={<ModuleActions />}
      filters={<Filter defaultfilter='description'/>}
    >
      <Datagrid>
        <TextField label='Descripción' source="description" />
        <TextField label='Estado' source="state.name" />
        <TextField label='Categoría' source="category.name" />
        <Actions {...props} shouldShow shouldDelete={{ label: 'Anular' }} />
      </Datagrid>
    </List>
  );
}

