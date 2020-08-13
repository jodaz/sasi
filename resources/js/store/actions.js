import axios from 'axios';
import { GET_ERRORS, LOGOUT_USER, SET_CURRENT_USER } from './types';
import { setAuthToken, history } from '../utils';
import { Redirect } from 'react-router-dom';

export const resetPassword = data => dispatch => {
  axios.post('/api/reset-password', data)
    .then(res => history.push('/check-email'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const registerUser = data => dispatch => {
  axios.post('/api/register', data)
    .then(res => console.log(res.data))
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

      history.push('/');
      dispatch(setUser(res.data.user));
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

export const getUser = () => dispatch => {
  axios.get('/api/user')
    .then( res => dispatch(setUser(res.data)))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

export const setUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

