import React from "react";
import { connect } from "react-redux";
import Day from "../Day/Day";

const DatesContainer = props => {
  let datesElements = [];
  const YEAR = 2019;

  const getFirstDayOfTheMonth = (month, year = YEAR) => {
    return new Date(year, month, 1).getDay();
  };

  const createEmptyDays = (qtyOfSpaces, month) => {
    for (let i = 0; i < qtyOfSpaces; i++) {
      datesElements.push(<Day date={""} key={"prev" + i} />);
    }
  };

  const createDates = (firstDay, month) => {
    const lastDay = new Date(YEAR, month + 1, 0).getDate();
    if (firstDay > 0) createEmptyDays(firstDay, props.month);
    for (let i = 1; i <= lastDay; i++)
      datesElements.push(<Day date={i} month={month} key={i} />);
  };

  const firstDay = getFirstDayOfTheMonth(props.month);
  createDates(firstDay, props.month);

  return (
    <div
      id="datesContainer"
      className="datesContainer"
      onClick={props.onClickCalendar}
    >
      {datesElements}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCalendar: () =>
      dispatch({
        type: "SHOW_MODAL"
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DatesContainer);
