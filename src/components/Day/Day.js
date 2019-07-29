import React from "react";
import { connect } from "react-redux";
import "./Day.css";
import Remainder from "../Remainder/Remainder";

const Day = props => {
  let remaindersArray = props.remainders.reduce(
    (accumulator, currentremainder) => {
      const remainderDate = new Date(currentremainder.date + "T00:00:00-05:00");
      if (
        remainderDate.getMonth() === props.month &&
        remainderDate.getDate() === props.date
      ) {
        accumulator.push(
          <Remainder
            title={currentremainder.title}
            key={currentremainder.id}
            id={currentremainder.id}
          />
        );
      }
      return accumulator;
    },
    []
  );

  return (
    <div className="day" id={props.date}>
      {props.date}
      {remaindersArray}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    remainders: state.remainders
  };
};

export default connect(mapStateToProps)(Day);
