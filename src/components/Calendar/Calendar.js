import React, { Component } from "react";
import Weekcontainer from "../WeekContainer/WeekContainer";
import DatesContainer from "../DatesContainer/DatesContainer";
import RemainderForm from "../RemainderForm/RemainderForm";
import "./Calendar.css";

class Calendar extends Component {
  state = {
    currentDay: new Date().getDate(),
    month: new Date().getMonth(),
    showModal: true
  };

  render() {
    return (
      <>
        <div id="calendar" className="calendar">
          <div id="month" className="month">
            <h2 id="monthName">July</h2>
          </div>
          <Weekcontainer />
          <DatesContainer month={this.state.month} />
        </div>
        {/* <RemainderForm show={this.state.showModal} /> */}
      </>
    );
  }
}

export default Calendar;
