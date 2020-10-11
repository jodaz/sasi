import axios from 'axios';
import setAuthToken from './setAuthToken';

export default (
  tokenName
) => ({
  // called when the user attempts to log in
  login: (data) => {
    return axios.post('login', data)
      .then(res => {
        const { token } = res.data;
        setAuthToken(token);
        localStorage.setItem(tokenName, token);
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    if (localStorage[tokenName]) {
      return axios.get('logout')
        .then(res => {
          setAuthToken(); 
          localStorage.removeItem(tokenName);
        });
    }
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(tokenName);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem(tokenName)
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
});
