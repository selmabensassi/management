import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { UserProvider } from '../components/UserContext'; // Adjust the path according to your folder structure

export default function MainLayout() {
  return (
    <UserProvider>
      <div id='layout-wrapper'>
        <Navbar />
        <SideBar />
      </div>
      <div className='vertical-overlay' />

      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
