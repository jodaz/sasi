import React, { useState, useEffect } from 'react';
import { useNotify } from 'react-admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { isEmpty } from './utils';
import { history, store } from './initializers';
// Custom components
import { Loading } from './components';
// Resources
import App from './App';
import { fetchUser } from './actions';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const notify = useNotify();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    let route = window.location.pathname;

    if (!isEmpty(localStorage.sasiToken)) {
      route = (route == '/login' || route == '/') ? '/home' : route;
    } else {
      route = '/login';
    }

    history.push(route);
  }, []);

  return <App />;
}

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById('root')
  );
}
