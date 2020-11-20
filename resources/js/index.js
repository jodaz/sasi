import React, { useState, useEffect } from 'react';
import { useNotify } from 'react-admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'is-empty';
import { history, store } from './initializers';
// Resources
import App from './App';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const notify = useNotify();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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
