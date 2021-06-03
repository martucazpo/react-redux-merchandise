import React from "react";
import { connect } from "react-redux";
import {
  isLoginShowing,
  modalOpen,
  loggingIn
} from "../../utils/redux/actions/authActions";

const ModalOpenCloseTab = (props) => {
  const toggleModal = () => {
    props.dispatch(modalOpen(false));
    props.dispatch(isLoginShowing(true));
    props.dispatch(loggingIn(false))
  };
  const modalbtn = "\u2bbe";
  return (
    <div>
      <button onClick={toggleModal}>{modalbtn}</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ModalOpenCloseTab);
