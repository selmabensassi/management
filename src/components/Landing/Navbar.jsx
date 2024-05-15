

import { Link } from "react-router-dom";
import logo_dark  from "../../assets/images/logo_dark.png";
import logo_light  from "../../assets/images/logo_light.png";
const Navbar = () => {
   
  
  return (
    <div  >
    <nav className="navbar navbar-expand-lg navbar-landing fixed-top" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={logo_dark} className="card-logo card-logo-dark" alt="logo dark" height="17"/>
                    <img src={logo_light} className="card-logo card-logo-light" alt="logo light" height="17"/>
                </a>
                <button className="navbar-toggler py-0 fs-20 text-body" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
                        <li className="nav-item">
                            <a className="nav-link fs-15 active" href="#hero">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-15" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-15" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-15" href="#plans">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-15" href="#reviews">Reviews</a>
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-link fs-15" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <div className="">
                        <Link to={'/auth/login'} className="btn btn-link fw-medium text-decoration-none text-dark">Sign
                            in</Link>
                        <Link to={'/auth/signup/syndic'} className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>

            </div>
        </nav>
        <div className="vertical-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
        </div>
  );
};

export default Navbar;
