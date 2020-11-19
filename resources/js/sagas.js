import { put, takeEvery, call } from 'redux-saga/effects';
import { setNotifications, setUser, setErrors, clearErrors } from './actions';
import { postRequest, fetchUser, logout } from './fetch';
import { setAuthToken } from './utils';
import { history } from './initializers';

function* loginSaga(action) {
  const { payload } = action;
  const {
    response, error
  } = yield call(() => postRequest(payload, 'login'));

  if (response) {
    const { token, user } = response;
    yield put(setUser(user))
    yield put(clearErrors());
    setAuthToken(token);
    history.push('/home');
  } else {
    yield put(setErrors(error))
  }
}

function* fetchUserSaga(action) {
  const { payload } = action;
  const {
    response, error
  } = yield call(() => postRequest(payload, 'users/current'));

  if (response) {
    yield put(setUser(response));
    yield put(clearErrors());
  } else {
    setAuthToken();
    yield put(setErrors(error));
    history.push('/login');
  }
}

function* updatePasswordSaga(action) {
  const { payload } = action;
  const {
    response, error
  } = yield call(() => postRequest(payload, 'update-password'));

  if (response) {
    yield put(setNotifications(response.message))
    history.goBack();
  } else {
    yield put(setErrors(error))
  }
}

function* logoutSaga() {
  yield call(() => logout());
  yield put(setUser());
  yield put(clearErrors());
  setAuthToken();
  history.push('/login');
}

export default function* rootSaga() {
  yield takeEvery('FETCH_USER', fetchUserSaga);
  yield takeEvery('LOGIN', loginSaga);
  yield takeEvery('LOGOUT', logoutSaga);
  yield takeEvery('UPDATE_PASSWORD', updatePasswordSaga);
}

