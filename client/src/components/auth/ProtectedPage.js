import React from "react";
import { connect } from "react-redux";
import { getUserFromToken } from "../../utils/API";

class ProtectedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let token = window.localStorage.getItem("token");
    token
      ? getUserFromToken(token, this.props.dispatch)
      : console.log("there is no token");
  }
  render() {
    return (
      <div>
        <h1>Protected Page</h1>
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
