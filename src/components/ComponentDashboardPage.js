import React from 'react';
import { connect } from 'react-redux';
import Available from './Available'


const ComponentDashboardPage = (props) => {
  {console.log(props)}
  return (
  <div>
<Available/>
  </div>
  )
}

const mapStateToProps = (state, props) => {

  return {
    roles: state.roles,
    projects: state.projects,
    users: state.users
  }

};

export default connect(mapStateToProps)(ComponentDashboardPage);
