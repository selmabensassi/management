import React, { useState } from 'react';
import AddClaim from './Add_claim';

const ClaimList = () => {
  // Mock data
  const claims = [
    { id: "#VLZ001", title: "Error message when placing an order?", client: "Tonya Noble", assignedTo: "James Morris", createDate: "08 Dec, 2021", dueDate: "25 Jan, 2022", status: "Inprogress", priority: "High" },
    // ...other claims
  ];

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
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
                  <button className="btn btn-danger add-btn" onClick={handleAddModal}>
                    <i className="ri-add-line align-bottom me-1"></i> Create Tickets
                  </button>
                  <button className="btn btn-secondary">
                    <i className="ri-delete-bin-2-line"></i>
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
                    <th>Assigned To</th>
                    <th>Create Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Priority</th>
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
                      <td><a href="javascript:void(0);" className="fw-medium link-primary">{claim.id}</a></td>
                      <td>{claim.title}</td>
                      <td>{claim.client}</td>
                      <td>{claim.assignedTo}</td>
                      <td>{claim.createDate}</td>
                      <td>{claim.dueDate}</td>
                      <td><span className="badge badge-soft-warning text-uppercase">{claim.status}</span></td>
                      <td><span className="badge bg-danger text-uppercase">{claim.priority}</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ri-more-fill align-middle"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</button></li>
                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li>
                            <li><a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteOrder"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                          </ul>
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
