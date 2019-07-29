import React from "react";
import "./Remainder.css";

const Remainder = props => {
  return (
    <div
      className="remainder"
      id={props.remainder.id}
      style={{ backgroundColor: props.remainder.color }}
    >
      {props.remainder.title}
    </div>
  );
};

export default Remainder;
