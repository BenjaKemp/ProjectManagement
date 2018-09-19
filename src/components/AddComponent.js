import React from 'react';
import { connect } from 'react-redux';
import AddComboForm from './addComboForm'

const AddComponent = (props) => (
  <div>
    <h1>Add a new combo</h1>
    <AddComboForm/>
  </div>
);

export default connect()(AddComponent);
