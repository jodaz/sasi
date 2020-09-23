import React from 'react';
import SignIn from './auth';
import Home from './home';
import Settings from './settings';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, history } from '../utils';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={SignIn} />
      </Switch>
      <Switch>
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/settings' component={Settings} />
      </Switch>
    </Router>
  ); 
}

