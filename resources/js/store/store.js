import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorsReducer } from './Errors';
import { notificationsReducer } from './Notifications';
import { authReducer } from './Auth';
import { modalReducer } from './Modal';

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  modal: modalReducer,
  notification: notificationsReducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
