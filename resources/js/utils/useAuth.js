import React, { useEffect } from 'react';
import history from './history';
import isEmpty from 'is-empty';
import { useNotify } from 'react-admin';

const useAuth = () => {
  const notify = useNotify();

  useEffect(() => {
    if (isEmpty(localStorage.sasiToken)) {
      history.push('/login');
      notify('¡Debe iniciar sesión!');
    }
  }, []);
 
  return true;
}

export default useAuth;
