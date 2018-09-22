import React from "react";
import { connect } from "react-redux";

const Available = props => {
  const userkeys = props.combinations.map(a => a.userId);
  const projectKeys = props.combinations.map(a => a.projectId);
  const roleKeys = props.combinations.map(a => a.roleId);

  return (
    <div>
      <h2>This is whats available</h2>
      <p>Users</p>
      {props.users.map((person, i) => {
        if (!userkeys.includes(person.id.toString())) {
          return <p key={i}>{person.name}</p>;
        }
      })}
      <br />
      <p>Projects</p>
      {props.projects.map((project, i) => {
        if (!projectKeys.includes(project.id.toString())) {
          return <p key={i}>{project.name}</p>;
        }
      })}
      <br />
      <p>Roles</p>
      {props.roles.map((role, i) => {
        if (!roleKeys.includes(role.id.toString())) {
          return <p key={i}>{role.name}</p>;
        }
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    roles: state.roles,
    projects: state.projects,
    users: state.users,
    combinations: state.combinations
  };
};

export default connect(mapStateToProps)(Available);
