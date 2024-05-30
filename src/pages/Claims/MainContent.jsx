import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import TicketHeader from './TicketHeader';
import TicketDescription from './TicketDescription';
import Comments from './Comments';
import TicketDetails from './TicketDetails';
import { useParams } from 'react-router-dom';

const MainContent = () => {
  const { claim_id } = useParams();
  const [claimData, setClaimData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClaimData = async () => {
      try {
        console.log('claim id :', claim_id);
        const building_id = '65e8c16b40b8b3418ee6a075';
        const response = await axiosInstance.get(`/${building_id}/claims/${claim_id}`);
        console.log('response :', response);
        setClaimData(response.data.claim); // Accessing the claim property here
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClaimData();
  }, [claim_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mt-n4 mx-n4 mb-n5">
                <TicketHeader claim={claimData} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-9 col-lg-8">
              <div className="card">
                <TicketDescription claim={claimData} />
              </div>
              <div className="card">
                <Comments claim={claimData} />
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4">
              <TicketDetails claim={claimData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
