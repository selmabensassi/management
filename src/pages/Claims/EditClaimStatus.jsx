import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axiosInstance from '../../config/axiosConfig';

const EditClaimStatus = ({ show, handleClose, claim, updateClaimStatus }) => {
  const [status, setStatus] = useState(claim ? claim.status : '');

  useEffect(() => {
    if (claim) {
      setStatus(claim.status);
    }
  }, [claim]);

  const handleSave = async () => {
    if (!claim) return;

    try {
      await axiosInstance.patch(`/claim/${claim._id}/status`, { status });
      updateClaimStatus(claim._id, status);
      handleClose();
    } catch (error) {
      console.error('Error updating claim status:', error.response ? error.response.data : error.message);
    }
  };

  if (!claim) {
    return null; 
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Claim Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formClaimStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditClaimStatus;
