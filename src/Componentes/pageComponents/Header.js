import React from "react";
import myPhoto from "../../graphic_resources/myphoto.jpeg";

export default function Header() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col text-center ">
          <h1 className="text-decoration-underline">Miguel Figuera Q.</h1>
          <h2 className="fw-lighter fs-5 fst-italic">
            {" "}
            FullStack web-developer
          </h2>
        </div>
      </div>
    </div>
  );
}
