import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authAction';
const SignedLinks = (props)=> {
    return(
    <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.logOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
    </ul>
    );
}

const mapsDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(signOut())
    }
}
export default connect(null, mapsDispatchToProps)(SignedLinks);