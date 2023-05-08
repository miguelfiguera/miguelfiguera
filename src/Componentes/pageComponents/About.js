import React from "react";
import Imges from "./imges";
import {theTools,theLanguages} from '../Helpers'


export default function About() {


const toolsLogos=theTools().map((e)=>{
    return <Imges key={e.id}  theObject={e} />
})

const Languages= theLanguages().map((e)=>{
        return <Imges key={e.id} theObject={e} />
    })


  return (
    <div className="row align-items-start flex-wrap">
      <h2 className="text-center mt-3 mb-3">Tools & Languages</h2>

      <div className="col text-center">
        <h3 className="text">Languages</h3>
        <div className="container mb-5">
        {Languages}
        </div>
      </div>
      <div className="col text-center">
        <h3 className="text-center">Dev-Tools</h3>
        <div className="container mb-5">

        {toolsLogos}
      </div>
      </div>
    </div>
  );
}
