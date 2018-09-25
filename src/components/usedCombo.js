import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {editCombo, deleteCombo} from '../actions'

const UsedCombo = (props) => {
  return (
  <div>
    <Link to={`/edit/${props.index}`} onSubmit={(combo) => {
        props.history.push('/');
        props.dispatch(editCombo(combo));
      }}>
      <button>
      edit</button>
    </Link>
<p>{props.name.name} has the role of {props.role.name} on the {props.project.name}</p>
<button onClick={()=>{
  props.dispatch(deleteCombo(props.index))}
}>delete</button>
  </div>
  )
}

export default connect()(UsedCombo);
