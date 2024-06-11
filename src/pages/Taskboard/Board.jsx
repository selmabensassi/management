import React, { useState, useEffect } from 'react';
import Task from './Task';
import AddNewTaskModal from './addtask';
import axiosInstance from '../../config/axiosConfig';

const Board = ({ title, boardId }) => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get(`/board/${boardId}/tasks`);
      setTasks(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [boardId]);

  const handleAddTask = (taskDetails) => {
    setTasks([...tasks, taskDetails]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="tasks-list" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="d-flex mb-3">
        <div className="flex-grow-1">
          <h6 className="fs-14 text-uppercase fw-semibold mb-0">{title} <small className="badge bg-success align-bottom ms-1 totaltask-badge">{tasks.length}</small></h6>
        </div>
        <div className="flex-shrink-0">
          <div className="dropdown card-header-dropdown">
            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="fw-medium text-muted fs-12">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Priority</a>
              <a className="dropdown-item" href="#">Date Added</a>
            </div>
          </div>
        </div>
      </div>
      <div data-simplebar className="tasks-wrapper px-3 mx-n3" style={{ flexGrow: 1, overflowY: 'auto' }}>
        <div id={`${title.toLowerCase()}-task`} className="tasks">
          {tasks.map(task => (
            <Task key={task._id} task={task} />
          ))}
        </div>
      </div>
      <div className="my-3">
        <button className="btn btn-primary w-100" onClick={handleShowModal}>Add More</button>
      </div>
      <AddNewTaskModal show={showModal} handleClose={handleCloseModal} handleAddTask={handleAddTask} boardId={boardId} />
    </div>
  );
};

export default Board;
