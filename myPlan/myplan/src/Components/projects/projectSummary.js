import React from 'react';
import moment from 'moment'
const projectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 projectSummary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authFirstName}
                    {project.authLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    );
}
export default projectSummary;