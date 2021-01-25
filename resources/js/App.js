import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNotify, Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core';
import { customRoutes } from './utils';
import { green, purple } from '@material-ui/core/colors';
import isEmpty from 'is-empty';
// Icons
import { Loading, Login, Layout } from './components';
import { clearNotifications, setUser } from './actions';
import { useFetch } from './fetch';
import { dataProvider, i18nProvider, history } from './initializers';
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
  const { pathname } = location;
  const { response } = useFetch('user');
  const store = useSelector(store => store);
  const notify = useNotify();
  const dispatch = useDispatch();
  const { notifications } = store;
  const { user } = store.user;
  const [rol, setRol] = React.useState(0);

  React.useEffect(() => {
    if (notifications.show) {
      notify(notifications.message);
      dispatch(clearNotifications());
    }
  }, [notifications]);

  React.useEffect(() => {
    if (!isEmpty(response)) {
      dispatch(setUser(response.user));
    }
  }, [response]);
 
  // Check if authenticated
  React.useEffect(() => {
    let route = pathname;

    if (!isEmpty(localStorage.sasiToken)) {
      route = (route == '/login' || route == '/') ? '/home' : route;
    } else {
      route = '/login';
    }

    history.push(route);
  }, []);

  React.useEffect(() => {
    if (!isEmpty(user)) {
      setRol(user.role_id);
    }
  }, [user]);

  const resources = Screens(rol).filter(Boolean);

  return (
    <Admin
      layout={Layout}  
      dataProvider={dataProvider}
      loginPage={Login}
      history={history}
      customRoutes={customRoutes}
      theme={theme}
      ready={Loading}
      i18nProvider={i18nProvider}
    >
      {resources}
    </Admin>
  );
}
