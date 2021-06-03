import React from "react";
import { connect } from "react-redux";
import NavLoginBtn from "./NavLoginBtn";
import HamburgerBtn from "./HamburgerBtn";
import Navlinks from "./Navlinks";
import NavLogoutBtn from "./NavLogoutBtn";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }
  handleWindowResize() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
  render() {
    return (
      <nav style={{ backgroundColor: "pink", width: "100%", minHeight: "8vh" }}>
        {this.props.auth.isAuth === false ? (
          <span></span>
        ) : window.innerWidth > 700 ? (
          <Navlinks />
        ) : (
          <HamburgerBtn />
        )}
        {this.props.auth.isAuth === false &&
          this.props.auth.isLoggingIn === false && <NavLoginBtn />}
        {this.props.auth.isAuth === true && <NavLogoutBtn />}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
