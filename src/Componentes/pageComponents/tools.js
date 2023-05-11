import React from "react";
import Imges from "./imges";
import { theTools, theLanguages } from "../Helpers";
import {useRef,useEffect,useState} from 'react'

export default function About() {
  const myRef=useRef()
  const [visible,setVisible]=useState('myHidden')
  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      const entry=entries[0]
      if(entry.isIntersecting){
      setVisible('myShow')}
      else{ setVisible('myHidden')}
    },{threshold:0.3})
    observer.observe(myRef.current)
  },[])

  const toolsLogos = theTools().map((e) => {
    return <Imges key={e.id} theObject={e} />;
  });

  const Languages = theLanguages().map((e) => {
    return <Imges key={e.id} theObject={e} />;
  });

  const maxWidth = { maxWidth: "450px" };

  const thisClass = size < 800 ? "container" : " row align-items-start";
const thisOtherClass = size < 800 ? "border-end" : "";

  return (
    <div ref={myRef} className={`${thisClass} flex-wrap pt-5 pb-5 ${visible}`} id="tools">
      <h2 className="text-center fs-1 mt-3 mb-3 pb-3">Tools & Languages</h2>

      <div className={`col text-center pb-5 mb-3 ${thisOtherClass}`}>
        <h3 className="text-center">Languages</h3>
        <div
          className="container d-flex p-2 flex-wrap justify-content-center"
          style={maxWidth}
        >
          {Languages}
        </div>
      </div>
      <div className="col text-center border-start">
        <h3 className="text-center">Dev-Tools</h3>
        <div
          className="container d-flex p-2 flex-wrap justify-content-center pb-5 mb-1 "
          style={maxWidth}
        >
          {toolsLogos}
        </div>
      </div>
    </div>
  );
}
