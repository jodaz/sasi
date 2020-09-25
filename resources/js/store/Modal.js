import { OPEN_MODAL, CLOSE_MODAL } from './types'; 

const initialState = {
  isOpen: false,
  message: {},
  action: '',
  application: ''
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        message: action.payload.message,
        action: action.payload.action,
        application: action.payload.application
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        message: '',
        action: '',
        application: ''
      }
    default:
      return state;
  }
}

export { modalReducer }
