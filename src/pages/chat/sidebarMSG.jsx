import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import userDummyImg from 'C:/Users/selma/Desktop/management/src/assets/images/users/user-dummy-img.jpg';

const ChatSidebar = ({ setCurrentChat }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/msg/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="chat-leftsidebar border">
      <div className="px-4 pt-4 mb-4">
        <h5 className="mb-4">Chats</h5>
        <div className="search-box">
          <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
          <i className="ri-search-2-line search-icon"></i>
        </div>
      </div>
      <ul className="list-unstyled chat-list chat-user-list">
        {users.map((user) => (
          <li key={user._id} onClick={() => setCurrentChat(user)}>
            <a href="#" className="d-flex align-items-center">
              <div className="chat-user-img online align-self-center me-3 ms-0">
                <img src={userDummyImg} className="rounded-circle avatar-xs" alt="" />
                <span className="user-status"></span>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <h5 className="text-truncate mb-0 fs-16">{user.first_name}</h5>
                <h5 className="text-truncate mb-0 fs-16">{user.last_name}</h5>
                <p className="text-truncate text-muted mb-0">{user.status}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
