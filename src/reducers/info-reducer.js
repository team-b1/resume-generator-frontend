import { UPDATE_INFO_FIELD, ADD_EDUCATION, REMOVE_EDUCATION, UPDATE_EDUCATION, ADD_WORK, REMOVE_WORK, UPDATE_WORK, LOAD_USER_DATA, USER_DATA_RECEIVED, USER_DATA_FAILED, PUSH_USER_DATA_SUCCESS, PUSH_USER_DATA_FAIL } from '../actions/info-actions'

const workTemplate = {
    company: "",
    companyLocation: "",
    curPosition: false,
    start: "",
    end: "",
    position: "",
    description: ""
}

const educationTemplate = {
    school: "",
    degree: "",
    major: "",
    minor: "",
    start: "",
    end: "",
    gpa: ""
}

const initialState = {
    firstName: "",
    lastName: "",
    locations: "",
    email: "",
    phoneNumber: "",
    website: "",

    education: [],
    work: []
}

const validateData = () => {

}

export function info(state=initialState, action) {
    const education = state.education;
    const work = state.work;
    switch (action.type) {
    case UPDATE_INFO_FIELD:
        return {...state, [action.name]: action.value};
    case ADD_EDUCATION:
        return { ...state, education: [ ...education, {...educationTemplate} ] }
    case REMOVE_EDUCATION:
        return {
            ...state,
            education: [...education.slice(0, action.id), ...education.slice(action.id + 1)]
        }
    case UPDATE_EDUCATION:
        return {
            ...state,
            education: [
                ...education.slice(0, action.id),
                {...education[action.id], [action.name]: action.value},
                ...education.slice(action.id + 1)
            ]
        }
    case ADD_WORK:
        return { ...state, work: [ ...work, {...workTemplate} ] }
    case REMOVE_WORK:
        return {
            ...state,
            work: [...work.slice(0, action.id), ...work.slice(action.id + 1)]
        }
    case UPDATE_WORK:
        return {
            ...state,
            work: [
                ...work.slice(0, action.id),
                {...work[action.id], [action.name]: action.value},
                ...work.slice(action.id + 1)
            ]
        }
    case USER_DATA_RECEIVED:
        return { ...action.data };
    case USER_DATA_FAILED:
        return state;
    case PUSH_USER_DATA_SUCCESS:
        return { ...state, pushed: true }
    case PUSH_USER_DATA_FAIL:
        return state;
    default:
        return state;
    }
}
