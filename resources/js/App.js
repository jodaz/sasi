import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNotify, Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core';
import { customRoutes } from './utils';
import { green, purple } from '@material-ui/core/colors';
import isEmpty from 'is-empty';
import { setAuthToken, useAuth } from './utils';
import { clearAll, setErrors, getData, setUser, clearErrors } from './actions';
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
  const isAuth = useAuth('sasiToken');
  const store = useSelector(store => store);
  const notify = useNotify();
  const dispatch = useDispatch();
  const { response, loading, success } = store.fetch;
  const { notifications } = store;
      
  React.useEffect(() => {
    if (notifications.show) {
      notify(notifications.message);
      dispatch(clearNotifications());
    }
  }, [notifications]);
 
  // Check if authenticated
  React.useEffect(() => {
    if (isAuth) {
      history.push('/home');
      (() => dispatch(getData('user')))();
    } else {
      setAuthToken();
      history.push('/login'); 
    }
  }, [isAuth]);

  React.useEffect(() => {
    if (success) {
      dispatch(setUser(response));
      dispatch(clearAll());
    }
  }, [success]);

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
      { isAuth && Screens}
    </Admin>
  );
}

