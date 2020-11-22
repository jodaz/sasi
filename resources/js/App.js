import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNotify, Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core';
import { customRoutes } from './utils';
import { green, purple } from '@material-ui/core/colors';
import isEmpty from 'is-empty';
// Icons
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PublicIcon from '@material-ui/icons/Public';
import AccessibleIcon from '@material-ui/icons/Accessible';
import { Loading, Login, Layout } from './components';
import { clearNotifications } from './actions';

import {
  dataProvider,
  i18nProvider,
  history
} from './initializers';

// Resources
import { UserList } from './screens/users';
import {
  ApplicationShow,
  ApplicationCreate,
  ApplicationList
} from './screens/applications';
import { CategoryList, CategoryEdit, CategoryCreate } from './screens/categories';
import { CommunityEdit, CommunityList, CommunityCreate } from './screens/communities';
import { OrganizationCreate, OrganizationList } from './screens/organizations';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[900],
      contrastText: '#fff'
    }
  }
});

export default function App() {
  /**  
  const store = useSelector(store => store);
  const notify = useNotify();
  const dispatch = useDispatch();
  const { notifications } = store;
  
  React.useEffect(() => {
    if (notifications.show) {
      notify(notifications.message);
      dispatch(clearNotifications());
    }
  }, [notifications]);
   **/
  console.log("Check")

  return (
    <Admin
      layout={Layout}  
      dataProvider={dataProvider}
      loginPage={Login}
      history={history}
      customRoutes={customRoutes}
      theme={theme}
      ready={Loading}
    >
      {/*
      <Resource
        name="applications"
        show={ApplicationShow}
        list={ApplicationList}
        create={ApplicationCreate}
        icon={<TelegramIcon />}
        options={{
          label: 'Solicitudes'
        }}
     />
      <Resource
        name="organizations"
        list={OrganizationList}
        create={OrganizationCreate}
        icon={<AccessibleIcon />}
        options={{
          label: 'Instituciones'
        }}
     />
      <Resource
        name="users"
        list={UserList}
        icon={<UserIcon />}
        options={{
          label: 'Usuarios'
        }}
     />
      <Resource 
        name='categories' 
        options={{
          label: 'Categorías'
        }}
        icon={<LocalOfferIcon />}
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
      <Resource 
        name='communities' 
        options={{
          label: 'Comunidades'
        }}
        icon={<PublicIcon />}
        list={CommunityList}
        create={CommunityCreate}
        edit={CommunityEdit}
      />
      */}
    </Admin>
  );
}

