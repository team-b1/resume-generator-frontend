export const UPDATE_INFO_FIELD = 'UPDATE_INFO_FIELD';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const ADD_WORK = 'ADD_WORK';
export const REMOVE_WORK = 'REMOVE_WORK';
export const UPDATE_WORK = 'UPDATE_WORK';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';
export const USER_DATA_FAILED = 'USER_DATA_FAILED';
export const PUSH_USER_DATA = 'PUSH_USER_DATA';
export const PUSH_USER_DATA_SUCCESS = 'PUSH_USER_DATA_SUCCESS';
export const PUSH_USER_DATA_FAIL = 'PUSH_USER_DATA_FAIL';

export function create_update_field(name, value) {
	return {
		type: UPDATE_INFO_FIELD,
		name,
		value
	}
}

export function create_add_education() {
    return {
        type: ADD_EDUCATION
    }
}

export function create_remove_education(id) {
    return {
        type: REMOVE_EDUCATION,
        id
    }
}

export function create_update_education(id, name, value) {
    return {
        type: UPDATE_EDUCATION,
        id,
        name,
        value
    }
}

export function create_add_work() {
    return {
        type: ADD_WORK
    }
}

export function create_remove_work(id) {
    return {
        type: REMOVE_WORK,
        id
    }
}

export function create_update_work(id, name, value) {
    return {
        type: UPDATE_WORK,
        id,
        name,
        value
    }
}

export function create_load_user(id) {
    return {
        type: LOAD_USER_DATA,
        id
    }
}

export function create_push_user() {
    return {
        type: PUSH_USER_DATA
    }
}
