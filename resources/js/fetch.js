import axios from 'axios';
import { history, setAuthToken } from './utils';
import { apiURL } from './config';

export const login = data => 
  axios.post(apiURL+'/login', data)
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: err.message.data }));

export const logout = () =>
  axios.get(`${apiURL}/logout`)
    .then(res => {
      setAuthToken();
      history.push('/login');
    });

export const fetchUser = id => 
  axios.post(`${apiURL}/users/current`, { 'id': id })
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: err.message.data }));

export const updatePassword = data => 
  axios.post(`${apiURL}/update-password`, data)
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: err }));

