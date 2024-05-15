import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';

import AddSubscriptionModal from '../subscription/add_subscription';
import DeleteSubscriptionModal from '../subscription/delete_subscription';

function SubscriptionList() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showAddSubscriptionModal, setShowAddSubscriptionModal] = useState(false);
  const [showDeleteSubscriptionModal, setShowDeleteSubscriptionModal] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axiosInstance.get('/subscriptions/all');
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Failed to fetch subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, [showAddSubscriptionModal, showDeleteSubscriptionModal]);  

   const openAddSubscriptionModal = () => setShowAddSubscriptionModal(true);
  const closeAddSubscriptionModal = () => setShowAddSubscriptionModal(false);

  const openDeleteSubscriptionModal = (subscription) => {
    console.log('Opening delete modal for:', subscription);
    setSelectedSubscription(subscription);
    setShowDeleteSubscriptionModal(true);
  };
  const closeDeleteSubscriptionModal = () => {
    console.log('Closing delete modal');
    setShowDeleteSubscriptionModal(false);
    setSelectedSubscription(null);
  };

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h4 className="card-title mb-0">Subscription Plans</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={openAddSubscriptionModal}
          style={{ marginLeft: 'auto', padding: '8px 16px' }}
        >
         <i className="ri-add-circle-fill"></i> New subscription plan
        </button>
      </div>
      <div className="card-body">
        <table className="table" style={{ marginBottom: '0' }}>
          <thead>
            <tr>
              <th>Subscription type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Joining Date</th>
              <th>Billing Frequency</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, index) => (
              <tr key={index}>
                <td>{sub.subscriptionType}</td>
                <td>{sub.description}</td>
                <td>{`$${sub.price}`}</td>
                <td>{new Date(sub.joiningDate).toLocaleDateString()}</td>
                <td>{sub.status}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => openDeleteSubscriptionModal(sub)}
                    style={{ padding: '4px 8px' }}
                  >
                    <i className="ri-delete-bin-6-line"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddSubscriptionModal && <AddSubscriptionModal show={showAddSubscriptionModal} handleClose={closeAddSubscriptionModal} />}
      {showDeleteSubscriptionModal && <DeleteSubscriptionModal show={showDeleteSubscriptionModal} handleClose={closeDeleteSubscriptionModal} subscriptionId={selectedSubscription._id} />}
    </div>
  );
}

export default SubscriptionList;