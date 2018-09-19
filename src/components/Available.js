import React from 'react';
import { connect } from 'react-redux';


const Available = (props) => (

  <div>
<h2>This is whats available</h2>
<p>Users</p>
{props.users.map(person => <p>{person.name}</p>)}
<br/>
<p>Projects</p>
{props.projects.map(project => <p>{project.name}</p>)}
<br/>
<p>Roles</p>
{props.roles.map(role => <p>{role.name}</p>)}
  </div>
  )


const mapStateToProps = (state, props) => {

  return {
    roles: state.roles,
    projects: state.projects,
    users: state.users
  }

};

export default connect(mapStateToProps)(Available);
