import React from "react";
import { connect } from "react-redux";
import { registerOneUser } from "../../utils/API";
import {
  sendRegisterMsg,
  sendServerMsg,
} from "../../utils/redux/actions/authActions";
import ModalOpenCloseTab from './ModalOpenCloseTab';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
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
    this.props.dispatch(sendRegisterMsg(""));
    if (this.state.password1 === this.state.password2) {
      let pre = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/;
      let passPass = this.state.password1.match(pre);
      if (passPass) {
        let user = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password1,
        };
        registerOneUser(user);
          this.setState({
            ...this.state,
            email: "",
          });
      } else {
        let message = "Please review password requirements";
        this.props.dispatch(sendRegisterMsg(message));
        this.setState({
          ...this.state,
          password1: "",
          password2: "",
        });
      }
    } else {
      let message = "The passwords do not match";
      this.props.dispatch(sendRegisterMsg(message));
      this.setState({
        ...this.state,
        password1: "",
        password2: "",
      });
    }
  }
  render() {
    return (
      <div>
        <ModalOpenCloseTab />
        <h3>Register</h3>
        <p>
          {this.props.auth.registerMsg !== "" && this.props.auth.registerMsg}
        </p>
        <p>{this.props.auth.serverMsg !== "" && this.props.auth.serverMsg}</p>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
            type="text"
            required
          />
          <label>Last Name</label>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
            type="text"
            required
          />
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            type="text"
            required
          />
          <div>
            <p>
              Passwords must contain at least one lower case letter, one upper
              case letter, one numeral, and one special character
            </p>
            <input
              name="password1"
              value={this.state.password1}
              onChange={this.handleChange}
              placeholder="Password"
              type="text"
              required
            />
            <input
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}
              placeholder="Re-enter password"
              type="text"
              required
            />
          </div>
          <div>
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Register);
