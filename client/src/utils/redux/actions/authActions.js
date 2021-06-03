import {
  REGISTER_USER,
  GET_USER_BY_EMAIL,
  LOGIN_USER,
  LOGGOUT_USER,
  REGISTER_MSG,
  SEND_SERVER_MSG,
  SHOW_LOGIN,
  IS_LOGGING_IN,
  IS_LOGIN_SHOWING,
  MODAL_OPEN,
} from "../types";

export const getUser = (payload) => {
  return {
    type: GET_USER_BY_EMAIL,
    payload,
  };
};

export const registerThisUser = (payload) => {
  return {
    type: REGISTER_USER,
    payload,
  };
};

export const loginThisUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const loggoutThisUser = () => {
  return {
    type: LOGGOUT_USER,
  };
};

export const sendRegisterMsg = (payload) => {
  return {
    type: REGISTER_MSG,
    payload,
  };
};

export const sendServerMsg = (payload) => {
  return {
    type: SEND_SERVER_MSG,
    payload,
  };
};

export const showLogin = (payload) => {
  return {
    type: SHOW_LOGIN,
    payload,
  };
};

export const loggingIn = (payload) => {
  return {
    type: IS_LOGGING_IN,
    payload,
  };
};

export const isLoginShowing = (payload) => {
  return {
    type: IS_LOGIN_SHOWING,
    payload,
  };
};

export const modalOpen = (payload) => {
  return {
    type: MODAL_OPEN,
    payload,
  };
};
