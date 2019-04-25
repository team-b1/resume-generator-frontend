import { UPDATE_INFO_FIELD } from '../actions/info-actions'

const initialState = {
    firstName: "",
    lastName: "",
    locations: "",
    email: "",
    phoneNumber: "",
    website: "",

    school: "",
    degree: "",
    major: "",
    minor: "",
    gpa: "",

    company: "",
    companyLocation: "",
    position: "",
    startMonth: "",
    currentPosition: "",
    endMonth: "",
    description: "",
}

export function info(state=initialState, action) {
  switch (action.type) {
    case UPDATE_INFO_FIELD:
        return {...state, [action.name]: action.value};
    default:
        return state;
  }
}
