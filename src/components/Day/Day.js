import React from "react";
import { connect } from "react-redux";
import "./Day.css";
import Remainder from "../Remainder/Remainder";

const Day = props => {
  return (
    <div className="day">
      {props.date}
      <Remainder title="title reminder" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    remainders: state.remainders
  };
};

export default connect(mapStateToProps)(Day);
