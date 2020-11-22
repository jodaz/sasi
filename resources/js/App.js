import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNotify, Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core';
import { customRoutes } from './utils';
import { green, purple } from '@material-ui/core/colors';
import isEmpty from 'is-empty';
import { useAuth } from './utils';
// Icons
import { Loading, Login, Layout } from './components';
import { clearNotifications } from './actions';

import {
  dataProvider,
  i18nProvider,
  history
} from './initializers';

// Screens
import Screens from './screens';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[900],
      contrastText: '#fff'
    }
  }
});

export default function App() {
  const auth = useAuth('sasiToken');
  const store = useSelector(store => store);
  const notify = useNotify();
  const dispatch = useDispatch();
  const { notifications } = store;
  
  React.useEffect(() => {
    if (notifications.show) {
      notify(notifications.message);
      dispatch(clearNotifications());
    }
  }, [notifications]);
 
  React.useEffect(() => {
    if (!auth) {
      history.push('/login'); 
    } else {
      history.push('/home');
    }
  }, [auth]);

  return (
    <Admin
      layout={Layout}  
      dataProvider={dataProvider}
      loginPage={Login}
      history={history}
      customRoutes={customRoutes}
      theme={theme}
      ready={Loading}
    >
      {Screens}
    </Admin>
  );
}

