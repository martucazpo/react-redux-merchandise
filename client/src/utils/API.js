import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL;

export const registerOneUser = async (user) => {
  await axios.post(`${BASE_URL}/auth/registerUser`, user);
};

export const loginOneUser = async (user) => {
  await axios.post(`${BASE_URL}/auth/loginUser`, user);
};

export const getOneUser = async (email) => {
  await axios
    .post(`${BASE_URL}/auth/user`, email)
    .then((user) => console.log(user));
};

export const getAllUsers = async () => {
  await axios.get(`${BASE_URL}/auth/user`).then((users) => console.log(users));
};
