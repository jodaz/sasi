import * as React from 'react';
import isEmpty from 'is-empty';
import jwt_decode from "jwt-decode";

export default function({ token }) {
  const [authenticated, isAuthenticated] = React.useState(false);
  const jwtToken = localStorage.getItem(token);

  if (isEmpty(jwtToken)) return authenticated;

  const decodedToken = jwt_decode(jwtToken);

  if (decodedToken.exp > new Date().getTime()/1000) {
    console.log("IS AUTHENTICATED");
    isAuthenticated(!authenticated);
  }

  return authenticated;
}

