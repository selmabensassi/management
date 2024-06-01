import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../config/axiosConfig';


// Create the context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);

  // Function to fetch user data from backend
  const fetchUserData = async () => {
    try {
      // Replace this with your actual API call
      const response = await axiosInstance.get('auth/me');
      const userData = await response.data.user;
      console.log("user data :", userData);
      
      // Mock notifications and messages
      const notificationsData = [
        {
          link: "#",
          icon: "bx bx-badge-check",
          title: "Notification 1",
          message: "Your Elite author Graphic Optimization reward is ready!",
          type: "info",
          time: "Just 30 sec ago"
        },
        {
          link: "#",
          icon: "bx bx-message-square-dots",
          title: "Notification 2",
          message: "You have received 20 new messages in the conversation",
          type: "danger",
          time: "2 hrs ago"
        }
      ];

      const messagesData = [
        {
          link: "#",
          avatar: "assets/images/users/avatar-2.jpg",
          name: "Angela Bernier",
          role: "Manager"
        },
        {
          link: "#",
          avatar: "assets/images/users/avatar-3.jpg",
          name: "David Grasso",
          role: "Web Designer"
        }
      ];
      
      setUser(userData);
      setNotifications(notificationsData);
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, notifications, messages }}>
      {children}
    </UserContext.Provider>
  );
};
