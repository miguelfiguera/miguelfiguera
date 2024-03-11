import React from "react";


export default function Header() {

  return (
    <div className="container-fluid mt-5 mb-5" >

      <div className="row">
        <div className="col text-center ">
          <h1 className="text-decoration-underline mx-auto myName">Miguel Figuera Q.</h1>
          <br />
          <h2 className="fw-lighter fs-5 fst-italic mx-auto mt-2">
            {" "}
            FullStack web-developer
          </h2>
        </div>
      </div>
    </div>
  );
}
