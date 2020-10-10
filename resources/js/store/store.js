import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorsReducer } from './Errors';
import { notificationsReducer } from './Notifications';
import { authReducer } from './Auth';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { adminReducer } from 'react-admin';

export default ({ 
  dataProvider,
  history,
}) => {
  const rootReducer = combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    notification: notificationsReducer,
    router: connectRouter(history),
    admin: adminReducer
  });

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ),
    ),
  );
} 
  
