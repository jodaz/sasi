import { put, takeEvery, call } from 'redux-saga/effects';
import { setUser, setErrors, clearErrors } from './actions';
import { updatePassword, login, fetchUser, logout } from './fetch';
import { setAuthToken } from './utils';
import { history } from './initializers';

function* loginSaga(action) {
  const { response, error } = yield call(() => login(action.payload));

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
  const { response, error } = yield call(() => fetchUser(action.payload));

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
  const { response, error } = yield call(() => updatePassword(action.payload));

  if (response) {
    history.goBack();
  } else {
    let errors = {};

    if (error.request) {
      errors = { ...error.request };
    }
    if (error.response) {
      errors = { ...error.response.data };
    }
    if (error.message) {
      errors = { ...error.message.errors };
    }

    yield put(setErrors(errors))
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

