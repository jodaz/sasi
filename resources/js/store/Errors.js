import { GET_ERRORS } from './types';

const errorsReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

export { errorsReducer }
