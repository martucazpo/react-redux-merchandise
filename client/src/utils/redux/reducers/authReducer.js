import { GET_USER_BY_EMAIL, REGISTER_USER, LOGIN_USER } from '../types';

let initialState = {
    user: [],
    isAuth: false,
    isLoading: true
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
                isLoading: false
            };
        case LOGIN_USER:
            return {
                ...state,
                isLoadin: false,
                isAuth: true,
                user: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;