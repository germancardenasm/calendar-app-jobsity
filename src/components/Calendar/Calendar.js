import React, { Component } from "react";
import Day from "../Day/Day";
import Weekcontainer from "../WeekContainer/WeekContainer";
import "./Calendar.css";

class Calendar extends Component {
  state = {
    month: "July",
    currentDay: new Date().getDate()
  };

  render() {
    return (
      <div id="calendar" className="calendar">
        <div id="month" className="month">
          <h2 id="monthName">July</h2>
        </div>
        <Weekcontainer />
        <div id="datesContainer" className="datesContainer">
          <Day date={1} />
          <Day date={2} />
        </div>
      </div>
    );
  }
}

export default Calendar;
