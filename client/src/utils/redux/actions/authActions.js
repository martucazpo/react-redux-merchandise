import { REGISTER_USER, GET_USER_BY_EMAIL, LOGIN_USER } from '../types';


export const getUser = (data) => {
        return {
            type: GET_USER_BY_EMAIL,
            payload: data
        }
}

export const registerThisUser = ()=> {
    return {
        type: REGISTER_USER,
        payload: true
    }
}

export const loginThisUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}