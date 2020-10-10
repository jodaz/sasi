import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import jsonapiClient from 'ra-jsonapi-client';
const dataProvider = jsonapiClient('http://dev.sasi.loc/api');
import authProvider from './auth';

// Screens
import Home from './screens/home';
import SignIn from './screens/auth/SignIn';
import LogOut from './screens/auth/LogOut';

export default function App() {
  return (
     <Admin
      dashboard={Home}
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={SignIn}
      logoutButton={LogOut}
      title='Sasi'
    >
      {[]} 
    </Admin>
  ); 
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

