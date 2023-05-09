import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import {DeveloperCv} from '../Helpers'
import Li from "./Li";

//Create a Modal using dialog may be, for this part

export default function CurriculumDev() {
 
 const curriculum=DeveloperCv()

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
    const skills= curriculum.skills.map((e) => {
      return <Li object={e} />;
    });
  
    const softSkills=curriculum.softSkills.map((e) => {
      return <Li object={e} />;
    });
  
    const contact=curriculum.contact.map((e) => {
      return <p className="col text-center fs-5">{e}</p>; });

      return (
        <div className="container-fluid">
          <div className="container pb-2">
            <div className="row align-items-start pt-5 mb-5">
              <img
                src={curriculum.photo}
                className="col  "
                alt="Miguel Figuera"
                style={{
                  maxWidth: "200px",
                  maxHeight: "250px",
                  borderRadius: "50%",
                }}
              />
    
              <div className="container col mt-5">
                {" "}
                <h1 className="text-center text-decoration-underline">
                  Miguel Figuera Q.
                </h1>
                <h2 className="text-center fst-italic fw-light">
                  {" "}
                  {curriculum.type === "music"
                    ? "Jazz Drummer, arranger, composer."
                    : "FullStack web-developer."}
                </h2>
              </div>
            </div>
            <div className="row border-bottom">
              <p className="fs-4">{curriculum.profile}</p>
              <p className="fs-4">{curriculum.profile2}</p>
            </div>
            <div className="container mt-2 mb-4 border-bottom">
              <div className="row align-items-start">
                <div className="container col">
                  <h3 className="mt-4">Education</h3>
                  <ul>{education}</ul>
    
                  <h3 className="mt-4">Languages</h3>
                  <ul>{languages}</ul>
    
                  <h3 className="mt-4">Skills</h3>
                  <ul>{skills}</ul>
                </div>
    
                <div className="container col">
                  <h3 className='mt-4'>Experience</h3>
                  <ul>{experience}</ul>
    
                  {curriculum.type === "music" ? null : (
                    <div>
                      <h3 className='mt-4' >Programming Languages</h3>
                      <ul>{programmingLanguages}</ul>
                    </div>
                  )}
    
                  <h3 className='mt-4'>Soft Skills</h3>
                  <ul>{softSkills}</ul>
                </div>
              </div>
            </div>
            <div className="container row text-center align-items-start">
              {contact}
            </div>
    
            <div className="modal-footer text-center mb-3">
              <button className="btn btn-primary mx-3"> Print</button>
              <Link to="/">
                {" "}
                <button className="btn btn-danger mx-3"> Return</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    