import { combineReducers } from 'redux'
import { info } from './info-reducer';
import { login } from './login-reducer';
import { signup } from './signup-reducer';

export default combineReducers({
  info,
  login,
  signup
})