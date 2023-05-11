import React from "react";
import { Link } from "react-router-dom";
import {useRef,useEffect,useState} from 'react'

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

  return (
    <div ref={myRef} className={`container mb-5 pb-3 ${visible}`} id="resume">
      <h2 className="text-center fs-1"> Resume</h2>
      <div className="row mb-5">
        <div className="container col text-center">
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
    </div>
  );
}
