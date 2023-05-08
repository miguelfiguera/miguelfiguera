import React from "react";
import myPhoto from "../../graphic_resources/myphoto.jpeg";

export default function Header() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row align-items-start">
        <div className="col rounded-3"><img src={myPhoto} style={{maxWidth:'250px',maxHeight:'250px'}} alt="Profile Picture of Miguel Figuera" /></div>
        <div className="col">
          <h1>Miguel Figuera Q.</h1>
          <h2> web-developer</h2>
        </div>
      </div>
    </div>
  );
}
