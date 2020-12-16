import * as React from 'react';
import { Route } from 'react-router-dom';
import {
  ResetPassword,
  CheckEmail,
  Login,
  Profile,
  UpdatePassword,
  SignUp
} from '../components';
import Dashboard from '../screens/dashboard';
import { Help } from '../screens/help';

export default [
  <Route exact path="/home" component={Dashboard} />,
  <Route exact path="/help" component={Help} />,
  <Route exact path="/update-password" component={UpdatePassword} />,
  <Route exact path="/profile" component={Profile.edit} />,
  <Route exact path="/login/:token?" component={Login} noLayout />,
  <Route exact path="/reset-password" component={ResetPassword} noLayout />,
  <Route exact path="/check-email" component={CheckEmail} noLayout />,
  <Route exact path="/register" component={SignUp} noLayout />,
];

