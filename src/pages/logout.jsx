import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoutGif from '../assets/images/logout.gif'; 

const Logout = () => {

  return (
    <div className="auth-page-wrapper pt-5">
      <div className="auth-page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4">
                <div className="card-body p-4 text-center">
                  <div className="lord-icon-wrapper">
                     <img
                src={logoutGif}
                alt="Deleting..."
                style={{ width: '100px', height: '100px' }}
              />
                  </div>

                  <div className="mt-4 pt-2">
                    <h5>You are Logged Out</h5>
                    <p className="text-muted">
                      You have successfully logged out. Please sign in again to continue using the application.
                    </p>
                     <Link to="/auth/login" className="mt-4">
                <span className="btn btn-success w-100">Sign In</span>
              </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
