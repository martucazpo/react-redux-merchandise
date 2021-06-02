import React from "react";
import { connect } from "react-redux";
import { loginOneUser } from "../../utils/API";
import { loginThisUser } from "../../utils/redux/actions/authActions";
import Register from './Register';


const InitialLanding = (props) => {
 
  const loginUser = (login) => {
    loginOneUser(login);
    props.dispatch(loginThisUser(true))
  };
 
  let loggedUser = {
    email: "myTestUserMail@mail",
    password: "catsaresmelly",
  };
  console.log("PROPS ", props);
  return (
    <div>
      <button onClick={() => loginUser(loggedUser)}>Login User</button>
      <Register />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(InitialLanding);

