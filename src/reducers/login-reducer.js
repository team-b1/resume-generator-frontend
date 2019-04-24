import { UPDATE_LOGIN_FIELD } from '../actions/login-actions'

const initialState = {
  email: "",
  password: ""
  

}

export function login(state=initialState, action) {
  switch (action.type) {
  	case UPDATE_LOGIN_FIELD:
  		console.log({...state, [action.name]: action.value});
  		return {...state, [action.name]: action.value};
  	default:
  		return state;
  }
}