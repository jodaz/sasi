import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Admin, Resource } from 'react-admin';
import { isEmpty, customRoutes, setAuthToken } from './utils';
import {
  store,
  dataProvider,
  history
} from './initializers';

// Icons
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

// Custom components
import {
  Login,
  Dashboard,
  LogOut,
  Layout
} from './components';
// Resources
import { UserList } from './screens/users';
import { ApplicationList } from './screens/applications';
import { fetchUser } from './actions';
import { useDispatch } from 'react-redux';

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
      logoutButton={LogOut}
      history={history}
      customRoutes={customRoutes}
    >
      <Resource
        name=''
        icon={<DashboardIcon />}
        options={{ label: 'Inicio' }}
      />
      <Resource
        name="applications"
        list={ApplicationList}
        icon={<TelegramIcon />}
        options={{
          label: 'Solicitudes'
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
        name='settings' 
        options={{
          label: 'Configuraciones'
        }}
        icon={<SettingsIcon />}
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

