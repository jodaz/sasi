const usersInitialState = {
  user: {},
  isAuth: false
};

const errorsInitialState = {
  form: {}
};

const notificationsInitialState = {
  show: false,
  message: null
};

export const errorsReducer = (state = errorsInitialState, action) => {
  switch(action.type) {
    case 'SET_FORM_ERRORS':
      return { ...state, form: action.payload };
      break;
    case 'CLEAR_ERRORS':
      return errorsInitialState;
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

export const notificationsReducer = (state = notificationsInitialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      return { message: action.payload, show: true };
      break;
    case 'CLEAR_NOTIFICATIONS':
      return notificationsInitialState;
      break;
    default:
      return state;
  }
}
