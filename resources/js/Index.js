import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// Scenes
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/register' component={Register} /> 
        <Route exact path='/login' component={Login} /> 
      </BrowserRouter>
    </Provider>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
