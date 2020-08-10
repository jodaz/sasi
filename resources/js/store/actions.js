import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, LOGOUT_USER, SET_CURRENT_USER } from './types';
import { setAuthToken, history } from '../utils';
import { Redirect } from 'react-router-dom';

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
      history.push('/');
      dispatch(setUser(decoded, res.data.user));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const logout = () => dispatch => {
  axios.get('/api/logout')
    .then(res => {
      localStorage.removeItem('sasi');
      setAuthToken();
      history.push('/');
      dispatch({
        type: LOGOUT_USER
      });
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const setUser = (decoded, user) => ({
  type: SET_CURRENT_USER,
  payload: { decoded, user }
});

