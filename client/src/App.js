import React from "react";
import {
  registerOneUser,
  loginOneUser,
  getOneUser,
  getAllUsers,
} from "./utils/API";

const App = () => {
  let user = {
    firstName: "MyTestUser",
    lastName: "MyTestUlserLastName",
    email: "myTestUserMail@mail",
    password: "catsaresmelly",
  };
  let loggedUser = {
    email: "myTestUserMail@mail",
    password: "catsaresmelly",
  };
  const registerUser = async (oneUser) => {
    let email = oneUser.email;
    await registerOneUser(oneUser).then(getOneUser({ email }));
  };
  const loginUser = (login) => {
    loginOneUser(login);
  };
  const whoAreUsers = () => {
    getAllUsers();
  };
  return (
    <div>
      <button onClick={() => registerUser(user)}>Register User</button>
      <button onClick={() => loginUser(loggedUser)}>Login User</button>
      <button onClick={whoAreUsers}>Find Users</button>
    </div>
  );
};

export default App;
