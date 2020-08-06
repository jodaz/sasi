import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Index';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { setUser } from './store/actions';

// Scenes
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.sasi) {
    setAuthToken(localStorage.sasi);
    const decoded = jwt_decode(localStorage.sasi);
    dispatch(setUser(decoded));
  }

  return (
    <BrowserRouter>
      <Route exact path='/register' component={Register} /> 
      <Route exact path='/login' component={Login} /> 
      <Route exact path='/' component={Home} /> 
    </BrowserRouter>
  );
};

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}
