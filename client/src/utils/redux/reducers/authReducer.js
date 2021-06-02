import { GET_USER_BY_EMAIL, REGISTER_USER, LOGIN_USER, LOGGOUT_USER, REGISTER_MSG, SEND_SERVER_MSG } from '../types';

let initialState = {
    user: [],
    isAuth: false,
    isLoading: true,
    isRegistered: true,
    isLoggedIn: false,
    registerMsg: '',
    loginMsg: '',
    serverMsg: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_EMAIL:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            };
        case REGISTER_USER:
            return {
                ...state,
                isLoading: false,
                isAuth: action.payload,
                registerMsg: '',
                serverMsg: ''
            };
        case LOGIN_USER:
            return {
                ...state,
                serverMsg:'', 
                isLoadin: false,
                isAuth: action.payload
            };
        case LOGGOUT_USER:
            return {
                ...state,
                serverMsg: '',
                isAuth: action.payload
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
            }
        default:
            return state;
    }
}

export default authReducer;