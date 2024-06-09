import React from 'react';
import userDummyImg from 'C:/Users/selma/Desktop/management/src/assets/images/users/user-dummy-img.jpg';

const ChatHeader = ({ currentChat }) => {
  return (
    <div className="p-3 user-chat-topbar">
      <div className="row align-items-center">
        <div className="col-sm-4 col-8">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 d-block d-lg-none me-3">
              <a href="javascript: void(0);" className="user-chat-remove fs-18 p-1">
                <i className="ri-arrow-left-s-line align-bottom"></i>
              </a>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                  <img src={userDummyImg} className="rounded-circle avatar-xs" alt="user" />
                  <span className="user-status"></span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate mb-0 fs-16">{currentChat.first_name}</h5>
                  <h5 className="text-truncate mb-0 fs-16">{currentChat.last_name}</h5>
                  <p className="text-truncate text-muted fs-14 mb-0">{currentChat.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-4">
          <ul className="list-inline user-chat-nav text-end mb-0">
            <li className="list-inline-item m-0">
              <div className="dropdown">
                <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i data-feather="search" className="icon-sm"></i>
                </button>
                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                  <div className="p-2">
                    <div className="search-box">
                      <input type="text" className="form-control bg-light border-light" placeholder="Search here..." id="searchMessage" />
                      <i className="ri-search-2-line search-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item d-none d-lg-inline-block m-0">
              <button type="button" className="btn btn-ghost-secondary btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                <i data-feather="info" className="icon-sm"></i>
              </button>
            </li>
            <li className="list-inline-item m-0">
              <div className="dropdown">
                <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i data-feather="more-vertical" className="icon-sm"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item d-block d-lg-none user-profile-show" href="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</a>
                  <a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</a>
                  <a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</a>
                  <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
