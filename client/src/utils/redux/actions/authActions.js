import { REGISTER_USER, GET_USER_BY_EMAIL, LOGIN_USER } from '../types';


export const getUser = (data) => {
        return {
            type: GET_USER_BY_EMAIL,
            payload: data
        }
}

export const registerThisUser = (payload)=> {
    return {
        type: REGISTER_USER,
        payload
    }
}

export const loginThisUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}