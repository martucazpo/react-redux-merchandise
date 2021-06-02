import axios from "axios";
import { getUser, sendServerMsg, registerThisUser } from "./redux/actions/authActions";
import store from "./redux/store";

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL;

export const getUserFromToken = (token, dispatch) => {
  axios.post(`${BASE_URL}/auth/token`, { token }).then((response) => {
    let { _id, firstName, lastName, email } = response.data.user;
    let user = { _id, firstName, lastName, email };
    dispatch(getUser(user));
  });
};

export const getThisUser = (email) => {
  axios.post(`${BASE_URL}/auth/user`, { email }).then((response) => {
    let token = response.data.token;
    window.localStorage.setItem("token", token);
  });
};

export const registerOneUser = (user) => {
  axios.post(`${BASE_URL}/auth/registerUser`, user).then((response) => {
    if (response.data.serverMsg) {
      store.dispatch(sendServerMsg(response.data.serverMsg));
    } else {
      store.dispatch(registerThisUser(true))
      let email = response.data.email;
      getThisUser(email);
    }
  });
};

export const loginOneUser = (user) => {
  axios.post(`${BASE_URL}/auth/loginUser`, user).then((response) => {
    let email = response.data.email;
    getThisUser(email);
  });
};
