import * as React from "react";
import {
  List, 
  SimpleList,
  useGetList,
  ChipField,
  Datagrid, 
  TextField,
  useDatagridStyles,
  useListContext,
  ListContextProvider
} from 'react-admin';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';
import { Tab, Tabs, Divider, useMediaQuery } from '@material-ui/core';
import { useFetch } from "../../fetch";

const useGetTotals = (filterValues) => {
  const { total: pendings } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Pendiente' }
  );

  const { total: approved } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Aprobado' }
  );

  const { total: refused } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Denegado' }
  );

  return {
    'Pendiente': pendings,
    'Aprobado': approved,
    'Denegado': refused
  };
};

const TabbedDataGrid = props => {
  const listContext = useListContext();
  const { ids, filterValues, setFilters, displayedFilters } = listContext;
  const classes = useDatagridStyles();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const { isLoading, response: tabs } = useFetch('states');
  const [pending, setPending] = React.useState([]); 
  const [approved, setApproved] = React.useState([]);
  const [refused, setRefused] = React.useState([]);
  const totals = useGetTotals(filterValues);

  const handleChange = React.useCallback((e, newValue) => {
    setFilters && setFilters({ ...filterValues, status: newValue }, displayedFilters);
  }, [displayedFilters, filterValues, setFilters]);

  React.useEffect(() => {
    if (ids) {
      switch (filterValues.status) {
        case 'Pendiente':
          setPending(ids);
          break;
        case 'Aprobado':
          setApproved(ids);
          break;
        case 'Denegado':
          setRefused(ids);
          break;
      }
    }
  }, [ids, filterValues.status]);

  return (
    <React.Fragment>
      <Tabs
        variant="fullWidth"
        centered
        value={filterValues.status}
        indicatorColor="primary"
        onChange={handleChange}
      >
        {(!isLoading) && (
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
        )}
      </Tabs>
      <Divider />
      <div>
        {filterValues.status === 'Pendiente' && (
          <ListContextProvider value={{ ...listContext, ids: pending }}>
            <Datagrid {...props} optimized>
              <TextField label='Número' source="num" />
              <TextField label='Asunto' source="title" />
              <ChipField label='Categoría' source="category.name" />
              <Actions {...props} shouldShow shouldDelete={{ label: 'Borrar' }}>
              </Actions>
            </Datagrid>
          </ListContextProvider>
        )}

        {filterValues.status === 'Aprobado' && (
          <ListContextProvider value={{ ...listContext, ids: approved }}>
            <Datagrid {...props} optimized>
              <TextField label='Número' source="num" />
              <TextField label='Asunto' source="title" />
              <ChipField label='Categoría' source="category.name" />
              <Actions {...props} shouldShow>
              </Actions>
            </Datagrid>
          </ListContextProvider>
        )}

        {filterValues.status === 'Denegado' && (
          <ListContextProvider value={{ ...listContext, ids: refused }}>
            <Datagrid {...props} optimized>
              <TextField label='Número' source="num" />
              <TextField label='Asunto' source="title" />
              <ChipField label='Categoría' source="category.name" />
              <Actions {...props} shouldShow />
            </Datagrid>
          </ListContextProvider>
        )}
      </div>
    </React.Fragment>
  );
}

export default function(props) {
  return (
    <List {...props}
      title="Solicitudes"
      actions={<ModuleActions />}
      filterDefaultValues={{ status: 'Pendiente' }}
      filters={<Filter defaultfilter='title'/>}
      bulkActionButtons={false}
    >
      <TabbedDataGrid />
    </List>
  );
}
