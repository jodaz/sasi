import axios from 'axios';
import { history, setAuthToken } from './utils';

export const login = data => 
  axios.post('/login', data)
    .then(res => ({ response: res.data }))
    .catch(err => {
      let errors = {};
      if (err.response) {
        errors = err.response.data.errors;
      } else if (err.request) {
        errors = err.request.errors;
      } else {
        errors = err.message.errors;
      }
      
      return ({ error: errors });
    });

export const logout = () =>
  axios.get('/logout')
    .then(res => {
      localStorage.removeItem('sasiToken');
      history.push('/login');
    });

export const fetchUser = () => 
  axios.get('/user')
    .then(res => res.data.user);

