import * as React from 'react';
import { Route } from 'react-router-dom';
import {
  ResetPassword,
  CheckEmail,
  Login,
  Settings,
  Profile,
  Dashboard,
  SignUp
} from '../components';

export default [
  <Route exact path="/settings" component={Settings} />,
  <Route exact path="/home" component={Dashboard} />,
  <Route exact path="/profile" component={Profile.edit} />,
  <Route exact path="/login/:token?" component={Login} noLayout />,
  <Route exact path="/reset-password" component={ResetPassword} noLayout />,
  <Route exact path="/check-email" component={CheckEmail} noLayout />,
  <Route exact path="/register" component={SignUp} noLayout />,
];

