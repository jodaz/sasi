export const login = credentials => ({
  type: 'LOGIN',
  payload: credentials
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const setUser = (user = {}) => ({
  type: 'SET_USER',
  payload: user
});

export const logoutUser = () => ({
  type: 'LOGOUT'
});

export const setError = error => ({
  type: 'SET_ERRORS',
  payload: error
});

export const clearErrors = () => ({
  type: 'CLEAR_ERRORS'
});

export const fetchUser = token => ({
  type: 'FETCH_USER',
  payload: token
});

