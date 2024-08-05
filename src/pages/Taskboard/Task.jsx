import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';

const Task = ({ task, onMoveTask, onDeleteTask }) => {
  const [boards, setBoards] = useState([]);
  const [loadingBoards, setLoadingBoards] = useState(true);
  const [boardsError, setBoardsError] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axiosInstance.get('/board/all');
        setBoards(response.data);
      } catch (err) {
        setBoardsError(err.message);
      } finally {
        setLoadingBoards(false);
      }
    };

    fetchBoards();
  }, []);

  const handleMove = (newBoardId) => {
    onMoveTask(task._id, newBoardId);
  };

  const handleDelete = () => {
    onDeleteTask(task._id);
  };

  return (
    <div className="card tasks-box">
      <div className="card-body">
        <div className="d-flex mb-2">
          <h6 className="fs-15 mb-0 flex-grow-1 text-truncate task-title">
            <span className="link-secondary" role="button">{task.taskTitle}</span>
          </h6>
          <div className="dropdown">
            <span
              className="text-muted"
              id={`dropdownMenuLink${task._id}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              <i className="ri-more-fill"></i>
            </span>
            <ul className="dropdown-menu" aria-labelledby={`dropdownMenuLink${task._id}`}>
              <li className="dropdown-item">
                <h6 className="fs-15">Move to...</h6>
                {loadingBoards ? (
                  <p className="dropdown-item">Loading...</p>
                ) : boardsError ? (
                  <p className="dropdown-item">Error: {boardsError}</p>
                ) : boards.length > 0 ? (
                  boards.map(board => (
                    <p key={board._id} role="button" onClick={() => handleMove(board._id)} className="dropdown-item">
                      {board.boardName}
                    </p>
                  ))
                ) : (
                  <p className="dropdown-item">No boards available</p>
                )}
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item text-danger" role="button" onClick={handleDelete}>
                <i className="ri-delete-bin-5-line align-bottom me-2 text-danger"></i> Delete
              </li>
            </ul>
          </div>
        </div>
        <p className="text-muted">{task.taskDescription}</p>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            {task.tags && task.tags.map(label => (
              <span key={label} className="badge badge-soft-primary">{label}</span>
            ))}
          </div>
          <div className="flex-shrink-0">
            <div className="avatar-group">
              {task.teamMembers && task.teamMembers.map(member => (
                <span
                  key={member}
                  className="avatar-group-item"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  title={member}
                  role="button"
                >
                  <img src={`path_to_default_avatar`} alt="" className="rounded-circle avatar-xxs" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer border-top-dashed">
        <div className="d-flex">
          <div className="flex-grow-1">
            <h6 className="text-muted mb-0">#{task._id}</h6>
          </div>
          <div className="flex-shrink-0">
            <ul className="link-inline mb-0">
              <li className="list-inline-item">
                <span className="text-muted"><i className="ri-eye-line align-bottom"></i> {task.views}</span>
              </li>
              <li className="list-inline-item">
                <span className="text-muted"><i className="ri-question-answer-line align-bottom"></i> {task.comments}</span>
              </li>
              <li className="list-inline-item">
                <span className="text-muted"><i className="ri-attachment-2 align-bottom"></i> {task.attachments}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
