import React from 'react';
import { connect } from 'react-redux'
import { loggingIn } from '../../utils/redux/actions/authActions'

const NavLoginBtn = (props) => {
    return (
        <button onClick={()=>props.dispatch(loggingIn(true))}>LOG IN</button>
    )
}

const mapStateToProps = ( state ) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(NavLoginBtn)
