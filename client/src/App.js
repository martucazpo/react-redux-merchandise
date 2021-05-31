import React from "react";
import { connect } from "react-redux";
import { registerOneUser, loginOneUser, getUserFromToken } from "./utils/API";
import { registerThisUser } from "./utils/redux/actions/authActions";
//import { registerAndGetAUser } from './utils/redux/actions/authFunctions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  componentDidMount() {
    let token = window.localStorage.getItem("token");
    token
      ? getUserFromToken(token, this.props.dispatch)
      : console.log("there is no token");
  }
  registerUser(oneUser) {
    registerOneUser(oneUser);
    this.props.dispatch(registerThisUser());
  }
  loginUser(login) {
    loginOneUser(login);
  }
  render() {
    console.log("PROPS ", this.props);
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
    return (
      <div>
        <button onClick={() => this.registerUser(user)}>Register User</button>
        <button onClick={() => this.loginUser(loggedUser)}>Login User</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
