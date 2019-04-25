import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './actions/login-actions';
import { LOAD_USER_DATA, USER_DATA_RECEIVED, USER_DATA_FAILED, PUSH_USER_DATA_SUCCESS, PUSH_USER_DATA_FAIL, PUSH_USER_DATA } from './actions/info-actions';
import firebase from './firebase';
import { all, takeLatest, takeEvery, put, select, call } from 'redux-saga/effects';

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
        yield put({ type: LOAD_USER_DATA });
        yield put({ type: LOGIN_SUCCESS });
    } catch (error) {
        console.log(error);
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* loginWatch() {
    yield takeLatest(LOGIN, loginAsync);
}

function loadUserData(id) {
    return firebase.firestore().collection('user_info').doc(id).get()
}

function* loadUserDataAsync(action) {
    try {
        const response = yield call(loadUserData, firebase.auth().currentUser.uid);
        yield put({ type: USER_DATA_RECEIVED, data: response.data() });
    } catch (error) {
        console.log(error);
        yield put({ type: USER_DATA_FAILED, error });
    }
}

function* loadUserDataWatch() {
    yield takeLatest(LOAD_USER_DATA, loadUserDataAsync);
}

function pushUserData(id, data) {
    return firebase.firestore().collection('user_info').doc(id).set(data)
}

function* pushUserDataAsync(action) {
    try {
        const userData = yield select(state => state.info);
        const response = yield call(pushUserData, firebase.auth().currentUser.uid, userData);
        yield put({ type: LOAD_USER_DATA });
        yield put({ type: PUSH_USER_DATA_SUCCESS });
    } catch (error) {
        console.log(error);
        yield put({ type: PUSH_USER_DATA_FAIL, error });
    }
}

function* pushUserDataWatch() {
    yield takeLatest(PUSH_USER_DATA, pushUserDataAsync);
}

export default function* rootSaga() {
    yield all([
        loginWatch(),
        loadUserDataWatch(),
        pushUserDataWatch()
    ])
}
