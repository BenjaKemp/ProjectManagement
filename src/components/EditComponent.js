import React from 'react';
import { connect } from 'react-redux';

const EditComponent= (props) => {
  console.log(props)
  return (
    <div>
<h1>this is the eit page page</h1>
      <button onClick={() => {
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {

    return {
      users: state.users,
      roles: state.roles,
      combinations: state.combinations,
      projects: state.projects
    };
  
};

export default connect(mapStateToProps)(EditComponent);
