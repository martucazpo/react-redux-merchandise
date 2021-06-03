import {
  GET_USER_BY_EMAIL,
  REGISTER_USER,
  LOGIN_USER,
  LOGGOUT_USER,
  REGISTER_MSG,
  SEND_SERVER_MSG,
  SHOW_LOGIN,
  IS_LOGGING_IN,
  IS_LOGIN_SHOWING,
  MODAL_OPEN,
} from "../types";

let initialState = {
  user: [],
  isAuth: false,
  isLoading: false,
  isRegistered: false,
  isLoggingIn: false,
  registerMsg: "",
  serverMsg: "",
  showLogin: false,
  isLoginShowing: false,
  isModalOpen: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        isLoadin: true,
        user: action.payload,
        isAuth: true,
        registerMsg: "",
        serverMsg: "",
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        isLoggingIn: false,
        isAuth: action.payload,
        registerMsg: "",
        serverMsg: "",
      };
    case LOGIN_USER:
      return {
        ...state,
        serverMsg: "",
        isLoggingIn: false,
        isLoading: false,
        isAuth: action.payload,
      };
    case LOGGOUT_USER:
      return {
        ...state,
        user: [],
        serverMsg: "",
        registerMsg: "",
        isAuth: false
      };
    case REGISTER_MSG:
      return {
        ...state,
        registerMsg: action.payload,
      };
    case SEND_SERVER_MSG:
      return {
        ...state,
        isAuth: false,
        serverMsg: action.payload,
      };
    case SHOW_LOGIN:
      return {
        ...state,
        showLogin: action.payload,
      };
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: action.payload,
      };
    case IS_LOGIN_SHOWING:
      return {
        ...state,
        isLoginShowing: action.payload,
      };
    case MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
