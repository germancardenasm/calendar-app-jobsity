import React, { Component } from "react";
import { connect } from "react-redux";
import Weekcontainer from "../WeekContainer/WeekContainer";
import DatesContainer from "../DatesContainer/DatesContainer";
import RemainderForm from "../RemainderForm/RemainderForm";
import monthNames from "./monthsNames";
import "./Calendar.css";

class Calendar extends Component {
  render() {
    return (
      <>
        <div id="calendar" className="calendar">
          <div id="month" className="month">
            <h2 id="monthName">{monthNames[this.props.month + 1]}</h2>
          </div>
          <Weekcontainer />
          <DatesContainer month={this.props.month} />
        </div>
        <RemainderForm show={this.props.showModal} color={this.props.color} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentDay: state.currentDay,
    month: state.month,
    showModal: state.showModal
  };
};

export default connect(mapStateToProps)(Calendar);
