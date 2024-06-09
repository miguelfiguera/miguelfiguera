import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import NavBarMobile from "./NavBarMobile";

export default function Navbar() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      window.addEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    }
    updateSize();
  }, [size]);

  if (size < 650) {
    return <NavBarMobile />;
  }

  return (
    <div
      className={`sticky-top container mt-5 mb-3 myShow bg-dark rounded-3 fs-5`}
    >
      <div className="row align-items-start text-center mb-5 py-1">
        {/*   <Link className="fs-6 text-reset col mx-2" to="/miguelfiguera/#projects">
          projects
        </Link> */}
        <Link
          className="nav-link active text-reset col mx-2"
          aria-current="page"
          to="/miguelfiguera/#about"
        >
          about
        </Link>

        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#tools"
        >
          tools
        </Link>

        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#resume"
        >
          resume
        </Link>
        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#certifications"
        >
          certifications
        </Link>
        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#contact"
        >
          contact me
        </Link>


        <Link
          className="nav-link text-reset col mx-2"
          to="https://github.com/miguelfiguera"
        >
          gitHub
        </Link>
      </div>
    </div>
  );
}
