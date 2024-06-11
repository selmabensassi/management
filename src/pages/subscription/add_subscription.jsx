import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import axiosInstance from '../../config/axiosConfig';
import DatePicker from 'react-datepicker';

export default function AddSubscriptionModal({ show, handleClose }) {
  const [subscription, setSubscription] = useState({
    subscriptionType: '',
    description: '',
    price: '',
    creationDate: new Date(),
    status: '',
    features: []
  });

  const [newFeature, setNewFeature] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubscription(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSubscription(prev => ({ ...prev, creationDate: date }));
  };

  const handleFeatureChange = (index, event) => {
    const { value } = event.target;
    setSubscription(prev => {
      const updatedFeatures = [...prev.features];
      updatedFeatures[index].isActive = value === 'active';
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setSubscription(prev => ({
        ...prev,
        features: [...prev.features, { name: newFeature, isActive: true }]
      }));
      setNewFeature('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/subscriptions', subscription);
      console.log('Subscription Added:', subscription);
      handleClose();
    } catch (error) {
      console.error('Error adding subscription:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-light p-3">
            <h5 className="modal-title">Add Subscription Plan</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ padding: '20px' }}>
              <div className="mb-4">
                <label className="form-label">Subscription Type</label>
                <input type="text" className="form-control" name="subscriptionType" value={subscription.subscriptionType} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={subscription.description} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" name="price" value={subscription.price} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label" style={{ paddingRight: '20px' }}>Creation Date</label>
                <DatePicker selected={subscription.creationDate} onChange={handleDateChange} className="form-control" dateFormat="MMMM d, yyyy" />
              </div>
              <div className="mb-4">
                <label className="form-label">Status</label>
                <select className="form-control" name="status" value={subscription.status} onChange={handleInputChange} required>
                  <option value="">Select Status</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Annually">Annually</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">Features</label>
                {subscription.features.map((feature, index) => (
                  <div key={index} className="mb-3 d-flex align-items-center">
                    <span style={{ marginRight: '10px', flexShrink: 0 }}>{feature.name}</span>
                    <div className="form-check form-check-inline" style={{ marginRight: '10px' }}>
                      <input type="radio" className="form-check-input" id={`feature-${index}-active`} name={`feature-${index}`} value="active" checked={feature.isActive} onChange={(e) => handleFeatureChange(index, e)} />
                      <label className="form-check-label" htmlFor={`feature-${index}-active`}>Active</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id={`feature-${index}-inactive`} name={`feature-${index}`} value="inactive" checked={!feature.isActive} onChange={(e) => handleFeatureChange(index, e)} />
                      <label className="form-check-label" htmlFor={`feature-${index}-inactive`}>Inactive</label>
                    </div>
                  </div>
                ))}
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="New Feature Name" value={newFeature} onChange={(e) => setNewFeature(e.target.value)} />
                  <button type="button" className="btn btn-outline-secondary" onClick={handleAddFeature}>Add Feature</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" onClick={handleClose}>Close</button>
              <button type="submit" className="btn btn-success">Add Subscription</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
