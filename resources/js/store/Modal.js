import { OPEN_MODAL, CLOSE_MODAL } from './types'; 

const initialState = {
  isOpen: false,
  message: {}
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        message: action.payload
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        message: ''
      }
    default:
      return state;
  }
}

export { modalReducer }
