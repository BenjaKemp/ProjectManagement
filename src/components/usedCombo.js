import React from 'react';
import { Link } from 'react-router-dom';

const UsedCombo = (props) => {
  console.log(props)
  return (
  <div>
    <Link to={`/edit/${props.index}`}>
<p>{props.name.name} has the role of {props.role.name} on the {props.project.name}</p>
    </Link>

  </div>
  )
}

export default UsedCombo;
