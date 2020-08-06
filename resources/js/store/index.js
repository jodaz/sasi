import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { errorsReducer } from './Errors';
import { authReducer } from './Auth';

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
