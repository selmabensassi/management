import React, { useState, useEffect } from 'react';
import socket from './socket';
import axiosInstance from '../../config/axiosConfig';

const ChatInput = ({ currentChat }) => {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('auth/me');
      const userData = response.data.user;
      setUserId(userData._id); 
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() && userId) {
      socket.emit('message', {
        receiver: currentChat._id,
        message,
        userId, 
      });
      setMessage('');
    }
  };

  return (
    <div className="chat-input-section p-3 p-lg-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row g-0 align-items-center">
          <div className="col-auto">
            <button type="button" className="btn btn-link text-decoration-none emoji-btn" id="emoji-btn">
              <i className="bx bx-smile align-middle"></i>
            </button>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control chat-input bg-light border-light fs-13"
              id="chat-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-success chat-send waves-effect waves-light fs-13"
              onClick={handleSendMessage}
            >
              <i className="ri-send-plane-2-fill align-bottom"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
