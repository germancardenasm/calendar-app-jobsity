import React from "react";
import WeekDay from "../WeekDay/WeekDay";
import "./WeekContainer.css";

const WeekContainer = () => {
  const daysNames = ["S", "M", "T", "W", "T", "F", "S"];

  const week = daysNames.map(day => {
    const a = <WeekDay day={day} />;
    return a;
  });
  debugger;
  return (
    <div id="week" className="week">
      {week}
    </div>
  );
};

export default WeekContainer;
