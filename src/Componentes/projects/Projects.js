import React from "react";
import { theProjects } from "../Helpers";
import ProjectCard from "./ProjectCard";
import {useRef,useEffect,useState} from 'react'


export default function Projects() {
  const myRef=useRef()
  const [visible,setVisible]=useState('myHidden')
  
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      const entry=entries[0]
      if(entry.isIntersecting){
      setVisible('myShow')}
      else{ setVisible('myHidden')}
    })
    observer.observe(myRef.current)
  },[])
  




  const projects = theProjects()
    .filter((e) => e.name !== "" && e.type === "portfolio")
    .map((e) => {
      return <ProjectCard object={e} key={e.id} />;
    });

  return (
    <div className={`container pt-5 pb-5 ${visible}`} ref={myRef}  id="projects">
      <h2 className="text-center fs-1">Projects</h2>

      <div className="container d-flex p-2 flex-wrap justify-content-center">
        {projects}
      </div>
    </div>
  );
}
