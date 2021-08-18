import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const Navbar = () => {
  const firebase = useFirebase();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4 className="logo">DMAK</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="text-primary mr-3">
                Add Student
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src={require("../../assets/admin.jpg")}
                  alt="admin"
                  height="30"
                  className="rounded-circle"
                />
                <span className="ml-2 navbar-text">Dhaval Mak</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={() => firebase.logout()}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
