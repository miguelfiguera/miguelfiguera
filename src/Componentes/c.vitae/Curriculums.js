import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Curriculums() {

  return (
    <div className="container mb-5 pb-3" id='resume'>
      <h2 className="text-center"> Resume</h2>
      <div className="row mb-5">
        <div className="container col text-center">
        <Link to='/miguelfiguera/dev' className="mb-3 btn btn-primary"> Dev </Link> <br />
        <a href=""> Download Dev Cover Letter</a>
        </div>
        <div className="container col text-center">
        <Link to='/miguelfiguera/music' className="btn btn-primary mb-3"> Music</Link> <br />
        <a href=""> Download Musician Cover Letter </a>
        </div>
      </div>
    </div>
  );
}
