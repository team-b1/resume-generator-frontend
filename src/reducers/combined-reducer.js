import { combineReducers } from 'redux'
import { info } from './info-reducer';
import { login } from './login-reducer';

export default combineReducers({
  info,
  login
})