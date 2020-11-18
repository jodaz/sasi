const setAuthToken = token => {
  if (token) {
    localStorage.setItem('sasiToken', token);
  } else {
    localStorage.removeItem('sasiToken');
  }
}

export default setAuthToken;
