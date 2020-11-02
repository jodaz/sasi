import React, { useState, useEffect } from 'react';
import { useNotify } from 'react-admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ListGuesser, Admin, Resource } from 'react-admin';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { isEmpty, customRoutes, setAuthToken } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";

import {
  store,
  dataProvider,
  i18nProvider,
  history
} from './initializers';
import {
  createMuiTheme
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: purple[500]
    }
  }
});

// Custom components
import { Loading, Login, Layout } from './components';
// Resources
import Resources from './resources';
import { fetchUser } from './actions';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const notify = useNotify();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    if (localStorage.sasiToken) {
      const decoded = jwt_decode(localStorage.sasiToken);
      
      // Remember to check if token is valid
      dispatch(fetchUser(localStorage.sasiToken));
    } else {
      history.push('/login');
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />

  return (
    <Admin
      layout={Layout}  
      dataProvider={dataProvider}
      loginPage={Login}
      history={history}
      customRoutes={customRoutes}
      locale='es'
      i18nProvider={i18nProvider}
      theme={theme}
    >
      <Resources />
    </Admin>
  ); 
}

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
