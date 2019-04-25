import { GENERATE_RESUME, GENERATE_RESUME_SUCCESS, GENERATE_RESUME_FAIL } from '../actions/resume-generator-actions';

const initialState = {
    generated: false
}

export function resumeGenerator(state=initialState, action) {
    switch (action.type) {
    case GENERATE_RESUME_SUCCESS:
        return {...state, generated: true};
    case GENERATE_RESUME_FAIL:
        return state;
    default:
        return state;
    }
}
