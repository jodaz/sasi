import React from 'react';
import { SignIn, SignUp } from './auth';
import Home from './home';
import Settings from './settings';
import UpdatePassword from './account/UpdatePassword';
import Profile from './account/Profile';
import { Admin, Resource } from 'react-admin';
import jsonapiClient from 'ra-jsonapi-client';
import redux from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { store as createStore, Actions } from '../store';

const dataProvider = jsonapiClient('http://dev.sasi.loc/api');
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={createStore({
        dataProvider,
        history
      })}>
      <Admin
        dashboard={Home}
        dataProvider={dataProvider}
        history={history}
      >
        
      </Admin>
    </Provider>
  ); 
}

