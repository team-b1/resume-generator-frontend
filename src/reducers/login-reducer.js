import { UPDATE_LOGIN_FIELD, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login-actions';
import firebase from '../firebase';

const initialState = {
    email: "",
    password: "",
    failed: false
}

export function login(state=initialState, action) {
    switch (action.type) {
        case UPDATE_LOGIN_FIELD:
            console.log({...state, [action.name]: action.value});
            return {...state, [action.name]: action.value};
        case LOGIN_SUCCESS:
            console.log('Login Succeeded');
            console.log(firebase.auth().currentUser);
            action.history.push('/');
            return { ...state, failed: false };
        case LOGIN_FAIL:
            console.log('Login Fail');
            return { ...state, failed: true };
        default:
            return state;
    }
}
