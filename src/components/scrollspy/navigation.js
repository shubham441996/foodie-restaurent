import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav className="col-sm-3 col-4" id="myScrollspy">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#header">
              1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#map">
              2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#instagram">
              3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactus">
              4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
