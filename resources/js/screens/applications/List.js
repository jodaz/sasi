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
import DownloadButton from './DownloadButton';
import ApproveButton from './ApproveButton';
import { Filter, ModuleActions } from '../../components';
import { Actions } from '../../components';
import { Tab, Tabs, Divider, useMediaQuery } from '@material-ui/core';
import { useFetch } from "../../fetch";
import isEmpty from 'is-empty';
import { useSelector } from 'react-redux';

const useGetTotals = (filterValues) => {
  const { total: pendings } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Pendientes' }
  );

  const { total: approved } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Aprobadas' }
  );

  const { total: refused } = useGetList(
    'applications',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    {...filterValues, status: 'Rechazadas' }
  );

  return {
    'Pendientes': pendings,
    'Aprobadas': approved,
    'Rechazadas': refused
  };
};

const TabbedDataGrid = props => {
  const user = useSelector(store => store.user.user);
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
        case 'Pendientes':
          setPending(ids);
          break;
        case 'Aprobadas':
          setApproved(ids);
          break;
        case 'Rechazadas':
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
                totals[choice.list_name]
                  ? `${choice.list_name} (${totals[choice.list_name]})`
                  : choice.list_name
              }
              value={choice.list_name}
            />
          ))
        )}
      </Tabs>
      <Divider />
      {isSmall ? (
        <ListContextProvider value={{ ...listContext, ids: pending }} >
          <MobileGrid {...props} ids={pending} />
        </ListContextProvider>
      ) : (
        <div>
          {filterValues.status === 'Pendientes' && (
            <ListContextProvider value={{ ...listContext, ids: pending }}>
              <Datagrid {...props} optimized>
                <TextField label='Número' source="num" />
                <TextField label='Asunto' source="title" />
                <ChipField label='Categoría' source="category.name" />
                <Actions {...props} shouldShow shouldDelete={{ label: 'Rechazar' }}>
                  { (!isEmpty(user) && (user.role_id === 1)) && <ApproveButton /> }
                </Actions>
              </Datagrid>
            </ListContextProvider>
          )}

          {filterValues.status === 'Aprobadas' && (
            <ListContextProvider value={{ ...listContext, ids: approved }}>
              <Datagrid {...props} optimized>
                <TextField label='Número' source="num" />
                <TextField label='Asunto' source="title" />
                <ChipField label='Categoría' source="category.name" />
                <Actions {...props} shouldShow>
                  <DownloadButton />
                </Actions>
              </Datagrid>
            </ListContextProvider>
          )}

          {filterValues.status === 'Rechazadas' && (
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
      )}
    </React.Fragment>
  );
}

export default function(props) {
  return (
    <List {...props}
      title="Solicitudes"
      actions={<ModuleActions />}
      filterDefaultValues={{ status: 'Pendientes' }}
      filters={<Filter defaultfilter='title'/>}
      bulkActionButtons={false}
    >
      <TabbedDataGrid />
    </List>
  );
}
