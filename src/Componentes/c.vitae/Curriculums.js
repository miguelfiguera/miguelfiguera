import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Curriculums() {

  return (
    <div className="container ">
      <h2 className="text-center"> Resume</h2>
      <div className="row">
        <div className="container col">
        <Link to='/miguelfiguera/dev'> Dev</Link>
        <a href=""></a>
        </div>
        <div className="container col">
        <Link to='/miguelfiguera/music'> Music</Link>
        <a href=""></a>
        </div>
      </div>
    </div>
  );
}
