export const errorsReducer = (previousState = {}, action) => {
  switch(action.type) {
    case 'SET_ERRORS':
      return { ...previousState, ...action.payload };
      break;
    case 'CLEAR_ERRORS':
      return {};
      break;
    default:
      return previousState;
  }
}

export const userReducer = (previousState = { auth: {} }, action) => {
  switch(action.type) {
    case 'SET_USER': 
      return { ...previousState, ...action.payload };
      break;
    default:
      return previousState;
  }
}

