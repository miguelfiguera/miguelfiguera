import React from "react";
import Spline from '@splinetool/react-spline';


export default function Header() {

  return (
    <div className="container-fluid mt-5 mb-5" >
      <div className="row">
      <Spline scene="https://prod.spline.design/5vRFZKeodUCulJDa/scene.splinecode" />

      </div>
      <div className="row">
        <div className="col text-center ">
          <h1 className="text-decoration-underline mx-auto myName">Miguel Figuera Q.</h1>
          <h2 className="fw-lighter fs-5 fst-italic mx-auto mySubtitle">
            {" "}
            FullStack web-developer
          </h2>
        </div>
      </div>
    </div>
  );
}
