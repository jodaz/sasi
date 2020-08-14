import { NOTIFY } from './types';

const notificationsReducer = (state = {}, action) => {
  switch(action.type) {
    case NOTIFY:
      return action.payload;
    default:
      return state;
  }
}

export { notificationsReducer }
