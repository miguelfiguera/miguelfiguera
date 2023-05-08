import React from "react";
import { MusicCv, DeveloperCv } from "../Helpers";
import Curriculum from "./Curriculum";
import { useState } from "react";

export function Curriculums() {
  const [modalMusic, setModalMusic] = useState(false);
  const [modalDev, setModalDev] = useState(false);

  return (
    <div className="container ">
      <h2 className="text-center"> Resume</h2>
      <div className="row">
        <div className="container col">
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="container col">
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
