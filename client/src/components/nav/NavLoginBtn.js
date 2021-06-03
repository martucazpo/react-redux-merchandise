import React from "react";
import { connect } from "react-redux";
import { loggingIn, modalOpen, isLoginShowing } from "../../utils/redux/actions/authActions";

const NavLoginBtn = (props) => {
  const loginLogin = () => {
    props.dispatch(loggingIn(true));
    props.dispatch(modalOpen(true));
    props.dispatch(isLoginShowing(true))
  };
  return <button onClick={loginLogin}>LOG IN</button>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavLoginBtn);
