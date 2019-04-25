import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './actions/login-actions';
import firebase, { db } from './firebase';
import { all, takeEvery, put, select, call } from 'redux-saga/effects';

function login(loginForm) {
    return firebase
        .auth()
        .signInWithEmailAndPassword(loginForm.email, loginForm.password);
}

function* loginAsync(action) {
    console.log(action);
    try {
        const loginForm = yield select(state => state.login);
        const response = yield call(login, loginForm);
        yield put({ type: LOGIN_SUCCESS, history: action.history });
    } catch (error) {
        console.log(error);
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* loginWatch() {
    yield takeEvery(LOGIN, loginAsync);
}

export default function* rootSaga() {
    yield all([
        loginWatch()
    ])
}
