import React from 'react';
import { connect } from 'react-redux';
import AddComboForm from './addComboForm'
import {addCombo} from '../actions'

const AddComponent = (props) => (
  <div>
    <h1>Add a new combo</h1>
    <AddComboForm   onSubmit={(combo) => {
        props.history.push('/');
        props.dispatch(addCombo(combo));
      }}/>
  </div>
);

export default connect()(AddComponent);
