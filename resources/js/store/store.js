import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notificationsReducer } from './Notifications';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import {
  adminReducer,
  adminSaga,
  USER_LOGOUT
} from 'react-admin';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

export default ({ 
  authProvider,
  dataProvider,
  history,
}) => {
  const rootReducer = combineReducers({
  //  errors: errorsReducer,
  // auth: authReducer,
  //  notification: notificationsReducer,
    router: connectRouter(history),
    admin: adminReducer
  });

  const resettableAppReducer = (state, action) =>
    rootReducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all(
      [
        adminSaga(dataProvider, authProvider),
      ].map(fork)
    );
  };
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    resettableAppReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      ),
    ),
  );
  sagaMiddleware.run(saga);

  return store;
} 
 
