import * as React from 'react';
import isEmpty from 'is-empty';
import jwt_decode from "jwt-decode";

const getDelayTime = jwtToken => {  
  let currTime = new Date().getTime() / 1000;
  const { exp } = jwt_decode(jwtToken);

  if (exp < currTime) {
    return 0;
  }
  return exp - currTime;
}

export default function(tokenName) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState(false);
  const [delay, setDelay] = React.useState(null);
  const jwtToken = localStorage.getItem(tokenName);

  // Check if token exists
  React.useEffect(() => {
    if (!isEmpty(jwtToken)) {
      setToken(jwtToken);
    }
  }, [jwtToken]);

  // Check if token is valid
  React.useEffect(() => {
    if (token) {
      const time = getDelayTime(token); 

      setDelay(time);
      setIsAuth(true);
    }
  }, [token]);

  // Timer functionality 
  React.useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setDelay(false);
        setToken(false);
        setIsAuth(false);
      }, [delay]);
    }
  }, [delay]);

  return isAuth;
}

