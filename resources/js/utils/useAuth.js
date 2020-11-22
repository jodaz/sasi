import isEmpty from 'is-empty';
import jwt_decode from "jwt-decode";

export default function(tokenName) {
  const jwtToken = localStorage.getItem(tokenName);

  if (isEmpty(jwtToken)) return false;

  const decodedToken = jwt_decode(jwtToken);

  if (decodedToken.exp < new Date().getTime()/1000) {
    return false;
  }

  return jwtToken;
}

