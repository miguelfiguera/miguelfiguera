import React from "react";
import { Link } from "react-router-dom";
import {useRef,useEffect,useState} from 'react'
import { theCert } from "../Helpers";
import Certifications from'./Certifications'

export function Curriculums() {
  const myRef=useRef()
const [visible,setVisible]=useState('myHidden')

useEffect(()=>{
  const observer=new IntersectionObserver((entries)=>{
    const entry=entries[0]
    if(entry.isIntersecting){
    setVisible('myShow')}
    else{ setVisible('myHidden')}
  },{threshold:0.3})
  observer.observe(myRef.current)
},[])

const certifications=theCert().filter((e)=>e.photo!=='').map((e)=>{
  return <Certifications key={e.id} object={e}/>
})

  return (
    <div ref={myRef} className={`container mb-5 pb-3 ${visible}`} id="resume">
      <h2 className="text-center fs-1"> Resume</h2>
      <div className="row mb-5 mt-5">
        <div className="container col text-center border-end">
          <Link to="/miguelfiguera/dev" className="mb-3 btn btn-primary">
            {" "}
            Dev{" "}
          </Link>{" "}
          <br />
          <a href=""> Download Dev Cover Letter</a>
        </div>
        <div className="container col text-center">
          <Link to="/miguelfiguera/music" className="btn btn-primary mb-3">
            {" "}
            Music
          </Link>{" "}
          <br />
          <a href=""> Download Musician Cover Letter </a>
        </div>
      </div>
      <h2 className="fs-1 text-center">Certifications</h2>

      <div className="container d-flex p-2 flex-wrap justify-content-center">
      {certifications}
      </div>
    </div>
  );
}
