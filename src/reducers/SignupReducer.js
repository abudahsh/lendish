import {
    SET_LOGIN_EMAIL_NOT_FOUND,
    DISABLE_SIGNUP_READY_ON_EMAIL_CHANGE,
} from '../actions/types';

const INIT_STATE = {
    email: '',
    readyToSignup: false,
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SET_LOGIN_EMAIL_NOT_FOUND:
            return { ...state, email: action.email, readyToSignup: true }
        case DISABLE_SIGNUP_READY_ON_EMAIL_CHANGE:
            return { ...state, email: '', readyToSignup: false }
        default:
            return state;
    }
};