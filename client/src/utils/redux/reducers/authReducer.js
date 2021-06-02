import { GET_USER_BY_EMAIL, REGISTER_USER, LOGIN_USER, LOGGOUT_USER, REGISTER_MSG, SEND_SERVER_MSG, SHOW_LOGIN, IS_LOGGING_IN } from '../types';

let initialState = {
    user: [],
    isAuth: false,
    isLoading: false,
    isRegistered: false,
    isLoggingIn: true,
    registerMsg: '',
    serverMsg: '',
    showLogin: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_EMAIL:
            return {
                ...state,
                isLoadin: true,
                user: action.payload,
                isAuth: true,
                registerMsg: '',
                serverMsg: ''
            };
        case REGISTER_USER:
            return {
                ...state,
                isLoading: false,
                isLoggingIn: false,
                isAuth: action.payload,
                registerMsg: '',
                serverMsg: ''
            };
        case LOGIN_USER:
            return {
                ...state,
                serverMsg:'', 
                isLoggingIn: false,
                isLoadin: false,
                isAuth: action.payload
            };
        case LOGGOUT_USER:
            return {
                ...state,
                user: [],
                serverMsg: '',
                registerMsg: '',
                isAuth: false,
                isLoggingIn: true
            };
        case REGISTER_MSG:
            return {
                ...state,
                registerMsg: action.payload
            };
        case SEND_SERVER_MSG:
            return {
                ...state,
                isAuth: false,
                serverMsg: action.payload
            };
        case SHOW_LOGIN:
            return {
                ...state,
                showLogin: action.payload
            };
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoggingIn: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;