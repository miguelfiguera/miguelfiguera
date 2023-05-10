import React from "react";
import { theProjects } from "../Helpers";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects=theProjects().map((e)=>{
    return <ProjectCard object={e} key={e.id} />
  })


  return (<div className="container pt-5 pb-5" id='projects'>
    
    <h2 className="text-center fs-1">Projects</h2>

    <div> {/*projects*/}</div>

  </div>);
}
