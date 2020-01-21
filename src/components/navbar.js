import React from "react";
import avalithLogo from "../img/avalith.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="TBA">
        <img className="logo" alt="img" src={avalithLogo} />{" "}
        <h5 className="logo2">Movie Challenge!</h5>
      </a>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      ></div>
    </nav>
  );
};

export default NavBar;
