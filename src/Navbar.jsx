import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <NavLink className="navbar-brand" to="/">Ali Murtaza</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
        <nav className="menu_active">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </nav>
        </li>
        <li className="nav-item">
        <nav className="menu_active">
          <NavLink className="nav-link" to="/service">services</NavLink>
          </nav>
        </li>
        <li className="nav-item">
        <nav className="menu_active">
          <NavLink className="nav-link" to="/about">about us</NavLink>
          </nav>
        </li>
        <li className="nav-item">
        <nav className="menu_active">
          <NavLink className="nav-link" to="/contact">contact us</NavLink>
          </nav>
        </li>
      </ul>
 
    </div>
  </div>
</nav>
        </div>
        </div>
    </div>
    </>
    );
}

export default Navbar;