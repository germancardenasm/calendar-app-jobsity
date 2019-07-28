import React from "react";
import "./RemainderForm.css";

const RemainderForm = props => {
  return (
    <div className="remainderFormContainer">
      <form className="form">
        <header className="modalHeader">
          <div>
            <h4>Remainder</h4>
          </div>
          <button className="close">X</button>
        </header>
        <p>Weather: rain</p>
        <input type="text" className="remainderText" placeholder="Remainder" />
        <input type="date" className="remainderText" />
        <input type="time" className="remainderText" />
        <input type="text" className="remainderText" placeholder="City" />
        <input type="text" className="remainderText" placeholder="Country" />
        <label>Color: </label>
        <input className="color" type="color" id="color-input" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default RemainderForm;
