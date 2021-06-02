import { REGISTER_USER, GET_USER_BY_EMAIL, LOGIN_USER, LOGGOUT_USER, REGISTER_MSG, SEND_SERVER_MSG } from '../types';


export const getUser = (payload) => {
        return {
            type: GET_USER_BY_EMAIL,
            payload
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

export const loggoutThisUser = (payload) => {
    return {
        type: LOGGOUT_USER,
        payload
    }
}

export const sendRegisterMsg = (payload) => {
    return {
        type: REGISTER_MSG,
        payload
    }
}

export const sendServerMsg = (payload) => {
    return {
        type: SEND_SERVER_MSG,
        payload
    }
}