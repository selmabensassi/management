import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import AuthContext from '../contexts/auth-context';
import SideBarContext from '../contexts/sidebar-context';

export default function Navbar() {
	return (
    <header id="page-topbar">
      <div className="layout-width">
        <div className="navbar-header">
          <div className="d-flex">
            {/* Logo */}
            <div className="navbar-brand-box horizontal-logo">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="" height="17" />
                </span>
              </a>

              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height="17" />
                </span>
              </a>
            </div>

            {/* Hamburger Icon */}
            <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Search Bar */}
            <form className="app-search d-none d-md-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." autoComplete="off" id="search-options" value="" />
                <span className="mdi mdi-magnify search-widget-icon"></span>
                <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}