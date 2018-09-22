import React from "react";
import UsedCombo from './usedCombo'
import { connect } from "react-redux";

const InUse = props => (
  <div>
    {props.combinations.map((combo, index) => {
      let name = props.users.find(el => {
        return el.id == combo.userId;
      });
      let role = props.roles.find(el => {
        return el.id == combo.roleId;
      });
      let project = props.projects.find(el => {
        return el.id == combo.projectId;
      });
      return (
        <UsedCombo   name={name}
          role={role}
          project={project}
          combo={combo}
          index={index}
          key={combo.userId}
          />


      );
    })}
  </div>
);

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    users: state.users,
    roles: state.roles,
    combinations: state.combinations,
    projects: state.projects
  };
};

export default connect(mapStateToProps)(InUse);
