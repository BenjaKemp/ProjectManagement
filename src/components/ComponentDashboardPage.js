import React from 'react';
import { connect } from 'react-redux';
import Available from './Available'
import InUse from './InUse'


const ComponentDashboardPage = (props) => {
  return (
  <div>
<Available/>
<InUse/>
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
