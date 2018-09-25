import React from "react";
import { connect } from "react-redux";
import {editCombo, deleteCombo} from '../actions'

class EditComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.combinations[this.props.match.params.id].userId,
      roleId: this.props.combinations[this.props.match.params.id].roleId,
      projectId: this.props.combinations[this.props.match.params.id].projectId,
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
    console.log('inside the submit')
    this.props.history.push('/');
    this.props.dispatch(editCombo({
        userId: this.state.userId,
        roleId: this.state.roleId,
        projectId: this.state.projectId,
        index: this.props.match.params.id
      }));
  };
  render() {
    const userkeys = this.props.combinations.map(a => a.userId);
    const projectKeys = this.props.combinations.map(a => a.projectId);
    const roleKeys = this.props.combinations.map(a => a.roleId);

    return (
      <div>
        <h1>this is the edit</h1>

        <h1>{this.props.match.params.id.userId}</h1>
        <form onSubmit={this.onSubmit}>
          <select name="User" onChange={this.onUserChange} required>

            {this.props.stateUsers.map(user => {
              if(!userkeys.includes(user.id.toString())){
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              )};
            })}
          </select>
          <select name="Role" onChange={this.onRoleChange}>
            {this.props.stateRole.map(role => {

                if(!roleKeys.includes(role.id.toString())){
              return (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              )};
            })}
          </select>
          <select name="Projects" onChange={this.onProjectChange}>

            {this.props.stateProjects.map(project => {
                if(!projectKeys.includes(project.id.toString())){
              return (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              )};
            })}
          </select>

          <button type="submit">Edit Combo</button>
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

export default connect(mapStateToProps)(EditComponent);





// <button type="button" onClick={this.props.dispatch(deleteCombo(this.props.match.params.id))}>Delete Combo</button>
