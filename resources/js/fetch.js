import axios from 'axios';
import { history, setAuthToken } from './utils';

export const login = data => 
  axios.post('/login', data)
    .then(res => {
      const { token, user } = res.data;

      localStorage.setItem('sasiToken', token);
      setAuthToken(token);

      history.push('/home');
      return user;
    });

export const logout = () =>
  axios.get('/logout')
    .then(res => {
      localStorage.removeItem('sasiToken');
      setAuthToken();
      history.push('/login');
    });

export const fetchUser = () => 
  axios.get('/user')
    .then(res => res.data);

