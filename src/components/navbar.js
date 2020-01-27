import React from "react";
import avalithLogo from "../img/avalith.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <a className="navbar-brand" href="/">
        <img className="logo" alt="img" src={avalithLogo} />{" "}
        <h5 className="logo2">Movie Challenge!</h5>
      </a>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link" href="na">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="na">
                About
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
