import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import "./RemainderForm.css";

const RemainderForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.onSaveRemainder();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Remainder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formTitle">
              <Form.Label>Remind</Form.Label>
              <Form.Control type="text" placeholder="Enter Reminder" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="formDate">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Medellín</option>
                <option>Bogota</option>
                <option>Cartagena</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Medellín</option>n>
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
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveRemainder: remainder =>
      dispatch({
        type: "SAVE_REMAINDER",
        remainder: [
          Date.parse(new Date(2019, 6, 2, 15, 20)),
          {
            title: "created remainder ",
            city: "Medellin"
          }
        ]
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RemainderForm);
