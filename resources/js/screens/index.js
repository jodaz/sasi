import React from 'react';
import { SignIn, SignUp } from './auth';
import Home from './home';
import Settings from './settings';
import UpdatePassword from './account/UpdatePassword';
import Profile from './account/Profile';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, history } from '../utils';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignUp} />
      </Switch>
      <Switch>
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/settings' component={Settings} />
        <PrivateRoute path='/update-password' component={UpdatePassword} />
        <PrivateRoute path='/profile' component={Profile} />
      </Switch>
    </Router>
  ); 
}

