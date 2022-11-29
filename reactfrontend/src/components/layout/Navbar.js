import React from "react";

import { NavLink ,Link } from "react-router-dom";
import logo from "../../large_anyvehicle.png";
const Navbar=()=>{

return (
    <>
    {/* Navbar Start */}
<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
  <NavLink to="index.html" className="navbar-brand d-flex align-items-center">
    
    
    <img src={logo} alt="Logo" />
  </NavLink>
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto py-3 py-lg-0">
      
      <NavLink to="/" className="nav-item nav-link ">
        Home
      </NavLink>
      <div className="nav-item dropdown">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          About Us
        </Link>
        <div className="dropdown-menu bg-light m-0">
          <NavLink to="makkah" className="dropdown-item">
          page 1
          </NavLink>
          <NavLink to="madinah" className="dropdown-item">
          page 2
          </NavLink>
        </div>
      </div>
      <div className="nav-item dropdown">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Service
        </Link>
        <div className="dropdown-menu bg-light m-0">
          <NavLink to="feature.html" className="dropdown-item">
            Features
          </NavLink>
         
        </div>
      </div>
      <NavLink to="login" className="nav-item nav-link">
        LOGIN
      </NavLink>
      <NavLink to="register" className="nav-item nav-link ">
        REGISTER
      </NavLink>
      <NavLink to="user" className="nav-item nav-link">
        User Profile
      </NavLink>
      <NavLink to="contact" className="nav-item nav-link dropdown-toggle ">
        Contact Us
      </NavLink>
      <NavLink to="contact" className="btn btn-danger ">
        Call us Now
      </NavLink>
    </div>
  </div>
</nav>
{/* Navbar End */}
    
    </>
)
}
export default Navbar;