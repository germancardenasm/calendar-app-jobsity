import React from "react";
import "./Remainder.css";

const Remainder = props => {
  return (
    <div className="remainder" id={props.id}>
      {props.title}
    </div>
  );
};

export default Remainder;
