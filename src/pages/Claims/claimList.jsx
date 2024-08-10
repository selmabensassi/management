import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAddLine, RiDeleteBin2Line, RiMoreFill, RiEyeFill, RiPencilFill, RiDeleteBinFill } from 'react-icons/ri';
import axiosInstance from '../../config/axiosConfig';
import { Link } from 'react-router-dom';
import EditClaimStatus from './EditClaimStatus';

const ClaimList = ({ onDelete }) => {
  const [claims, setClaims] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentClaim, setCurrentClaim] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await axiosInstance.get(`/all`);
        const claimsData = response.data.claims;

        setClaims(claimsData);
      } catch (error) {
        console.error('Error fetching claims:', error.response ? error.response.data : error.message);
      }
    };

    fetchClaims();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/claims/${id}`);
      const updatedClaims = claims.filter(claim => claim._id !== id);
      setClaims(updatedClaims);
      onDelete(); 
    } catch (error) {
      console.error('Error deleting claim:', error.response ? error.response.data : error.message);
    }
  };

  const handleEditModal = (claim) => {
    setCurrentClaim(claim);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentClaim(null);
  };

  const updateClaimStatus = (id, status) => {
    setClaims(claims.map(claim => 
      claim._id === id ? { ...claim, status } : claim
    ));
  };

  return (
    <div className="table-responsive table-card mb-4">
      <table className="table align-middle table-nowrap mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Client</th>
            <th>Create Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, index) => (
            <tr key={index}>
              <td><a href="javascript:void(0);" className="fw-medium link-primary">{claim._id}</a></td>
              <td>{claim.title}</td>
              <td>{claim.coOwner ? `${claim.coOwner.first_name} ${claim.coOwner.last_name}` : 'N/A'}</td>
              <td>{new Date(claim.createdAt).toLocaleDateString()}</td>
              <td><span className={`badge ${claim.status === 'closed' ? 'badge-soft-success bg-success text-white' : 'badge-soft-warning bg-warning text-dark'} text-uppercase`}>{claim.status === 'closed' ? 'Closed' : 'Open'}</span></td>
              <td>
                <div className="d-flex gap-2">
                  <Link to={`/claim-dashboard/claim/${claim._id}/main`} className="btn btn-soft-secondary btn-sm">
                    <RiEyeFill className="align-middle" />
                  </Link>
                  <button className="btn btn-soft-secondary btn-sm" onClick={() => handleEditModal(claim)}>
                    <RiPencilFill className="align-middle" />
                  </button>
                  <button className="btn btn-soft-secondary btn-sm" onClick={() => handleDelete(claim._id)}>
                    <RiDeleteBinFill className="align-middle" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditModal && currentClaim && (
        <EditClaimStatus
          show={showEditModal}
          handleClose={handleCloseEditModal}
          claim={currentClaim}
          updateClaimStatus={updateClaimStatus}
        />
      )}
    </div>
  );
};

export default ClaimList;
