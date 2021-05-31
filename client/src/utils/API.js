import axios from "axios";
import { getUser } from './redux/actions/authActions';

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL;

export const getUserFromToken = (token, dispatch) => {
  axios.post(`${BASE_URL}/auth/token`, {token}).then( response => {
    let { _id, firstName, lastName, email } = response.data.user;
    let user = { _id, firstName, lastName, email }
    dispatch(getUser(user))
  });
}

export const getThisUser = (email) => {
  axios
    .post(`${BASE_URL}/auth/user`, {email}).then(
      response => { 
        let token = response.data.token
        window.localStorage.setItem("token", token)
      }
    )
};

export const registerOneUser = async (user) => {
  await axios.post(`${BASE_URL}/auth/registerUser`, user).then( response => {
    let email = response.data.email
    getThisUser(email)
  })
};

export const loginOneUser = async (user) => {
  await axios.post(`${BASE_URL}/auth/loginUser`, user).then(response => {
    let email = response.data.email
    getThisUser(email)
  })
};


