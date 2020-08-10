import { SET_CURRENT_USER } from './types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  token: {},
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.user
      }
    default:
      return state;
  }
}

export { authReducer };

