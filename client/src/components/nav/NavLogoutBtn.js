import React from 'react'
import { connect } from 'react-redux';
import { loggoutThisUser } from "../../utils/redux/actions/authActions";

const NavLogoutBtn = (props) => {
    const logOut = () => {
        window.localStorage.removeItem("token");
        props.dispatch(loggoutThisUser());
      }
    return (
        <button onClick={logOut}>Log Out</button>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(NavLogoutBtn)
