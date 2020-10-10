import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens';

const Index = () => {
  /**
  const dispatch = useDispatch();
   * Authentication things
  if (location.pathname === '/') history.push('/home');
  if (localStorage.sasi) {
    setAuthToken(localStorage.sasi);
    dispatch(Actions.getUser());
  } 
  **/

  return (
    <>
      <App />
    </>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Index />, document.getElementById('root'));
}

