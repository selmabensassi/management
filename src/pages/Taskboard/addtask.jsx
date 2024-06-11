import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axiosInstance from '../../config/axiosConfig';

const AddNewTaskModal = ({ show, handleClose, handleAddTask, boardId }) => {
  const [taskData, setTaskData] = useState({
    projectName: '',
    taskTitle: '',
    taskDescription: '',
    taskImage: null,
    teamMembers: '',
    dueDate: new Date().toISOString().split('T')[0],
    tags: '',
    taskProgress: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleFileChange = (e) => {
    setTaskData({ ...taskData, taskImage: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('projectName', taskData.projectName);
      formData.append('taskTitle', taskData.taskTitle);
      formData.append('taskDescription', taskData.taskDescription);
      if (taskData.taskImage) {
        formData.append('taskImage', taskData.taskImage);
      }
      formData.append('teamMembers', taskData.teamMembers);
      formData.append('dueDate', taskData.dueDate);
      formData.append('tags', taskData.tags);
      formData.append('taskProgress', taskData.taskProgress);
      formData.append('board', boardId);

      // Logging FormData to check the data being sent
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      const response = await axiosInstance.post('/task', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      handleAddTask(response.data);
      setTaskData({
        projectName: '',
        taskTitle: '',
        taskDescription: '',
        taskImage: null,
        teamMembers: '',
        dueDate: new Date().toISOString().split('T')[0],
        tags: '',
        taskProgress: ''
      });
      handleClose();
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProjectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              name="projectName"
              value={taskData.projectName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              name="taskTitle"
              value={taskData.taskTitle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter task description"
              name="taskDescription"
              value={taskData.taskDescription}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskImage">
            <Form.Label>Task Image</Form.Label>
            <Form.Control
              type="file"
              name="taskImage"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group controlId="formTeamMembers">
            <Form.Label>Team Members</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter team members"
              name="teamMembers"
              value={taskData.teamMembers}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tags"
              name="tags"
              value={taskData.tags}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskProgress">
            <Form.Label>Task Progress</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task progress"
              name="taskProgress"
              value={taskData.taskProgress}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewTaskModal;
