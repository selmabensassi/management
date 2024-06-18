import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAddLine, RiDeleteBin2Line, RiMoreFill, RiEyeFill, RiPencilFill, RiDeleteBinFill } from 'react-icons/ri';
import AddClaim from './Add_claim';
import axiosInstance from '../../config/axiosConfig';
import { Link } from 'react-router-dom';

const ClaimList = () => {
  const [claims, setClaims] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const building_id = '65e8c16b40b8b3418ee6a075';
        const response = await axiosInstance.get(`/${building_id}/claims`);
        console.log("Initial claim data:", response.data);
        const claimsData = response.data.claims;

        const detailedClaims = await Promise.all(claimsData.map(async (claim) => {
          const detailedResponse = await axiosInstance.get(`/${building_id}/claims/${claim._id}`);
          console.log("Detailed claim data:", detailedResponse.data);
          return detailedResponse.data.claim;
        }));

        setClaims(detailedClaims);
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
    } catch (error) {
      console.error('Error deleting claim:', error);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header border-0">
            <div className="d-flex align-items-center">
              <h5 className="card-title mb-0 flex-grow-1">Unsolved Tickets</h5>
              <div className="flex-shrink-0">
                <div className="d-flex flex-wrap gap-2">
                  {/* <button className="btn btn-danger add-btn" onClick={handleAddModal}>
                    <RiAddLine className="align-bottom me-1" /> Create Tickets
                  </button> */}
                  <button className="btn btn-secondary">
                    <RiDeleteBin2Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive table-card mb-4">
              <table className="table align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                      </div>
                    </th>
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
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="option1" />
                        </div>
                      </td>
                      <td><a href="javascript:void(0);" className="fw-medium link-primary">{claim._id}</a></td>
                      <td>{claim.title}</td>
                      <td>{claim.coOwner ? `${claim.coOwner.first_name} ${claim.coOwner.last_name}` : 'N/A'}</td>
                      <td>{new Date(claim.createdAt).toLocaleDateString()}</td>
                      <td><span className={`badge badge-soft-${claim.status === 'closed' ? 'success' : 'warning'} text-uppercase`}>{claim.status}</span></td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link 
                          to={`/claim-dashboard/claim/${claim._id}/main`} 
                          className="btn btn-soft-secondary btn-sm"
                          >
                     <RiEyeFill className="align-middle" />
                        </Link>
                          {/* <button 
                            className="btn btn-soft-secondary btn-sm"
                            onClick={() => navigate(`/claim-dashboard/claim/${claim._id}/main`)}
                          >
                            <RiEyeFill className="align-middle" />
                          </button> */}
                          <button 
                            className="btn btn-soft-secondary btn-sm"
                            onClick={() => navigate(`/claim-dashboard/claim/${claim._id}/edit`)}
                          >
                            <RiPencilFill className="align-middle" />
                          </button>
                          

                          <button 
                            className="btn btn-soft-secondary btn-sm"
                            onClick={() => handleDelete(claim._id)}
                          >
                            <RiDeleteBinFill className="align-middle" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div className="pagination-wrap hstack gap-2">
                <a className="page-item pagination-prev disabled" href="#">
                  Previous
                </a>
                <ul className="pagination listjs-pagination mb-0"></ul>
                <a className="page-item pagination-next" href="#">
                  Next
                </a>
              </div>
            </div>

            {/* Modal */}
            <div className="modal fade flip" id="deleteOrder" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body p-5 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style={{ width: '90px', height: '90px' }}>
                    </lord-icon>
                    <div className="mt-4 text-center">
                      <h4>You are about to delete an order?</h4>
                      <p className="text-muted fs-14 mb-4">Deleting your order will remove all of your information from our database.</p>
                      <div className="hstack gap-2 justify-content-center remove">
                        <button className="btn btn-link link-success fw-medium text-decoration-none" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                        <button className="btn btn-danger" id="delete-record">Yes, Delete It</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showAddModal && <AddClaim handleClose={handleAddModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimList;
