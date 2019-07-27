import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RemainderForm = props => {
  return (
    <div>
      <Modal
        show={true}
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
          <Form>
            <Form.Group controlId="Reminder">
              <Form.Control type="text" placeholder="Enter Reminder" />
            </Form.Group>

            <Form.Group controlId="time">
              <Form.Label>Start</Form.Label>
              <Form.Control type="datetime-local" placeholder="Time" />
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Select Reminder's Color</Form.Label>
              <Form.Control type="color" value="#FFFFFF" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RemainderForm;
