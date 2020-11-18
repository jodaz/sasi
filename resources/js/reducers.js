const usersInitialState = {
  user: {},
  isAuth: false
};

const errorsInitialState = {
  form: {},
  notification: null
};

export const errorsReducer = (state = errorsInitialState, action) => {
  switch(action.type) {
    case 'SET_FORM_ERRORS':
      return { ...state, form: action.payload };
      break;
    case 'CLEAR_ERRORS':
      return errorsInitialState;
      break;
    case 'SET_NOTIFICATION_ERRORS':
      return {...state, notification: action.payload };
      break;
    default:
      return state;
  }
}

export const userReducer = (state = usersInitialState, action) => {
  switch(action.type) {
    case 'SET_USER': 
      return { ...state, user: action.payload, isAuth: true };
      break;
    case 'LOGOUT':
      return { ...state, ...usersInitialState };
      break;
    default:
      return state;
  }
}
