import React from 'react'
import { connect } from 'react-redux';
import { loggingIn } from '../../utils/redux/actions/authActions'

const ModalOpenCloseTab = (props) => {
    const modalbtn = '\u2bbe';
    return (
        <div>
            <button onClick={()=>props.dispatch(loggingIn(false))}>{modalbtn}</button>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(ModalOpenCloseTab)
