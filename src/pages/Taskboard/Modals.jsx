import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddBoardModal = ({ show, handleClose, handleAddBoard }) => {
  const [boardName, setBoardName] = useState('');

  const handleInputChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleSubmit = () => {
    handleAddBoard(boardName);
    setBoardName('');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBoardName">
            <Form.Label>Board Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter board name"
              value={boardName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Board
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBoardModal;
