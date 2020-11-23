import axios from 'axios';
import { history, setAuthToken } from './utils';
import { apiURL } from './config';

const getErrors = (error) => {
  let errors = {};

  if (error.request) {
    errors = { ...error.request };
  }
  if (error.response) {
    errors = { ...error.response.data };
  }
  if (error.message) {
    errors = { ...error.message.errors };
  }

  return errors;
}

export const postRequest = (data, route) =>
  axios.post(`${apiURL}/${route}`, data)
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: getErrors(err) }));

export const getRequest = route =>
  axios.get(`${apiURL}/${route}`)
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: getErrors(err) }));

export const logout = () =>
  axios.get(`${apiURL}/logout`)
    .then(res => ({ response: res.data }))
    .catch(err => ({ error: getErrors(err) }));
 
