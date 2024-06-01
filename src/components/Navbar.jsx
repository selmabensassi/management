import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import logo from '../../public/images/logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

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

          <div className="dropdown ms-1 topbar-head-dropdown header-item">
            <button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                id="header-lang-img"
                src="assets/images/flags/us.svg" // Ensure the path is correct
                alt="Header Language"
                height="20"
                className="rounded"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* Language Items */}
              {['us', 'spain', 'germany', 'italy', 'russia', 'china', 'french', 'ae'].map((lang) => (
                <a key={lang} href="javascript:void(0);" className="dropdown-item notify-item language py-2">
                  <img
                    src={`assets/images/flags/${lang}.svg`} // Ensure these paths are correct
                    alt="user-image"
                    className="me-2 rounded"
                    height="18"
                  />
                  <span className="align-middle">{lang}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="ms-1 header-item d-none d-sm-flex">
            <button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
              data-toggle="fullscreen"
            >
              <i className="bx bx-fullscreen fs-22"></i>
            </button>
          </div>

          <div className="ms-1 header-item d-none d-sm-flex">
            <button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
            >
              <i className="bx bx-moon fs-22"></i>
            </button>
          </div>

          <div className="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
            <button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-bell fs-22"></i>
              <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                {notifications.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
              <div className="dropdown-head bg-primary bg-pattern rounded-top">
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                    </div>
                    <div className="col-auto dropdown-tabs">
                      <span className="badge badge-soft-light fs-13"> {notifications.length} New</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-content position-relative" id="notificationItemsTabContent">
                <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                  <div data-simplebar style={{ maxHeight: '300px' }} className="pe-2">
                    {notifications.length > 0 ? (
                      notifications.map((notification, index) => (
                        <div key={index} className="text-reset notification-item d-block dropdown-item position-relative">
                          <div className="d-flex">
                            <div className="avatar-xs me-3">
                              <span className={`avatar-title bg-soft-${notification.type} text-${notification.type} rounded-circle fs-16`}>
                                <i className={notification.icon}></i>
                              </span>
                            </div>
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-2 lh-base">{notification.message}</h6>
                              </a>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> {notification.time}</span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input className="form-check-input" type="checkbox" value="" id={`all-notification-check0${index}`} />
                                <label className="form-check-label" htmlFor={`all-notification-check0${index}`}></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="dropdown-item text-muted">No notifications</div>
                    )}

                    <div className="my-3 text-center view-all">
                      <button type="button" className="btn btn-soft-success waves-effect waves-light">
                        View All Notifications <i className="ri-arrow-right-line align-middle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown ms-sm-3 header-item topbar-user">
            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-flex align-items-center">
                <img
                  className="rounded-circle header-profile-user"
                  src={user.avatar} // Make sure the user avatar path is correct
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
              <a className="dropdown-item" href="apps-chat.html">
                <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Messages</span>
              </a>

               <Link to="/taskboard/taskboard" className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1">
              <i className="align-middle"></i> <span>Taskboard</span>
             </Link>
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
