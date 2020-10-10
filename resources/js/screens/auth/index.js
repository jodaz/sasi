const authProvider = {
  login: params => Promise.resolve(),
  logout: params => Promise.resolve(),
  checkAuth: params => Promise.resolve(),
  checkError: error => Promise.resolve(),
  getPermissions: params => Promise.resolve(),
  getIdentity: () => Promise.resolve(),
};

export default authProvider;
