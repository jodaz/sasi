import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
// Scenes & Components
import Login from './screens/Auth/Login';
import ForgetPassword from './screens/Auth/ForgetPassword';
import RecoverPassword from './screens/Auth/RecoverPassword';
import GoToEmail from './screens/GoToEmail';
import Register from './screens/Auth/Register';
import Home from './screens/home';
import Reports from './screens/reports';
import Settings from './screens/settings';
import NewCategory from './screens/settings/NewCategory';
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
    setAuthToken(localStorage.sasi);
    dispatch(getUser());
    history.push('/home');
  }

  return (
    <Router history={history} basename={window.location.origin}>
      <Switch>
        <PrivateRoute exact path='/statistics' component={Statistics} />
        <PrivateRoute exact path='/reports' component={Reports} />
        <PrivateRoute path='/settings' component={Settings} />
        <PrivateRoute path='/home' component={Home} />
      </Switch>
      <Switch>
        <Route exact path='/register' component={Register} /> 
        <Route exact path='/forget-password' component={ForgetPassword} /> 
        <Route exact path='/reset-password/:token' component={RecoverPassword} /> 
        <Route exact path='/login' component={Login} /> 
        <Route exact path='/check-email' component={GoToEmail} /> 
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
