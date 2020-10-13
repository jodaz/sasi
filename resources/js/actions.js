import axios from 'axios';

export const login = credentials => ({
  type: 'LOGIN',
  payload: credentials
});

export const logout = () => dispatch => {
  axios.get('/logout')
    .then(res => {
      localStorage.removeItem('sasiToken');
      setAuthToken();
      history.push('/login');
      dispatch(setUser());
    })
    .catch(err => console.log(err.response.data));
}

export const setUser = (user = {}) => ({
  type: 'SET_USER',
  payload: user
});

export const fetchUser = () => ({
  type: 'FETCH_USER' 
});

