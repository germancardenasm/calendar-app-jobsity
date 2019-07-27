import React from "react";
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
      datesElements.push(<Day date={i} key={i} />);

    /*     if (thereIsBlankSpace(firstDayOfTheMonth)) {
      let spacesToFullFill =
        7 - ((months[selectedDay.getMonth()].days + firstDayOfTheMonth) % 7);
      createEmptyDays(spacesToFullFill);
    }  */
  };

  const firstDay = getFirstDayOfTheMonth(props.month);
  createDates(firstDay, props.month);

  return (
    <div id="datesContainer" className="datesContainer">
      {datesElements}
    </div>
  );
};

export default DatesContainer;
