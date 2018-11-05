import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div id="header">
      <nav className="navbar navbar-expand-sm  fixed-top">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              COMMUNITY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LOCATION
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              OUR MENU
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              RECIPES
            </a>
          </li>
        </ul>
      </nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            CONTACT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            LOGIN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
