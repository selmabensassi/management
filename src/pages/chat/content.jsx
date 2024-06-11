import React from 'react';
import ChatHeader from './header';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatContent = ({ currentChat, userId }) => { 
  return (
    <div className="user-chat w-100 overflow-hidden border">
      {currentChat ? (
        <div className="chat-content d-lg-flex">
          <div className="w-100 overflow-hidden position-relative">
            <div className="position-relative" id="users-chat">
              <ChatHeader currentChat={currentChat} />
              <ChatMessages currentChat={currentChat} />
              <ChatInput currentChat={currentChat} userId={userId} /> 
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-content d-lg-flex justify-content-center align-items-center">
          <h5>Select a user to start chatting</h5>
        </div>
      )}
    </div>
  );
};

export default ChatContent;

