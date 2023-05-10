import React from "react";
import Imges from "./imges";
import {theTools,theLanguages} from '../Helpers'


export default function About() {


const toolsLogos=theTools().map((e)=>{
    return <Imges key={e.id}  theObject={e}/>
})

const Languages= theLanguages().map((e)=>{
        return <Imges key={e.id} theObject={e} />
    })

    const maxWidth={maxWidth:'450px'}

    
  return (
    <div className="row align-items-start flex-wrap pt-5 pb-5" id='tools'>
      <h2 className="text-center fs-1 mt-3 mb-3">Tools & Languages</h2>

      <div className="col text-center pb-5 mb-3">
        <h3 className="text-center">Languages</h3>
        <div className="container d-flex p-2 flex-wrap justify-content-center" style={maxWidth}>
        {Languages}
        </div>
      </div>
      <div className="col text-center">
        <h3 className="text-center">Dev-Tools</h3>
        <div className="container d-flex p-2 flex-wrap justify-content-center" style={maxWidth}>

        {toolsLogos}
      </div>
      </div>
    </div>
  );
}
