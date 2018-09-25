import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {editCombo, deleteCombo} from '../actions'

const UsedCombo = (props) => {
  return (
  <div>
    <button><Link to={`/edit/${props.index}`} onSubmit={(combo) => {
        props.history.push('/');
        props.dispatch(editCombo(combo));
      }}>
    </Link>edit</button>
<p>{props.name.name} has the role of {props.role.name} on the {props.project.name}</p>
<button onClick={()=>{
    console.log(props)
  props.dispatch(deleteCombo(props.index))}
}>delete</button>
  </div>
  )
}

export default connect()(UsedCombo);
