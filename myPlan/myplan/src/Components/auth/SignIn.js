import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../store/actions/authAction'
import { Redirect } from 'react-router-dom';
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .signIn(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className="grey-text text-darken-3">Sign In</h4>

                    <div className='input-field'>
                        <label className='grey-text text-darken-3' htmlFor='email'>Email:</label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label className='grey-text text-darken-3' htmlFor='password'>Password:</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className='btn pink lighten-1 z-depth-0'>Log In</button>
                    </div>
                    <div className="red-text center">
                        {
                            authError
                                ? <p>{authError}</p>
                                : null
                        }
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => {
            dispatch(signIn(creds))
        }
    }
}
const mapStateToProps = (state) => {
    return{
        authError : state.authReducer.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);