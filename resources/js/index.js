import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { store, Actions } from './store';
import * as Store from './store';
import App from './screens';
import { history, setAuthToken } from './utils';
import Helmet from 'react-helmet';

const Index = () => {
  const dispatch = useDispatch();
  /**
   * Authentication things
  **/
  if (location.pathname === '/') history.push('/home');
  if (localStorage.sasi) {
    setAuthToken(localStorage.sasi);
    dispatch(Actions.getUser());
  } 

  return (
    <>
      <Helmet titleTemplate="%s - Sasi"/>

      <App />
    </>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>, 
    document.getElementById('root')
  );
}

