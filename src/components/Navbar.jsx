import React from 'react';
// import PropTypes from 'prop-types';

const Navbar = ({ user, notifications = [], messages = [], searchPlaceholder }) => {
  // Mock data to avoid errors until backend integration is complete
  user = {
    avatar: "assets/images/companies/img-8.png",
    name: "Anna Adame",
    role: "Founder"
  };

  notifications = [
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

  messages = [
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

  return (
    <header className="navbar" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: '#fff' }}>
      <div className="navbar-header" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div className="d-flex" style={{ flex: 1 }}>
          {/* LOGO */}
          <div className="navbar-brand-box horizontal-logo" style={{ display: 'flex', alignItems: 'center' }}>
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
            <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
              <div data-simplebar style={{ maxHeight: '320px' }}>
                {/* Recent Searches */}
                <div className="dropdown-header">
                  <h6 className="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                </div>

                <div className="dropdown-item bg-transparent text-wrap">
                  <a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">
                    how to setup <i className="mdi mdi-magnify ms-1"></i>
                  </a>
                  <a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">
                    buttons <i className="mdi mdi-magnify ms-1"></i>
                  </a>
                </div>

                {/* Pages */}
                <div className="dropdown-header mt-2">
                  <h6 className="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                </div>

                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <a key={index} href={notification.link} className="dropdown-item notify-item">
                      <i className={`${notification.icon} align-middle fs-18 text-muted me-2`}></i>
                      <span>{notification.title}</span>
                    </a>
                  ))
                ) : (
                  <div className="dropdown-item text-muted">No notifications</div>
                )}

                {/* Members */}
                <div className="dropdown-header mt-2">
                  <h6 className="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                </div>

                <div className="notification-list">
                  {messages.length > 0 ? (
                    messages.map((message, index) => (
                      <a key={index} href={message.link} className="dropdown-item notify-item py-2">
                        <div className="d-flex">
                          <img
                            src={message.avatar}
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">{message.name}</h6>
                            <span className="fs-11 mb-0 text-muted">{message.role}</span>
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="dropdown-item text-muted">No messages</div>
                  )}
                </div>
              </div>

              <div className="text-center pt-3 pb-1">
                <a href="pages-search-results.html" className="btn btn-primary btn-sm">
                  View All Results <i className="ri-arrow-right-line ms-1"></i>
                </a>
              </div>
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
                src="assets/images/flags/us.svg"
                alt="Header Language"
                height="20"
                className="rounded"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* Language Items */}
              <a href="javascript:void(0);" className="dropdown-item notify-item language py-2">
                <img
                  src="assets/images/flags/us.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">English</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/spain.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">Española</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/germany.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">Deutsche</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/italy.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">Italiana</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/russia.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">русский</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/china.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">中国人</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/french.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">français</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item notify-item language">
                <img
                  src="assets/images/flags/ae.svg"
                  alt="user-image"
                  className="me-2 rounded"
                  height="18"
                />
                <span className="align-middle">Arabic</span>
              </a>
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
                  src={user.avatar}
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
              <a className="dropdown-item" href="apps-tasks-kanban.html">
                <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Taskboard</span>
              </a>
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

// Mock data to avoid errors
// const user = {
//   avatar: "assets/images/companies/img-8.png",
//   name: "Anna Adame",
//   role: "Founder"
// };

// const notifications = [
//   {
//     link: "#",
//     icon: "bx bx-badge-check",
//     title: "Notification 1",
//     message: "Your Elite author Graphic Optimization reward is ready!",
//     type: "info",
//     time: "Just 30 sec ago"
//   },
//   {
//     link: "#",
//     icon: "bx bx-message-square-dots",
//     title: "Notification 2",
//     message: "You have received 20 new messages in the conversation",
//     type: "danger",
//     time: "2 hrs ago"
//   }
// ];

// const messages = [
//   {
//     link: "#",
//     avatar: "assets/images/users/avatar-2.jpg",
//     name: "Angela Bernier",
//     role: "Manager"
//   },
//   {
//     link: "#",
//     avatar: "assets/images/users/avatar-3.jpg",
//     name: "David Grasso",
//     role: "Web Designer"
//   }
// ];

// Navbar.propTypes = {
//   user: PropTypes.shape({
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     role: PropTypes.string,
//   }).isRequired,
//   notifications: PropTypes.arrayOf(
//     PropTypes.shape({
//       link: PropTypes.string,
//       icon: PropTypes.string,
//       title: PropTypes.string,
//       message: PropTypes.string,
//       type: PropTypes.string,
//       time: PropTypes.string,
//     })
//   ),
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       link: PropTypes.string,
//       avatar: PropTypes.string,
//       name: PropTypes.string,
//       role: PropTypes.string,
//     })
//   ),
//   searchPlaceholder: PropTypes.string,
// };

export default Navbar;
