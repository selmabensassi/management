import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axiosInstance from '../../../../config/axiosConfig';

const DeleteModal = ({ show, handleClose, syndicateId }) => {
 const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/Syndic/${syndicateId}`);
      console.log('Syndicate Deleted:', syndicateId);
      handleClose();  
    } catch (error) {
      console.error('Error deleting syndicate:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm removal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
