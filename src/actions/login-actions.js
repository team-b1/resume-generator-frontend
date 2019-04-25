export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function create_update_field(name, value) {
    return {
        type: UPDATE_LOGIN_FIELD,
        name,
        value
    }
}

export function create_login_action(history) {
    return {
        type: LOGIN,
    }
}
