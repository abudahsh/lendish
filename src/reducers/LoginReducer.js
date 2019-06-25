import {
    SET_LOGIN_DATA_FOUND,
    FB_LOGIN_STARTED,
    FB_LOGIN_ENDED,
    LN_LOGIN_STARTED,
    LN_LOGIN_ENDED
} from '../actions/types';

const INIT_STATE = {
    email: '',
    fbLoading: false,
    lnLoading: false
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SET_LOGIN_DATA_FOUND:
            const { email, name, pp } = action.data
            return { ...state, email, name, pp }
        case FB_LOGIN_STARTED:
            return { ...state, fbLoading: true }
        case FB_LOGIN_ENDED:
            return { ...state, fbLoading: false }
        case LN_LOGIN_STARTED:
            return { ...state, lnLoading: true }
        case LN_LOGIN_ENDED:
            return { ...state, lnLoading: false }
        default:
            return state;
    }
};