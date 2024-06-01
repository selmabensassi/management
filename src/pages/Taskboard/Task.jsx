import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="card tasks-box">
      <div className="card-body">
        <div className="d-flex mb-2">
          <h6 className="fs-15 mb-0 flex-grow-1 text-truncate task-title"><a href="apps-tasks-details.html" className="link-secondary">{task.title}</a></h6>
          <div className="dropdown">
            <a href="javascript:void(0);" className="text-muted" id={`dropdownMenuLink${task.id}`} data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
            <ul className="dropdown-menu" aria-labelledby={`dropdownMenuLink${task.id}`}>
              <li><a className="dropdown-item" href="apps-tasks-details.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
              <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
              <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
            </ul>
          </div>
        </div>
        <p className="text-muted">{task.description}</p>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            {task.labels.map(label => (
              <span key={label} className="badge badge-soft-primary">{label}</span>
            ))}
          </div>
          <div className="flex-shrink-0">
            <div className="avatar-group">
              {task.members.map(member => (
                <a key={member.name} href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title={member.name}>
                  <img src={member.avatar} alt="" className="rounded-circle avatar-xxs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer border-top-dashed">
        <div className="d-flex">
          <div className="flex-grow-1">
            <h6 className="text-muted mb-0">#{task.id}</h6>
          </div>
          <div className="flex-shrink-0">
            <ul className="link-inline mb-0">
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="text-muted"><i className="ri-eye-line align-bottom"></i> {task.views}</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="text-muted"><i className="ri-question-answer-line align-bottom"></i> {task.comments}</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> {task.attachments}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
