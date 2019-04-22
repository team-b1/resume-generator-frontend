import { UPDATE_FIELD } from '../actions/info-actions'

const initialState = {
  firstName: "",
  lastName: "",
  location: "",
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
  	case UPDATE_FIELD:
  		console.log({...state, [action.name]: action.value});
  		return {...state, [action.name]: action.value};
  	default:
  		return state;
  }
}