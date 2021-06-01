import React from "react";
import { connect } from "react-redux";
import { registerOneUser, loginOneUser } from "../../utils/API";
import { registerThisUser, loginThisUser } from "../../utils/redux/actions/authActions";


const InitialLanding = (props) => {
  const registerUser = (oneUser) => {
    registerOneUser(oneUser);
    props.dispatch(registerThisUser(true));
  };
  const loginUser = (login) => {
    loginOneUser(login);
    props.dispatch(loginThisUser(true))
  };
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
  console.log("PROPS ", props);
  return (
    <div>
      <button onClick={() => registerUser(user)}>Register User</button>
      <button onClick={() => loginUser(loggedUser)}>Login User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(InitialLanding);

