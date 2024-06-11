import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import logo from '../../public/images/logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import userDummyImg from 'C:/Users/selma/Desktop/management/src/assets/images/users/avatar-2.jpg';

const Navbar = ({ searchPlaceholder }) => {
  const context = useContext(UserContext);

  if (!context) {
    return <div>Loading...</div>; 
  }

  const { userData: user, notifications, messages } = context;

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <header className="navbar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: '#fff' }}>
      <div className="navbar-header" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div className="d-flex" style={{ flex: 1 }}>
          {/* LOGO */}
          <div className="navbar-brand-box horizontal-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={logo} alt="logo" height="22" />
              </span>
              <span className="logo-lg">
                <img src={logo} alt="logo" height="17" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
            id="topnav-hamburger-icon"
            style={{ marginLeft: '20px' }}
          >
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* App Search */}
          <form className="app-search d-none d-md-block" style={{ marginLeft: '20px', flex: 1 }}>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder={searchPlaceholder || "Search..."}
                autoComplete="off"
                id="search-options"
              />
              <span className="mdi mdi-magnify search-widget-icon"></span>
              <span
                className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                id="search-close-options"
              ></span>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown d-md-none topbar-head-dropdown header-item">
            <button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-search fs-22"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Recipient's username"
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="mdi mdi-magnify"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown ms-sm-3 header-item topbar-user">
            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-flex align-items-center">
                <img
                  className="rounded-circle header-profile-user"
                  src={userDummyImg} 
                  alt="Header Avatar"
                />
                <span className="text-start ms-xl-2">
                  <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                    {user.name}
                  </span>
                  <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                    {user.role}
                  </span>
                </span>
              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <h6 className="dropdown-header">Welcome {user.name}!</h6>
              <a className="dropdown-item" href="pages-profile.html">
                <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Profile</span>
              </a>
              <div>
              <Link to="/chat/ChatApp" className="mdi mdi-calendar-check-middle text-muted fs-16 align-middle me-1">
              <i className="align-middle"></i> <span>Messages</span>
             </Link>
             </div>
             <div>
               <Link to="/taskboard/taskboard" className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1">
              <i className="align-middle"></i> <span>Taskboard</span>
             </Link>
             </div>
              <a className="dropdown-item" href="pages-faqs.html">
                <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Help</span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="pages-profile.html">
                <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">
                  Balance : <b>$5971.67</b>
                </span>
              </a>
              <a className="dropdown-item" href="pages-profile-settings.html">
                <span className="badge bg-soft-success text-success mt-1 float-end">New</span>
                <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Settings</span>
              </a>
              <a className="dropdown-item" href="auth-lockscreen-basic.html">
                <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Lock screen</span>
              </a>
              <a className="dropdown-item" href="auth-logout-basic.html">
                <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle" data-key="t-logout">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
