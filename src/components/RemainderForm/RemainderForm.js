import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import "./RemainderForm.css";
import { reminderAction, getDefaultReminder } from "../../store/actions";

class RemainderForm extends Component {
  state = getDefaultReminder();

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
        return this.showWeather(json);
      });
  };

  showWeather = response => {
    //Openweather free tier does not allow to fetch weather of any date.
    //Because of that for this challenge the app uses a random number
    //to get weather from the list return to show the fucntionality
    const random = Math.floor(Math.random() * 40);
    const img = `http://openweathermap.org/img/wn/${
      response.list[random].weather[0].icon
    }@2x.png`;
    this.setState({
      weather: response.list[0].weather[0].description,
      weatherIcon: img
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.isDateReserved()) {
      console.log("date reserved");
      event.stopPropagation();
      this.setState({ dataReserved: true });
      return;
    }
    if (this.state.id) {
      this.props.onSaveRemainder("EDIT_REMAINDER", {
        ...this.state
      });
    } else {
      this.props.onSaveRemainder("SAVE_REMAINDER", {
        ...this.state
      });
    }
    //Reset State of the Form to erase old content
    this.resetState();
  };

  isDateReserved = () => {
    const reserved = this.props.remainders.some(element => {
      return (
        element.date === this.state.date &&
        element.time === this.state.time &&
        element.id !== this.state.id
      );
    });
    //reserved ? this.props.onDateReserved() : this.props.onDateAvailable();
    return reserved;
  };
  //Limit length of reminder title to 30 charaters
  handleTitleChange = event => {
    if (event.target.value.length < 30)
      this.setState({ title: event.target.value });
  };
  //Handlers for controlled inputs
  handleDateChange = event => {
    this.setState(
      { date: event.target.value, dataReserved: false },
      this.fecthWeather
    );
  };
  handleTimeChange = event => {
    this.setState(
      { time: event.target.value, dataReserved: false },
      this.fecthWeather
    );
  };
  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };
  handleCityChange = event => {
    this.setState({ city: event.target.value }, this.fecthWeather);
  };

  //When  modal closes dispatches a HIDE_MODAL and Reset de UI state
  handleClose = () => {
    this.props.onCloseModal();
    this.resetState();
  };

  resetState = () => this.setState(getDefaultReminder());

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
                <Form.Text
                  className={this.state.dataReserved ? "text-danger" : "d-none"}
                >
                  Date and time already reserved.
                </Form.Text>
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
                  onChange={() => {}}
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
  month: state.month,
  remainders: state.remainders,
  dateReserved: state.dateReserved,
  currentRemainder: state.currentRemainder
    ? { ...state.currentRemainder }
    : getDefaultReminder()
});

const mapDispatchToProps = dispatch => {
  return {
    onSaveRemainder: (action, remainderInfo) => {
      const actionToSend = reminderAction(action, remainderInfo);
      dispatch(actionToSend);
    },

    onCloseModal: () => dispatch({ type: "HIDE_MODAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemainderForm);
