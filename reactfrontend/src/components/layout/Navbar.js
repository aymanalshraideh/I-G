import React from "react";
import { useNavigate } from "react-router-dom";

import { NavLink ,Link } from "react-router-dom";
import logo from "../../large_anyvehicle.png";
const Navbar=()=>{
  const naviagte = useNavigate();
  function refreshPage() {
    window.location.reload(false);
  }
  function logOut() {
    localStorage.clear();
    naviagte('/');
    refreshPage();
    }
return (
    <>
    {/* Navbar Start */}
<nav className="navbar navbar-expand-lg  navbar-light sticky-top px-4 px-lg-5 py-lg-0 " style={{ color: 'black' }}>
  <NavLink to="index.html" className="navbar-brand d-flex align-items-center">
    
    
    <img src={logo} alt="Logo"  style={{ width: '200px' }}/>
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
            page 1
          </NavLink>
         
        </div>
      </div>
      <NavLink to="contact" className="nav-item nav-link dropdown-toggle ">
        Contact Us
      </NavLink>
      
      
      {
                  (!localStorage.getItem('user'))?
                  <>
                  <li className="nav-item pull-right">
                  <NavLink className="nav-link" to="login">Login</NavLink>
                </li>
                <li className="nav-item pull-right">
                  <NavLink className="nav-link" to="register">Register</NavLink>
                </li>
                  </>
                :
                <>
                {localStorage.getItem('role')=='admin' ?
                <NavLink to="dashboard" className="nav-item nav-link ">
                Dashboard
              </NavLink>
                :
                <NavLink to="user" className="nav-item nav-link">
                User Profile
              </NavLink> }
              {localStorage.getItem('user') ?
                <li className="nav-item">
                <NavLink onClick={logOut} className="nav-link" to="/">Logout</NavLink>
              </li>
                :
                
                  <>
               <NavLink className="nav-link" to="login">Login</NavLink>
                <NavLink to="register" className="nav-item nav-link ">
                REGISTER
              </NavLink></> }
                 
               </>
                 }
     
      
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