import React from "react";
import WeekDay from "../WeekDay/WeekDay";
import "./WeekContainer.css";

const WeekContainer = () => {
  const daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const week = daysNames.map((day, index) => {
    const a = <WeekDay day={day} key={index} />;
    return a;
  });

  return (
    <div id="week" className="week">
      {week}
    </div>
  );
};

export default WeekContainer;
