import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
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
    validate: false
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      this.setState({ validate: true });
      this.props.onSaveRemainder({
        title: this.state.title,
        date: this.state.date,
        time: this.state.time,
        color: this.state.color,
        city: this.state.City,
        country: this.state.City
      });
    }
  };

  //Limit length of reminder titel to 30 charaters
  handleTitleChange = event => {
    if (event.target.value.length < 30)
      this.setState({ title: event.target.value });
  };
  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };
  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
                  onChange={this.handleTitleChange}
                  value={this.state.title}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  defaultValue={this.state.date}
                  onChange={this.handleDateChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  required
                  type="time"
                  defaultValue={this.state.time}
                  onChange={this.handleTimeChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control required as="select">
                  <option>Medellín</option>
                  <option>Bogotá</option>
                  <option>Cartagena</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control required as="select">
                  <option>Colombia</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formColor">
                <Form.Label>Color</Form.Label>
                <Form.Control type="Color" />
              </Form.Group>
            </Form.Row>
            <div className="text-right">
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

const mapDispatchToProps = dispatch => {
  return {
    onSaveRemainder: remainderInfo =>
      dispatch({
        type: "SAVE_REMAINDER",
        remainder: [
          Date.parse(new Date(remainderInfo.date + "T" + remainderInfo.time)),
          {
            title: remainderInfo.title,
            date: remainderInfo.date,
            time: remainderInfo.time,
            color: remainderInfo.color,
            city: remainderInfo.City,
            country: remainderInfo.country
          }
        ]
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RemainderForm);
