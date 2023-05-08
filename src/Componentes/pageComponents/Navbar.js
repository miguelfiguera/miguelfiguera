import React from "react";
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar() {
  //REMEMBER TO CENTER THE ITEMS
  return (
    <nav className=" mb-5 navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          projects
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                gitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
