import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import SubscriberList from '../subscription/subscriber_list';

const SubscriptionCards = ({ SubscriptionData }) => {
  return (
    <div className="row">
      {SubscriptionData.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="text-muted mb-2">{item.title}</h6>
                  <h2 className="fw-bold mb-0">{item.count}</h2>
                  <small className="text-muted">{item.changeType}</small>
                </div>
                <div className="icon-circle bg-light text-primary">
                  <i className={`bx ${item.icon} bx-sm`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function SubscriptionManagement() {
  const [syndicateData, setSyndicateData] = useState([]);

  useEffect(() => {
    const fetchSyndicates = async () => {
      try {
        const response = await axiosInstance.get('/Syndic/all');
        setSyndicateData(response.data.data.syndics);
      } catch (error) {
        console.error('Failed to fetch syndicate data:', error);
      }
    };

    fetchSyndicates();
  }, []);

  const currentDate = new Date();

   const validSyndicates = syndicateData.filter(syndic => syndic.subscription_end_at);
  const subscribedCustomers = validSyndicates.length;
   const activeSubscriptions = syndicateData.filter(syndicate => new Date(syndicate.subscription_end_at) > currentDate).length;
  const expiringSubscriptions = syndicateData.filter(syndicate => new Date(syndicate.subscription_end_at) <= currentDate).length;
  const failedSubscriptions = syndicateData.filter(syndic => syndic.status === 'failed').length; 
  const SubscriptionData = [
    {
      title: "Subscribed Customers",
      count: subscribedCustomers,
      changeType: " ",
      icon: "ri-group-line"
    },
    {
      title: "Active Subscriptions",
      count: activeSubscriptions,
      changeType: " ",
      icon: "mdi-check-circle-outline"
    },
    {
      title: "Expiring Subscriptions",
      count: expiringSubscriptions,
      changeType: " ",
      icon: "ri-history-line"
    },
    {
      title: "Failed Subscriptions",
      count: failedSubscriptions,
      changeType: " ",
      icon: "bx bx-block"
    }
  ];

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row mb-4">
          <SubscriptionCards SubscriptionData={SubscriptionData} />
        </div>
        <SubscriberList />
      </div>
    </div>
  );
}
