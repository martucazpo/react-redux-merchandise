import React from "react";
import { connect } from "react-redux";
import NavLoginBtn from "./NavLoginBtn";

const Navbar = (props) => {
  return (
    <nav style={{ backgroundColor: "pink", width: "100%", minHeight: "8vh" }}>
      {props.auth.isAuth === false && props.auth.isLoggingIn === false && (
        <NavLoginBtn />
      )}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
