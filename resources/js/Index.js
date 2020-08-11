import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

// Scenes & Components
import Login from './screens/Auth/Login';
import ForgetPassword from './screens/Auth/ForgetPassword';
import Register from './screens/Auth/Register';
import Home from './screens/home';
import Reports from './screens/reports';
import Settings from './screens/settings';
import NotFound from './screens/NotFound';
import Statistics from './screens/Statistics';
import PrivateRoute from './components/PrivateRoute';

// Custom helplers
import store from './store';
import { setAuthToken, history } from './utils';
import { getUser } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.sasi) {
    const decoded = jwt_decode(localStorage.sasi);
    setAuthToken(localStorage.sasi);
    dispatch(getUser());
  }

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/statistics' component={Statistics} />
        <PrivateRoute exact path='/settings' component={Settings} />
        <PrivateRoute exact path='/reports' component={Reports} />
      </Switch>
      <Switch>
        <Route exact path='/register' component={Register} /> 
        <Route exact path='/forget-password' component={ForgetPassword} /> 
        <Route exact path='/login' component={Login} /> 
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Helmet titleTemplate="%s | SASI" />
    <App />
  </Provider>,
  document.getElementById('app')
);
