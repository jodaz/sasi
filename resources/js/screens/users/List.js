import * as React from "react";
import {
  List,
  useGetList,
  ChipField,
  Datagrid,
  TextField,
  useDatagridStyles,
  useListContext,
  ListContextProvider
} from 'react-admin';
import MobileGrid from './MobileGrid';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';
import { Tab, Tabs, Divider, useMediaQuery } from '@material-ui/core';
import { useFetch } from "../../fetch";
import ActiveStatusButton from './ActiveStatusButton';
import isEmpty from 'is-empty';

const useGetTotals = (filterValues) => {
  const { total: active } = useGetList(
    'users',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Activos' }
  );

  const { total: deactive } = useGetList(
    'users',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Inactivos' }
  );

  return {
    'Activos': active,
    'Inactivos': deactive,
  };
};

const tabs = [
  {
    id: 1,
    name: 'Activos'
  },
  {
    id: 2,
    name: 'Inactivos'
  }
];

const TabbedDataGrid = props => {
  const listContext = useListContext();
  const { ids, filterValues, setFilters, displayedFilters } = listContext;
  const classes = useDatagridStyles();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [active, setActive] = React.useState([]);
  const [deactive, setDeactive] = React.useState([]);
  const totals = useGetTotals(filterValues);

  const handleChange = React.useCallback((e, newValue) => {
    setFilters && setFilters({ ...filterValues, status: newValue }, displayedFilters);
  }, [displayedFilters, filterValues, setFilters]);

  React.useEffect(() => {
    if (ids) {
      switch (filterValues.status) {
        case 'Activos':
          setActive(ids);
          break;
        case 'Inactivos':
          setDeactive(ids);
          break;
      }
    }
  }, [ids, filterValues.status]);

  const selectedIds =
    filterValues.status == 'Activos'
      ? active
      : deactive;

  return (
    <React.Fragment>
      <Tabs
        variant="fullWidth"
        centered
        value={filterValues.status}
        indicatorColor="primary"
        onChange={handleChange}
      >
        {
          tabs.map(choice => (
            <Tab
              key={choice.id}
              label={
                totals[choice.name]
                  ? `${choice.name} (${totals[choice.name]})`
                  : choice.name
              }
              value={choice.name}
            />
          ))
        }
      </Tabs>
      <Divider />
      {isSmall ? (
        <ListContextProvider value={{ ...listContext, ids: selectedIds }} >
          <MobileGrid {...props} ids={selectedIds} />
        </ListContextProvider>
      ) : (
        <div>
          {filterValues.status === 'Activos' && (
            <ListContextProvider value={{ ...listContext, ids: selectedIds }}>
              <Datagrid {...props} optimized>
                <TextField label='Correo' source="email" />
                <TextField label='Nombre' source="profile.full_name" />
                <TextField label='Rol' source="role.name" />
                <Actions shouldShow>
                  <ActiveStatusButton />
                </Actions>
              </Datagrid>
            </ListContextProvider>
          )}

          {filterValues.status === 'Inactivos' && (
            <ListContextProvider value={{ ...listContext, ids: selectedIds }}>
              <Datagrid {...props} optimized>
                <TextField label='Correo' source="email" />
                <TextField label='Nombre' source="profile.full_name" />
                <TextField label='Rol' source="role.name" />
                <Actions shouldShow>
                  <ActiveStatusButton />
                </Actions>
              </Datagrid>
            </ListContextProvider>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default function(props) {
  return (
    <List {...props}
      title="Usuarios"
      actions={<ModuleActions />}
      filterDefaultValues={{ status: 'Activos' }}
      filters={<Filter defaultfilter='email'/>}
      bulkActionButtons={false}
    >
      <TabbedDataGrid />
    </List>
  );
}

