import React from "react";
import { connect } from "react-redux";
// import { loginOneUser } from "../../utils/API";
// import { loginThisUser } from "../../utils/redux/actions/authActions";
import Login from './Login';
import Register from './Register';


const InitialLanding = (props) => {
 
  // const loginUser = (login) => {
  //   loginOneUser(login);
  //   props.dispatch(loginThisUser(true))
  // };
 
  // let loggedUser = {
  //   email: "myTestUserMail@mail",
  //   password: "catsaresmelly",
  // };
  console.log("PROPS ", props);
  return (
    <div>
      <Login />
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

