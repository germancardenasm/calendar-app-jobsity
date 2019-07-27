import React from "react";
import "./Day.css";
import Remainder from "../Remainder/Remainder";

const Day = props => {
  return (
    <div className="day">
      {props.date}
      <Remainder />
    </div>
  );
};

export default Day;
