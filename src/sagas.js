import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './actions/login-actions';
import { LOAD_USER_DATA, USER_DATA_RECEIVED, USER_DATA_FAILED, PUSH_USER_DATA_SUCCESS, PUSH_USER_DATA_FAIL, PUSH_USER_DATA } from './actions/info-actions';
import { GENERATE_RESUME, GENERATE_RESUME_SUCCESS, GENERATE_RESUME_FAIL } from './actions/resume-generator-actions';
import firebase from './firebase';
import { all, takeLatest, takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';

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

function generateResume(data) {
    return axios.post("https://resume-generator-b1.herokuapp.com/", data,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        });
}

function formatData(data) {
    const Work = data.work
        .map(work => "### " + work.company + "\n\n"
            + work.start + " to " + work.end + "\n\n"
            + work.position + ", " + work.companyLocation + "\n\n"
            + work.description
        )
        .reduce((acc, work) => acc + work + "\n\n", "");
    const School = data.education
        .map(school => "### " + school.school + "\n\n"
            + school.start + " to " + school.end + "\n\n"
            + school.major + " " + school.degree + "\n\n"
            + "GPA: " + school.gpa
        )
        .reduce((acc, school) => acc + school + "\n\n", "");

    return {
        Addr: "Location: " + data.locations,
        Name: data.firstName + ' ' + data.lastName,
        Cellphone: "Phone: " + data.phoneNumber,
        Email: "Email: " + data.email,
        Work,
        School
    }
}

function* generateResumeAsync(action) {
    try {
        const userData = yield select(state => state.info);
        const formattedData = formatData(userData);
        console.log(JSON.stringify(formattedData));
        const pdf = yield call(generateResume, formattedData);
        console.log(pdf);
        const url = window.URL.createObjectURL(new Blob([pdf.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        console.log(error);
        yield put({ type: GENERATE_RESUME_FAIL, error });
    }
}

function* generateResumeWatch() {
    yield takeLatest(GENERATE_RESUME, generateResumeAsync);
}

export default function* rootSaga() {
    yield all([
        loginWatch(),
        loadUserDataWatch(),
        pushUserDataWatch(),
        generateResumeWatch()
    ])
}
