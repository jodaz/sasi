import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorsReducer } from './Errors';
import { authReducer } from './Auth';

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
