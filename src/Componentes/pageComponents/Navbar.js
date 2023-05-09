import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  //REMEMBER TO CENTER THE ITEMS
  return (
    <nav className=" mb-5 navbar navbar-expand-lg bg-body-tertiary  mt-0 pt-0 pb-0  "  >
      <div className="container-fluid mt-0 pt-0" style={{backgroundColor:'black'}}>
        <Link className="navbar-brand" to="/#projects">
          projects
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/#about">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#tools">
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#resume">
                resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://github.com/miguelfiguera">
                gitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
