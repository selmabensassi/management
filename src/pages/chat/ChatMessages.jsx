import React, { useEffect, useState, useRef } from 'react';
import socket from './socket';
import axiosInstance from '../../config/axiosConfig';
import moment from 'moment';
import userDummyImg from 'C:/Users/selma/Desktop/management/src/assets/images/users/user-dummy-img.jpg';

const ChatMessages = ({ currentChat }) => {
  const [messages, setMessages] = useState([]);
  const [adminId, setAdminId] = useState('');
  const [syndicId, setSyndicId] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (currentChat) {
        try {
          const response = await axiosInstance.get(`/msg/messages/${currentChat._id}`);
          setMessages(response.data.messages);
          const adminMessage = response.data.messages.find(msg => msg.senderType === 'admin');
          const syndicMessage = response.data.messages.find(msg => msg.senderType === 'syndic');

          if (adminMessage) {
            setAdminId(adminMessage.sender);
          }

          if (syndicMessage) {
            setSyndicId(syndicMessage.sender);
          }
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        }
      }
    };

    fetchMessages();

    const handleMessage = (message) => {
      if (message.receiver === currentChat._id || message.sender === currentChat._id) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
    };
  }, [currentChat,messages]);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  // }, [messages]);

  const messageStyle = (isAdmin) => ({
    maxWidth: '45%',
    borderRadius: '21px',
    backgroundColor: isAdmin ? '#25D366' : '#167BE6',
    color: '#ffffff',
    padding: '10px',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)',
    marginBottom: '0.5rem',
  });

  const timeStyle = {
    marginTop: '0.5rem',
    textAlign: 'right',
    color: '#F2F3F3',
    fontSize: '0.875rem',
  };

  return (
    <div className="chat-conversation p-3 p-lg-4" id="chat-conversation" style={{ maxHeight: '500px', overflowY: 'scroll' }} data-simplebar>
      <ul className="list-unstyled">
        {messages.map((msg, index) => {
          const isAdmin = msg.sender === adminId;
          const isSyndic = msg.sender === syndicId;

          return (
            <li
              key={index}
              className={`d-flex ${isAdmin ? 'justify-content-end' : 'justify-content-start'}`}
            >
              {!isAdmin && (
                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                  <img src={userDummyImg} className="rounded-circle avatar-xs" alt="user" />
                  <span className="user-status"></span>
                </div>
              )}
              <div style={messageStyle(isAdmin)}>
                <p className="mb-1">{msg.message}</p>
                <div style={timeStyle}>
                  <span>{moment(msg.createdAt).format('hh:mm A')}</span>
                  {isAdmin && <span className="ml-2">&#10004;</span>}
                </div>
              </div>
              {isAdmin && (
                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-0 ms-3">
                  <img src={userDummyImg} className="rounded-circle avatar-xs" alt="user" />
                  <span className="user-status"></span>
                </div>
              )}
            </li>
          );
        })}
        <div ref={messagesEndRef} />
      </ul>
    </div>
  );
};

export default ChatMessages;
