import { put, takeEvery, call } from 'redux-saga/effects';
import { setError, setUser } from './actions';
import { login, fetchUser, logout } from './fetch';

function* loginSaga(action) {
  const user = yield call(() => login(action.payload));
  yield put(setUser(user));
}

function* fetchUserSaga() {
  try {
    const user = yield call(() => fetchUser());
    yield put(setUser(user));
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
  yield put(setUser());
}

export default function* rootSaga() {
  yield takeEvery('FETCH_USER', fetchUserSaga);
  yield takeEvery('LOGIN', loginSaga);
  yield takeEvery('LOGOUT', logoutSaga);
}

