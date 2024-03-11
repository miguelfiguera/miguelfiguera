import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {useRef,useEffect,useState} from 'react'

export default function Navbar() {
const myRef=useRef()
const [visible,setVisible]=useState('myHidden')

useEffect(()=>{
  const observer=new IntersectionObserver((entries)=>{
    const entry=entries[0]
    if(entry.isIntersecting &&window.innerWidth<650 ){
      setVisible('myshowMobile')
    }
    else if (entry.isIntersecting) {
      setVisible("myShow");
    }
    else{ setVisible('myHidden')}
  },{threshold:0})
  observer.observe(myRef.current)
},[])


  return (
    <div className={ `sticky-top container mt-5 mb-3 ${visible} bg-dark rounded-3 fs-5`} ref={myRef}>
      <div className="row align-items-start text-center mb-5">
      {/*   <Link className="fs-6 text-reset col mx-2" to="/miguelfiguera/#projects">
          projects
        </Link> */}

        <Link
          className="nav-link active text-reset col mx-2"
          aria-current="page"
          to="/miguelfiguera/#about"
        >
          about
        </Link>

        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#tools"
        >
          tools
        </Link>

        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#resume"
        >
          resume
        </Link>
        <Link
          className="nav-link text-reset col mx-2"
          to="/miguelfiguera/#contact"
        >
          contact me
        </Link>

        <Link
          className="nav-link text-reset col mx-2"
          to="https://github.com/miguelfiguera"
        >
          gitHub
        </Link>
      </div>
    </div>
  );
}
