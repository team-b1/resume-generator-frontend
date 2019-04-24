import { UPDATE_SIGNUP_FIELD } from '../actions/signup-actions'

const initialState = {
  email: "",
  password: "",
  terms: ""
  

}

export function signup(state=initialState, action) {
  switch (action.type) {
  	case UPDATE_SIGNUP_FIELD:
  		console.log({...state, [action.name]: action.value});
  		return {...state, [action.name]: action.value};
  	default:
  		return state;
  }
}