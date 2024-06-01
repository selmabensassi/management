import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTaskModal = ({ show, handleClose, handleAddTask }) => {
  const [taskData, setTaskData] = useState({
    projectName: '',
    taskTitle: '',
    taskDescription: '',
    taskImage: null,
    teamMembers: '',
    dueDate: new Date(),
    tags: '',
    taskProgress: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setTaskData(prevData => ({ ...prevData, dueDate: date }));
  };

  const handleFileChange = (e) => {
    setTaskData(prevData => ({ ...prevData, taskImage: e.target.files[0] }));
  };

  const handleSubmit = () => {
    handleAddTask(taskData);
    setTaskData({
      projectName: '',
      taskTitle: '',
      taskDescription: '',
      taskImage: null,
      teamMembers: '',
      dueDate: new Date(),
      tags: '',
      taskProgress: ''
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProjectName" className="mb-3">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              name="projectName"
              value={taskData.projectName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskTitle" className="mb-3">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task title"
              name="taskTitle"
              value={taskData.taskTitle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskDescription" className="mb-3">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task description"
              name="taskDescription"
              value={taskData.taskDescription}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskImage" className="mb-3">
            <Form.Label>Task Images</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group controlId="formTeamMembers" className="mb-3">
            <Form.Label>Add Team Members (Emails)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email addresses, separated by commas"
              name="teamMembers"
              value={taskData.teamMembers}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDueDate" className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
              selected={taskData.dueDate}
              onChange={handleDateChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formTags" className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tags"
              name="tags"
              value={taskData.tags}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskProgress" className="mb-3">
            <Form.Label>Task Progress</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter progress"
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

export default AddTaskModal;
