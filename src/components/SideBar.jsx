import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';  
import '../assets/css/icons.min.css';      
import '../assets/css/app.min.css';        

export default function SideBar() {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        {/* Logo section */}
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </Link>
      </div>

      {/* Navigation items */}
      <ul className="navbar-nav" id="navbar-nav">
        <li className="menu-title"><span>Overview</span></li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link menu-link">
            <i className="las la-home"></i> <span>Dashboards</span>
          </Link>
        </li>
        <li className="menu-title"><i className="ri-more-fill"></i> <span>Navigation</span></li>
        <li className="nav-item">
          <Link to="/syndic-dashboard/syndicate" className="nav-link menu-link">
            <i className="ri-user-line"></i> <span>Syndicate Management</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/subscription-dashboard/pricing" className="nav-link menu-link">
            <i className="ri-calendar-line"></i> <span>Subscription Plan</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contract-dashboard/statistic" className="nav-link menu-link">
            <i className="ri-file-text-line"></i> <span>Contract Management</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/claim-dashboard/claim" className="nav-link menu-link">
            <i className="ri-service-line"></i> <span>Support Tickets</span>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#sidebarTickets" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTickets">
            <i className="ri-pie-chart-line"></i> <span>billing & Invoice</span>
          </a>
          <div className="collapse menu-dropdown" id="sidebarTickets">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <Link to="/invoices/list" className="nav-link">List View</Link>
              </li>
              <li className="nav-item">
                <Link to="/invoices/details" className="nav-link">Invoice Details</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
