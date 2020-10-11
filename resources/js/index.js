import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import jsonapiClient from 'ra-jsonapi-client';
import { setAuthToken } from './utils';
import { 
  authProvider as authClient,
  dataProvider as apiClient,
  history
} from './utils';

// Icons
import UserIcon from '@material-ui/icons/People';
import TelegramIcon from '@material-ui/icons/Telegram';

// Components
import Home from './screens/home';
import SignIn from './screens/auth/SignIn';
import LogOut from './screens/auth/LogOut';

// Initializing providers
const dataProvider = apiClient('http://dev.sasi.loc/api');
const authProvider = authClient('sasiAuth')

// Resources
import { UserList } from './screens/users';
import { ApplicationList } from './screens/applications';

export default function App() {
  if (localStorage.sasiAuth) {
    setAuthToken(localStorage.sasiAuth);
  }

  return (
     <Admin
      dashboard={Home}
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={SignIn}
      logoutButton={LogOut}
      title='Sasi'
    >
      <Resource
        name="applications"
        list={ApplicationList}
        icon={TelegramIcon}
        options={{
          label: 'Solicitudes'
        }}
       />
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
        options={{
          label: 'Usuarios'
        }}
       />
    </Admin>
  ); 
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

