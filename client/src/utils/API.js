import axios from "axios";
import { getUser } from './redux/actions/authActions';

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL;


export const getThisUser = (email, dispatch) => {
  axios
    .post(`${BASE_URL}/auth/user`, {email}).then(
      response => {
        dispatch(getUser(response.data))
      }
    )
};

export const registerOneUser = async (user, dispatch) => {
  await axios.post(`${BASE_URL}/auth/registerUser`, user).then( response => {
    let email = response.data.email
    getThisUser(email, dispatch)
  })
};

export const loginOneUser = async (user, dispatch) => {
  await axios.post(`${BASE_URL}/auth/loginUser`, user).then(response => {
    let email = response.data.email
    getThisUser(email, dispatch)
  })
};



export const getAllUsers = async () => {
  await axios.get(`${BASE_URL}/auth/user`).then((users) => console.log(users));
};
