import * as React from "react";
import {
  List,
  Datagrid,
  SimpleList,
  TextField
} from 'react-admin';
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';
import { Filter, Actions, ModuleActions } from '../../components';
import { useMediaQuery } from '@material-ui/core';

export default function(props) {
  const user = useSelector(store => store.user.user);
  const [rol, setRol] = React.useState(0);
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (!isEmpty(user)) {
      setRol(user.role_id);
    }
  }, [user]);

  return (
    <List
      {...props}
      title="Instituciones"
      actions={<ModuleActions shouldCreate={(rol === 3) && true}/>}
      filters={<Filter defaultfilter='name' />}
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

