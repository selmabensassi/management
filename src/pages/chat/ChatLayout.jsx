import React, { useState } from 'react';
import ChatSidebar from './sidebarMSG';
import ChatContent from './content';

const ChatLayout = () => {
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
            <ChatSidebar setCurrentChat={setCurrentChat} />
            <ChatContent currentChat={currentChat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
