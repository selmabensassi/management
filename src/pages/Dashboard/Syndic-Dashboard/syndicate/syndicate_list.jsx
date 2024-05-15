import React, { useState, useEffect } from 'react';
import AddSyndicateModal from '../syndicate/add_syndicate';
import DeleteModal from '../syndicate/delete_syndicate';
import axiosInstance from '../../../../config/axiosConfig';
import { Link } from 'react-router-dom';


export default function SyndicateList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSyndicate, setSelectedSyndicate] = useState(null);
  const [syndicates, setSyndicates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSyndicates = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get('/Syndic/all');
        setSyndicates(response.data.data.syndics);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSyndicates();
  }, [showAddModal, showDeleteModal]); 

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const openDeleteModal = (syndicate) => {
    setSelectedSyndicate(syndicate);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => setShowDeleteModal(false);

  return (
    <div className="card" id="SyndicatesList">
      <div className="card-header border-bottom-dashed">
        <div className="row g-4 align-items-center">
          <div className="col-sm">
            <h5 className="card-title mb-0">Syndicates List</h5>
          </div>
          <div className="col-sm-auto">
            <div className="d-flex flex-wrap align-items-start gap-2">
              <button className="btn btn-success" onClick={openAddModal}>
                <i className="ri-add-line align-bottom me-1"></i> Add Syndicates
              </button>
              <button className="btn btn-info">
                <i className="ri-file-download-line align-bottom me-1"></i> Import
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        {error && <div className="alert alert-danger">{error}</div>}
        {isLoading && <div className="text-center">Loading...</div>}
        {!isLoading && !error && (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light text-muted">
                <tr>
                  <th scope="col">#</th>
                  <th>Syndicate</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Joining Date</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {syndicates.map((syndicate, index) => (
                  <tr key={syndicate._id}>
                    <td>{index + 1}</td>
                    <td>{syndicate.first_name + ' ' + syndicate.last_name}</td>
                    <td>{syndicate.email}</td>
                    <td>{syndicate.phone_number ? syndicate.phone_number.number : ''}</td>
                    <td>{new Date(syndicate.createdAt).toLocaleDateString()}</td>
                    <td>{syndicate.type}</td>
                    <td>
                      <a href="#" className="text-primary" onClick={() => openDeleteModal(syndicate)}>
                        <i className="ri-delete-bin-5-fill"style={{ color: 'red' }}></i>
                      </a>
                       <Link to={`/syndic-dashboard/syndicate/meetOverview/${syndicate._id}`} className="text-primary">
                        <i className="ri-eye-fill"></i>
                        </Link> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AddSyndicateModal show={showAddModal} handleClose={closeAddModal} />
     {selectedSyndicate && (
  <DeleteModal show={showDeleteModal} handleClose={closeDeleteModal} syndicateId={selectedSyndicate._id} />
)}

    </div>
  );
}
