import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import {MusicCv} from '../Helpers'
import Li from "./Li";

export default function CurriculumMusic() {
    const curriculum = MusicCv()
    
    const languages = curriculum.languages.map((e) => {
        return <Li object={e}/>;
      });
    
    const experience = curriculum.experience.map((e) => {
        return <Li object={e}/>;
      });
    
    const programmingLanguages =curriculum.programmingLanguages.map((e) => {
        return <Li object={e}/>;
      });
    const education = curriculum.education.map((e) => {
        return <Li object={e}/>;
      });
  
  
    return(
      <div className="overlay" >
      <div className="container">
        <div className="row align-items-start">
          <img src={curriculum.photo} className="col" alt="Miguel Figuera" />
          <h1 className="col">Miguel Figuera Q.</h1>
          <h2 className="">
            {" "}
            {curriculum.type === "music"
              ? "Jazz Drummer, arranger, composer"
              : "FullStack web-developer"}
          </h2>
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="container col">
              <h3>Education</h3>
              <ul>{education}</ul>
  
              <h3>Languages</h3>
              <ul>{languages}</ul>
            </div>
            <div className="container col">
              <h3>Experience</h3>
              <ul>{experience}</ul>
              </div>
  
              {curriculum.type === "music" ? null : (
                  <div>
                  <h3>Programming Languages</h3>
                <ul>{programmingLanguages}</ul>
                </div>
              )}
          </div>
        </div>
  
        <div className="modal-footer">
          <button className="btn btn-primary"> Print</button>
          <Link to='/'> <button className="btn btn-danger"> Return</button></Link>
        </div>
        </div>
      </div>)
}
