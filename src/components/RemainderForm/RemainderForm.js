import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import "./RemainderForm.css";

class RemainderForm extends Component {
  state = {
    title: "",
    date: "2019-07-01",
    time: "08:00",
    color: "#FFFFFF",
    city: "Medellín",
    country: "Colombia",
    weather: "",
    weatherIcon: ""
  };

  componentDidMount() {
    this.setState({ ...this.props.currentRemainder }, this.fecthWeather);
  }

  fecthWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      },Col&appid=6deea3333818f74a60c830d5144a9514`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        return this.updateWeather(json);
      });
  };

  updateWeather = response => {
    const img = `http://openweathermap.org/img/wn/${
      response.list[0].weather[0].icon
    }@2x.png`;
    this.setState({
      weather: response.list[0].weather[0].description,
      weatherIcon: img
    });
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (this.state.id) {
        this.props.onSaveRemainder("EDIT_REMAINDER", {
          id: this.state.id,
          title: this.state.title,
          date: this.state.date,
          time: this.state.time,
          color: this.state.color,
          city: this.state.city,
          country: this.state.country
        });
      } else {
        this.props.onSaveRemainder("SAVE_REMAINDER", {
          title: this.state.title,
          date: this.state.date,
          time: this.state.time,
          color: this.state.color,
          city: this.state.city,
          country: this.state.country
        });
      }
      //Reset State of the Form
      this.resetState();
    }
  };

  //Limit length of reminder titel to 30 charaters
  handleTitleChange = event => {
    if (event.target.value.length < 30)
      this.setState({ title: event.target.value });
  };
  //Handlers for controlled inputs
  handleDateChange = event => {
    this.setState({ date: event.target.value }, this.fecthWeather);
  };
  handleTimeChange = event => {
    this.setState({ time: event.target.value }, this.fecthWeather);
  };
  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };
  handleCityChange = event => {
    this.setState({ city: event.target.value }, this.fecthWeather);
  };
  handleCountryChange = event => {
    this.setState({ country: event.target.value });
  };

  //When  modal closes dispatches a HIDE_MODAL and Reset de UI state
  handleClose = () => {
    this.props.onCloseModal();
    this.resetState();
  };

  resetState = () =>
    this.setState({
      title: "",
      date: "2019-07-01",
      time: "08:00",
      color: "#FFFFFF",
      city: "Medellín",
      country: "Colombia",
      weather: "",
      weatherIcon: ""
    });

  render() {
    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.handleClose}
        className="remainderForm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Remainder
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formTitle">
                <Form.Label>Remind</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Reminder"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formTitle">
                <div className="weatherIcon d-flex align-items-center justify-content-end">
                  <h6>{this.state.weather}</h6>
                  <Image src={this.state.weatherIcon} fluid />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  required
                  type="time"
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                >
                  <option>Medellín</option>
                  <option>Bogotá</option>
                  <option>Cartagena</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={this.state.country}
                  onChange={this.handleCountryChange}
                >
                  <option>Colombia</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formColor">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="Color"
                  value={this.state.color}
                  onChange={this.handleColorChange}
                />
              </Form.Group>
            </Form.Row>
            <div className=" d-flex justify-content-between">
              <Button variant="danger" disabled={!this.state.id}>
                <i id="delete" className="icon far fa-trash-alt" />
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  currentDay: state.currentDay,
  month: state.month,
  currentRemainder: state.currentRemainder
    ? { ...state.currentRemainder }
    : {
        title: "",
        date: "2019-07-01",
        time: "08:00",
        color: "#FFFFFF",
        city: "Medellín",
        country: "Colombia"
      }
});

const mapDispatchToProps = dispatch => {
  return {
    onSaveRemainder: (action, remainderInfo) => {
      const actionToSend = {};

      actionToSend.remainder = { ...remainderInfo };
      switch (action) {
        default:
        case "SAVE_REMAINDER":
          actionToSend.type = "SAVE_REMAINDER";
          actionToSend.remainder.id = Date.parse(
            new Date(remainderInfo.date + "T" + remainderInfo.time)
          );
          break;

        case "EDIT_REMAINDER":
          actionToSend.type = "EDIT_REMAINDER";
          break;
      }
      dispatch(actionToSend);
    },

    onCloseModal: () => dispatch({ type: "HIDE_MODAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemainderForm);
