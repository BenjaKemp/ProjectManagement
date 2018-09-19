import React from 'react';
import { connect } from 'react-redux';

 class AddComboForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onSubmit = (e) => {
    e.preventDefault();

  };
  render() {

    {console.log(this.props)}
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <select name="User" >
            {this.props.stateUsers.map((e, key) => {
              console.log('e', e)
              return <option key={key} value={e.name}>{e.name}</option>;
              })
            }
</select>
          <select name="Role" >
            {this.props.stateRole.map((e, key) => {
              console.log('e', e)
              return <option key={key} value={e.name}>{e.name}</option>;
              })
            }
</select>
          <select name="Projects" >
            {this.props.stateProjects.map((e, key) => {
              console.log('e', e)
              return <option key={key} value={e.name}>{e.name}</option>;
              })
            }
</select>

          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    stateRole: state.roles,
    stateUsers: state.users,
    stateProjects: state.projects

  };
};

export default connect(mapStateToProps)(AddComboForm);
