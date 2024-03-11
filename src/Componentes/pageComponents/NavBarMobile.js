import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBarMobile() {
  const [active, setActive] = useState(false);

  return (
    <div className="sticky-top mb-3">
    <div
      className={` container mt-5  myShow bg-dark rounded-3 fs-5`}
    >
      <span
        onClick={() => {
          setActive(!active);
        }}
      > <i class="fa-solid fa-bars" style={{color:'#CACACA',scale:'1.4'}}></i></span>

      {active && (
        <ul style={{listStyle:'none'}}>
          <li>
            <Link
              className="nav-link active text-reset col mx-2"
              aria-current="page"
              to="/miguelfiguera/#about"
            >
              about
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="nav-link text-reset col mx-2"
              to="/miguelfiguera/#tools"
            >
              tools
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="nav-link text-reset col mx-2"
              to="/miguelfiguera/#resume"
            >
              resume
            </Link>
          </li>
          <li>
            <Link
              className="nav-link text-reset col mx-2"
              to="/miguelfiguera/#contact"
            >
              contact me
            </Link>
          </li>
          <li>
            <Link
              className="nav-link text-reset col mx-2"
              to="https://github.com/miguelfiguera"
            >
              gitHub
            </Link>
          </li>
        </ul>
      )}
    </div></div>
  );
}
