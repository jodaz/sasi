import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ListGuesser, Admin, Resource } from 'react-admin';
import { isEmpty, customRoutes, setAuthToken } from './utils';
import { useDispatch } from 'react-redux';
import {
  store,
  dataProvider,
  i18nProvider,
  history
} from './initializers';

// Icons
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PublicIcon from '@material-ui/icons/Public';
import AccessibleIcon from '@material-ui/icons/Accessible';

// Custom components
import {
  Login,
  Layout
} from './components';
// Resources
import { UserList } from './screens/users';
import { ApplicationCreate, ApplicationList } from './screens/applications';
import { CategoryList, CategoryEdit, CategoryCreate } from './screens/categories';
import { CommunityEdit, CommunityList, CommunityCreate } from './screens/communities';
import { OrganizationList } from './screens/organizations';
import { fetchUser } from './actions';

export default function App() {
  const dispatch = useDispatch();

  if (!isEmpty(localStorage.sasiToken)) {
    setAuthToken(localStorage.sasiToken);
    dispatch(fetchUser());
  }

  return (
    <Admin
      layout={Layout}  
      dataProvider={dataProvider}
      loginPage={Login}
      history={history}
      customRoutes={customRoutes}
      locale='es'
      i18nProvider={i18nProvider}
    >
      <Resource
        name="applications"
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
        icon={<AccessibleIcon />}
        options={{
          label: 'Organizaciones'
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
    </Admin>
  ); 
}

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
