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
            <h2 id="monthName">{monthNames[this.props.month]}</h2>
          </div>
          <Weekcontainer />
          <DatesContainer month={this.props.month} />
        </div>
        {this.props.showModal ? (
          <RemainderForm
            show={this.props.showModal}
            onHide={this.props.onCloseModal}
            color={this.props.color}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    month: state.month,
    showModal: state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () =>
      dispatch({
        type: "HIDE_MODAL"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
