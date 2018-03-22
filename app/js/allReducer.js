import { combineReducers } from 'redux';

import {LoginReducer} from './action/user/LoginAction';
import {CommonReducer} from './action/common/CommonAction';

export default combineReducers({
    CommonState:CommonReducer,
    LoginPageState : LoginReducer,
});