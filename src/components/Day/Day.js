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
          <Remainder remainder={currentremainder} key={currentremainder.id} />
        );
      }
      return accumulator;
    },
    []
  );

  // Order cronologically the remainders to render inside Day component.
  remaindersArray.sort((a, b) => {
    return new Date(a.props.remainder.date + "T" + a.props.remainder.time) >
      new Date(b.props.remainder.date + "T" + b.props.remainder.time)
      ? 1
      : -1;
  });

  return (
    <div className={props.date ? "day" : "day empty"} id={props.date}>
      {" " + props.date}
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
