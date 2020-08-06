import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

// Scenes & Components
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import PrivateRoute from './components/PrivateRoute';
// Custom helplers
import store from './store';
import { setAuthToken, history } from './utils';
import { setUser } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.sasi) {
    setAuthToken(localStorage.sasi);
    const decoded = jwt_decode(localStorage.sasi);
    dispatch(setUser(decoded));
    history.push('/dashboard');
  }

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
      <Route exact path='/register' component={Register} /> 
      <Route exact path='/login' component={Login} /> 
      <Route exact path='/' component={Home} /> 
    </Router>
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
