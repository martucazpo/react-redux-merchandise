import React from "react";
import { connect } from 'react-redux';
import {
  registerOneUser,
  loginOneUser,
  getAllUsers,
} from "./utils/API";
import { registerThisUser } from './utils/redux/actions/authActions';
//import { registerAndGetAUser } from './utils/redux/actions/authFunctions';

const App = (props) => {
  console.log(props)
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
    registerOneUser(oneUser, props.dispatch)
    props.dispatch(registerThisUser())
  };
  const loginUser = (login) => {
    loginOneUser(login, props.dispatch);
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

const mapStateToProps = (state) => {
  return {
    auth : state.auth
  }
}

export default connect(mapStateToProps)(App);
