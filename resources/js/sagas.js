import { put, takeEvery, call } from 'redux-saga/effects';
import {
  loading,
  setNotifications,
  clearNotifications,
  setUser,
  setErrors,
  fetchLoading,
  fetchSuccess,
  clearFetch,
  clearErrors
} from './actions';
import { postRequest, fetchUser, logout } from './fetch';
import { setAuthToken } from './utils';
import { history } from './initializers';

function* postRequestSaga(action) {
  const { payload, route } = action;
  yield put(fetchLoading());
  const {
    response, error
  } = yield call(() => postRequest(payload, route));

  if (response) {
    yield put(fetchSuccess(response));
    yield put(clearErrors());
  } else {
    yield put(setErrors(error))
  }
  yield put(clearFetch());
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

function* clearAllSaga() {
  yield put(clearErrors());
  yield put(clearFetch());
  yield put(clearNotifications());
}

function* logoutSaga() {
  yield call(() => logout());
  yield put(setUser());
  yield put(clearErrors());
  setAuthToken();
  history.push('/login');
}

export default function* rootSaga() {
  yield takeEvery('POST_DATA', postRequestSaga)
  yield takeEvery('FETCH_USER', fetchUserSaga);
  yield takeEvery('LOGOUT', logoutSaga);
  yield takeEvery('CLEAR_ALL', clearAllSaga);
}

