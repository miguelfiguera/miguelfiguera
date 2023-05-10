import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  //REMEMBER TO CENTER THE ITEMS
  return (
    <div className="container mt-5 mb-3">

      <div className="row align-items-start text-center mb-5">
      <Link className="fs-6 text-reset col" to="/#projects">
        projects
      </Link>

      <Link
        className="nav-link active text-reset col"
        aria-current="page"
        to="/#about"
      >
        about
      </Link>

      <Link className="nav-link text-reset col" to="/#tools">
        Tools
      </Link>

      <Link className="nav-link text-reset col" to="/#resume">
        resume
      </Link>
      <Link className="nav-link text-reset col" to="/#contact">
        Contact me
      </Link>

      <Link
        className="nav-link text-reset col"
        to="https://github.com/miguelfiguera"
      >
        gitHub
      </Link>
    </div>
    </div>
  );
}
