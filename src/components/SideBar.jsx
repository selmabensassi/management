import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import '../assets/css/app.min.css';

export default function SideBar() {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Close the billing dropdown when the sidebar collapses
    if (isSidebarCollapsed) {
      setIsBillingOpen(false);
    }
  }, [isSidebarCollapsed]);

  const toggleBillingMenu = () => {
    setIsBillingOpen(!isBillingOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app-menu navbar-menu ${isSidebarCollapsed ? 'collapsed' : ''}`}>
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
          <a
            href="#sidebarBilling"
            className="nav-link d-flex align-items-center"
            onClick={toggleBillingMenu}
            role="button"
            aria-expanded={isBillingOpen}
            aria-controls="sidebarBilling"
          >
            <i className="ri-pie-chart-line"></i>
            <span className="flex-grow-1">Billing & Invoice</span>
            <span className="arrow-icon">{isBillingOpen ? <RiArrowDownSLine /> : <RiArrowRightSLine />}</span>
          </a>
          <div
            className={`collapse ${isBillingOpen ? 'show' : ''}`}
            id="sidebarBilling"
            style={{ display: isBillingOpen ? 'block' : 'none' }}
          >
            <ul className={`nav nav-sm flex-column ${isSidebarCollapsed ? 'hidden' : ''}`}>
              <li className="nav-item">
                <Link to="/billing-dashboard/billing" className="nav-link">List View</Link>
              </li>
              <li className="nav-item">
                <Link to="/billing-dashboard/billing/add" className="nav-link">Invoice Details</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
