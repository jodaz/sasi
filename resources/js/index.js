import * as React from 'react';
import { useNotify } from 'react-admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'is-empty';
import { history, store } from './initializers';
import { useAuth } from './utils';
// Resources
import App from './App';

export default function Index() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  // custom
  const auth = useAuth('sasiToken');
  const {
    response,
    loading,
    success
  } = store.fetch;

  React.useEffect(() => {
    if (auth) {
      setAuthToken(token);
    }
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
