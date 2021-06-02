import React from "react";
import { connect } from "react-redux";
import { getUserFromToken } from "../../utils/API"
import { loggoutThisUser } from '../../utils/redux/actions/authActions'

class ProtectedPage extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    let token = window.localStorage.getItem("token");
    token
      ? getUserFromToken(token, this.props.dispatch)
      : console.log("there is no token");
  }
  logOut(){
    window.localStorage.removeItem("token");
    this.props.dispatch(loggoutThisUser())
  }
  render() {
      console.log("FROM PP ", this.props)
    return (
      <div>
        <h1>Protected Page</h1>
        <div>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedPage);
