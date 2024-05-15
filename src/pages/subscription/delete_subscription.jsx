import React from 'react';
import { Modal } from 'react-bootstrap';
import deleteIconGif from '../../../src/assets/images/delete.gif'; 
import axiosInstance from '../../config/axiosConfig';


const DeleteSubscriptionModal = ({ show, handleClose, subscriptionId }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/subscriptions/${subscriptionId}`);
      console.log('Subscription Deleted:',subscriptionId);
      handleClose();
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <img
                src={deleteIconGif}
                alt="Deleting..."
                style={{ width: '100px', height: '100px' }}
              />
              <h4 className="mt-4">Are you sure?</h4>
              <p className="text-muted">Are you sure you want to remove this record?</p>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <button type="button" className="btn btn-light" onClick={handleClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleDelete}>
                Yes, Delete It!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSubscriptionModal;
