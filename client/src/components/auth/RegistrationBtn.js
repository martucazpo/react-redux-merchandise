import React from "react";
import { connect } from "react-redux";
import { isLoginShowing, loggingIn } from "../../utils/redux/actions/authActions";

const RegistrationBtn = (props) => {
  const handleClick = () => {
    props.dispatch(isLoginShowing(false));
    props.dispatch(loggingIn(false));
  };
  return <button onClick={handleClick}>REGISTER</button>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(RegistrationBtn);
