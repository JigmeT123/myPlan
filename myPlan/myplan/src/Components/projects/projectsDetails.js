import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const {project, auth} = props;
    if(!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return (
            <div className='container section project-details'>
                <div className='card z-depth-0'>
                    <div className="card-content">
                        <span className="card-title">Project Title - {project.title}</span>
                        <p>{project.content}
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authFirstName} {project.authLastName}</div>
                        <p>{moment(project.createdAt.toDate().toString()).calendar()}</p>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className='container center'>
                <h3 className='white-text'>Loading Project...</h3>
            </div>
        );
    }

}
const mapsStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        project: state.firestore.data.projects && state
            .firestore
            .data
            .projects[id],
        // Not state.firestore.ordered as a single project document will be fetched so
        // technically there is no order needed. If you still want
        // state.firestore.ordered, you can try the following: project:
        // state.firestore.ordered.project[0] But be aware that ordered will have just
        // one document so you will need extra [0]
        auth: state.firebase.auth,
    }
}
export default compose(connect(mapsStateToProps), firestoreConnect([
    {
        collection: 'projects'
    }
]),)(ProjectDetails);