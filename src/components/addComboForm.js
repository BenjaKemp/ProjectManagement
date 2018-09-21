import React from "react";
import { connect } from "react-redux";

class AddComboForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: 1,
      roleId: 1,
      projectId: 1
    };
  }
  onUserChange = e => {

    let id = e.target.value;
    this.setState(() => ({ userId: id }));
  };
  onProjectChange = e => {
    let id = e.target.value;
    this.setState(() => ({ projectId: id }));
  };
  onRoleChange = e => {
    let id = e.target.value;
    this.setState(() => ({ roleId: id }));
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
        userId: this.state.userId,
        roleId: this.state.roleId,
        projectId: this.state.projectId,
      });
  };
  render() {
    console.log(this.props)
    const state = this.state;
    const userkeys = this.props.combinations.map(a => a.userId);
    const projectKeys = this.props.combinations.map(a => a.userId);
    const roleKeys = this.props.combinations.map(a => a.userId);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <select name="User" onChange={this.onUserChange}>
            {this.props.stateUsers.map(user => {
              if(!userkeys.includes(user.id)){
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              )};
            })}
          </select>
          <select name="Role" onChange={this.onRoleChange}>
            {this.props.stateRole.map(role => {
                if(!roleKeys.includes(role.id)){
              return (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              )};
            })}
          </select>
          <select name="Projects" value={state.projectId} onChange={this.onProjectChange}>
            {this.props.stateProjects.map(project => {
                if(!projectKeys.includes(project.id)){
              return (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              )};
            })}
          </select>

          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    stateRole: state.roles,
    stateUsers: state.users,
    stateProjects: state.projects,
    combinations: state.combinations
  };
};

export default connect(mapStateToProps)(AddComboForm);
