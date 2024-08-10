import React, { useState } from 'react';
import AddBoardModal from './Modals'; 

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddBoard = (boardName) => {
    console.log('Board Added:', boardName);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Kanban Board</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">Tasks</a></li>
                <li className="breadcrumb-item active">Kanban Board</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-lg-auto">
              <div className="hstack gap-2">
                <button className="btn btn-primary" onClick={handleShowModal}>
                  <i className="ri-add-line align-bottom me-1"></i> Create Board
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-auto">
              <div className="search-box">
                <input type="text" className="form-control search" id="search-task-options" placeholder="Search for project, tasks..." />
                <i className="ri-search-line search-icon"></i>
              </div>
            </div>
            <div className="col-auto ms-sm-auto">
              <div className="avatar-group" id="newMembar">
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddBoardModal show={showModal} handleClose={handleCloseModal} handleAddBoard={handleAddBoard} />
    </div>
  );
};

export default Header;
