import React, {Component} from 'react';
import {createProject} from '../store/actions/projectAction';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <h4 className="grey-text text-darken-3">Create Project</h4>
                    <div className='input-field'>
                        <label className='grey-text text-darken-3' htmlFor='title'>Title Of The Project</label>
                        <input type='text' id='title' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label className='grey-text text-darken-3' htmlFor='content'>Description Of The Project:</label>
                        <textarea className='materialize-textarea' type='text' id='content' onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);