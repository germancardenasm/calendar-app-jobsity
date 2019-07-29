import React from "react";
import { connect } from "react-redux";
import Day from "../Day/Day";

const DatesContainer = props => {
  let datesElements = [];
  const YEAR = 2019;

  const getFirstDayOfTheMonth = (month, year = YEAR) => {
    return new Date(year, month, 1).getDay();
  };

  const createEmptyDays = (qtyOfSpaces, prefix) => {
    for (let i = 0; i < qtyOfSpaces; i++) {
      datesElements.push(<Day date={""} key={prefix + i} />);
    }
  };

  const createDates = (firstDay, month) => {
    const lastDay = new Date(YEAR, month + 1, 0).getDate();
    if (firstDay > 0) createEmptyDays(firstDay, "prev");
    for (let i = 1; i <= lastDay; i++)
      datesElements.push(<Day date={i} month={month} key={i} />);
  };

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
