import {
    SET_USER_OBJECT,
    LOG_OUT,
    SET_USER_TYPE
} from '../actions/types';
import { FREELANCER_CONST, CLIENT_CONST } from '../constants'

const INIT_STATE = {
    userObj: null,
    userType: CLIENT_CONST,
    token: ''
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SET_USER_OBJECT:
            return { ...state, userObj: action.userObj, token: action.token }
        case LOG_OUT:
            return { ...state, userObj: null }
        case SET_USER_TYPE:
            return { ...state, userType: action.userType }
        default:
            return state;
    }
};