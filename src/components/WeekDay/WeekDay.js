import React from "react";
import "./WeekDay.css";

const WeekDay = props => {
  return (
    <div className="weekDayName">
      <h3>{props.day}</h3>
    </div>
  );
};

export default WeekDay;
