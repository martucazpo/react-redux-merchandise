import React from "react";
import { connect } from "react-redux";
import LoginRegistrationModal from "./LoginRegistrationModal";

const InitialLanding = (props) => {
  console.log("PROPS ", props);
  return (
    <div>
      {props.auth.isModalOpen === true && props.auth.isAuth === false ? (
        <LoginRegistrationModal />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(InitialLanding);
