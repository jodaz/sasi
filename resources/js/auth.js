import axios from 'axios';
import { setAuthToken } from './utils';

export default {
    // called when the user attempts to log in
    login: (data) => {
        return axios.post('/login', data)
            .then(res => {
                const { token } = res.data;

                localStorage.setItem('sasiAuth', token);
                setAuthToken(token);

                return Promise.resolve();
            })
            .catch(err => Promise.reject());
    },
    // called when the user clicks on the logout button
    logout: () => {
        return axios.get('/logout')
            .then(res => {
                localStorage.removeItem('sasiAuth');
                setAuthToken();
                return Promise.resolve();
            })
            .catch(err => Promise.reject());
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('sasiAuth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('sasiAuth')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
