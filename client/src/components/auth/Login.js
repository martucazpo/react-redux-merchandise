import React from "react";
import { connect } from "react-redux";
import { loginOneUser } from "../../utils/API";
import {
  loginThisUser,
  sendServerMsg,
} from "../../utils/redux/actions/authActions";
import RegistrationBtn from './RegistrationBtn';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(sendServerMsg(""));
    loginOneUser(this.state);
    this.props.dispatch(loginThisUser(true));
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <p>{this.props.auth.serverMsg !== "" && this.props.auth.serverMsg}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            type="text"
            required
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            type="text"
            required
          />
          <div>
            <button type="submit">LOGIN</button>
          </div>
        </form>
        <RegistrationBtn />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);
