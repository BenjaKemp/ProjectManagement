import React from "react";

const UsedCombo = props => {
  console.log(props);
  return (
    <div>
      <h3>hello</h3>
      {props.name.name}
      {props.role.name}
      {props.project.name}
    </div>
  );
};

export default UsedCombo;
