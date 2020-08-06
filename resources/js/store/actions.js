import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import { setAuthToken, history } from '../utils';

export const registerUser = data => dispatch => {
  axios.post('/api/register', data)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const login = data => dispatch => {
  axios.post('/api/login', data)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem('sasi', token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      history.push('/dashboard');
      dispatch(setUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const setUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

