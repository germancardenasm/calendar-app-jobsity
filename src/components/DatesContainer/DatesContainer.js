import React from "react";
import { connect } from "react-redux";
import Day from "../Day/Day";

const DatesContainer = props => {
  let datesElements = [];
  const YEAR = 2019;

  // If first day of the month is not Sunday will need to know what day
  //the month begins to render the calendar.
  const getFirstDayOfTheMonth = (month, year = YEAR) => {
    return new Date(year, month, 1).getDay();
  };

  // If month do not start on sunday, fill with empty spaces the days
  //before the first of the month.
  const createEmptyDays = (qtyOfSpaces, prefix) => {
    for (let i = 0; i < qtyOfSpaces; i++) {
      datesElements.push(<Day date={""} key={prefix + i} />);
    }
  };

  //Render the days of the current month.
  const createDates = (firstDay, month) => {
    const lastDay = new Date(YEAR, month + 1, 0).getDate();
    if (firstDay > 0) createEmptyDays(firstDay, "prev");
    for (let i = 1; i <= lastDay; i++)
      datesElements.push(<Day date={i} month={month} key={i} />);
  };

  //Fill with empty spaces to complete the last week in case the week
  //does not end in saturday
  const thereIsBlankSpace = firstDay => {
    let thereIs =
      (new Date(YEAR, props.month + 1, 0).getDate() % 7) + firstDay > 1;
    return thereIs;
  };

  const firstDay = getFirstDayOfTheMonth(props.month);
  createDates(firstDay, props.month);
  if (thereIsBlankSpace(firstDay)) {
    let spacesToFill =
      7 - (((new Date(2019, 6 + 1, 0).getDate() % 7) + firstDay) % 7);
    createEmptyDays(spacesToFill, "next");
  }

  const onCLickHandler = event => {
    if (!event.target.classList.contains("empty")) props.onClickCalendar(event);
  };

  return (
    <div
      className="datesContainer"
      id="datesContainer"
      onClick={onCLickHandler}
    >
      {datesElements}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCalendar: event =>
      dispatch({
        type: "SHOW_REMAINDER",
        target: event.target
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DatesContainer);
