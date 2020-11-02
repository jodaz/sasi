import { put, takeEvery, call } from 'redux-saga/effects';
import { setError, setUser, logoutUser } from './actions';
import { login, fetchUser, logout } from './fetch';
import { history } from './initializers';
import { setAuthToken } from './utils';

function* loginSaga(action) {
  const user = yield call(() => login(action.payload));
  yield put(setUser(user));
}

function* fetchUserSaga(action) {
  try {
    setAuthToken(action.payload);
    const user = yield call(() => fetchUser(action.payload));
    yield put(setUser(user));
    history.push('/home');
  } catch(error) {
    yield put(setError({
      auth: {
        message: '¡Debe iniciar sesión!'
      }
    }));
  }
}

function* logoutSaga() {
  yield call(() => logout());
  yield put(logoutUser());
}

export default function* rootSaga() {
  yield takeEvery('FETCH_USER', fetchUserSaga);
  yield takeEvery('LOGIN', loginSaga);
  yield takeEvery('LOGOUT', logoutSaga);
}

