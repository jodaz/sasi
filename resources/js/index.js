import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNotify } from 'react-admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './initializers';
import isEmpty from 'is-empty';
import { history, setAuthToken, useAuth } from './utils';
// Resources
const routes = [
  '/login',
  '/register'
];
import App from './App';

export default function Index() {
  /**
  const store = useSelector(store => store);
  const auth = useAuth('sasiToken');
  const { pathname } = store.router.location;
  const definedRoute = routes.filter(route => pathname === route);

  React.useEffect(() => {
    if (!auth) {
      if (!isEmpty(definedRoute)) {
        history.push(pathname);
      } else {
        history.push('/login');
      }
    } else {
      if (pathname === '/' || !isEmpty(definedRoute)) {
        history.push('/home');
      } else {
        history.push(pathname)
      }
    }
  }, []);
   **/

  return <App />
}

if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById('root')
  );
}
