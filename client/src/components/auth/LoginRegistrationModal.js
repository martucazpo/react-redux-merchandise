import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Register from "./Register";

const LoginRegistrationModal = (props) => {
  console.log("PROPS ", props);
  return (
    <React.Fragment>
      {props.auth.isAuth === false && props.auth.isLoggingIn === true ? (
        <div>{props.auth.showLogin ? <Login /> : <Register />}</div>
      ) : null }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LoginRegistrationModal);
