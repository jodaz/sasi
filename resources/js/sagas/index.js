import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { setUser } from '../actions';
import { history, setAuthToken } from '../utils';

export function* watchLogin() {
  yield takeEvery('LOGIN', loginSaga);
}

function* loginSaga(action) {
  const user = yield call(() => {
    return axios.post('/login', action.payload)
      .then(res => {
        const { token, user } = res.data;

        localStorage.setItem('sasiToken', token);
        setAuthToken(token);

        history.push('/');
        return user;
      })
      .catch(err => console.log(err.response.data));
  });
  yield put(setUser(user));
}

export function* watchFetchUser() {
  yield takeEvery('FETCH_USER', userSaga);
}

export function* userSaga(action) {
  const user = yield call(() => {
    return axios.get('/user')
      .then(res => res.data);
  });
  yield put(setUser(user));
}

