import * as React from 'react';
import { Layout, AppBar, Notification } from 'react-admin';
import Menu from './Menu';

export default (props) => <Layout
  {...props}
  appBar={AppBar}
  menu={Menu}
  notification={Notification}
/>;

