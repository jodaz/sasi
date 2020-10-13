import * as React from 'react';
import { Layout, AppBar, Menu, Notification } from 'react-admin';

export default (props) => <Layout
  {...props}
  appBar={AppBar}
  menu={Menu}
  notification={Notification}
/>;

