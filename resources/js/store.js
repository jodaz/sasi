import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { errorsReducer } from './services/Errors';
import { authReducer } from './services/Auth';

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
