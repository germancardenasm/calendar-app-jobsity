import React from "react";
import { connect } from "react-redux";
import "./Day.css";
import Remainder from "../Remainder/Remainder";

const Day = props => {
  let remaindersArray = props.remainders.reduce(
    (accumulator, currentremainder) => {
      const TIME_STAMP = 0;
      const remainderDate = new Date(currentremainder[TIME_STAMP]);
      if (
        remainderDate.getMonth() === props.month &&
        remainderDate.getDate() === props.date
      ) {
        accumulator.push(
          <Remainder
            title={currentremainder[1].title}
            key={currentremainder[TIME_STAMP]}
            id={currentremainder[TIME_STAMP]}
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
