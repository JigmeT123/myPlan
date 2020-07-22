import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SignedLinks from './signInLinks';
import SignedOut from './SignOutLinks';

const NavBar = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedLinks profile={profile}/>:<SignedOut />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">myPlan</Link>
                <ul className="right">
                    {links}
                </ul>
            </div>
        </nav>
    );
}
const mapsStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}
export default connect(mapsStateToProps)(NavBar);