import React from 'react';
import Avatar from './EditClaimStatus';

const TicketHeader = ({ claim }) => {
  if (!claim) return null;

  const { title, status, createdAt, updatedAt, coOwner } = claim;

  return (
    <div className="bg-soft-warning">
      <div className="card-body pb-4 mb-5">
        <div className="row">
          <div className="col-md">
            <div className="row align-items-center">
              <div className="col-md-auto">
                <Avatar src="assets/images/companies/img-4.png" />
              </div>
              <div className="col-md">
                <h4 className="fw-semibold" id="ticket-title">{title}</h4>
                <div className="hstack gap-3 flex-wrap">
                  <div className="text-muted"><i className="ri-building-line align-bottom me-1"></i><span id="ticket-client">{coOwner?.name}</span></div>
                  <div className="vr"></div>
                  <div className="text-muted">Create Date : <span className="fw-medium" id="create-date">{new Date(createdAt).toLocaleDateString()}</span></div>
                  <div className="vr"></div>
                  <div className="text-muted">Last Update : <span className="fw-medium" id="due-date">{new Date(updatedAt).toLocaleDateString()}</span></div>
                  <div className={`badge rounded-pill bg-${status === 'opened' ? 'info' : 'success'} fs-12`} id="ticket-status">{status}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-auto mt-md-0 mt-4">
            <div className="hstack gap-1 flex-wrap">
              <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn active">
                <span className="avatar-title bg-transparent fs-15"><i className="ri-star-fill"></i></span>
              </button>
              <button type="button" className="btn py-0 fs-16 text-body" id="settingDropdown" data-bs-toggle="dropdown">
                <i className="ri-share-line"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="settingDropdown">
                <li><a className="dropdown-item" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                <li><a className="dropdown-item" href="#"><i className="ri-share-forward-fill align-bottom me-2 text-muted"></i> Share with</a></li>
                <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
              </ul>
              <button type="button" className="btn py-0 fs-16 text-body"><i className="ri-flag-line"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketHeader;
