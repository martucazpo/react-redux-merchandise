import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import InitialLanding from "./components/auth/InitialLanding";
import ProtectedPage from "./components/auth/ProtectedPage";
import Navbar from "./components/nav/Navbar";

const App = (props) => {
  console.log("APP PROPS ", props);
  return (
    <BrowserRouter>
    <Navbar />
      {!props.auth.isAuth ? (
        <Route exact path="/" component={InitialLanding} />
      ) : (
        <Route exact path="/" component={ProtectedPage} />
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
