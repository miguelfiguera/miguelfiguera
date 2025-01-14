import React, { useState } from "react";
import { DeveloperCv } from "../Helpers";
import Li from "./Li";
import LiLinks from "./LiLinks";
import { Link } from "react-router-dom";
//Create a Modal using dialog may be, for this part

export default function CurriculumDev() {
  const curriculum = DeveloperCv();

  const languages = curriculum.languages.map((e) => {
    return <Li object={e} />;
  });

  const experience = curriculum.experience.map((e) => {
    return <LiLinks object={e} />;
  });

  const programmingLanguages = curriculum.programmingLanguages.map((e) => {
    return <Li object={e} />;
  });
  const education = curriculum.education.map((e) => {
    return <Li object={e} key={e.id} />;
  });

  const skills1 = curriculum.skills
    .slice(0, curriculum.skills.length / 2 + 1)
    .map((e) => {
      return <Li object={e} />;
    });

  const skills2 = curriculum.skills
    .slice(curriculum.skills.length / 2 + 1)
    .map((e) => {
      return <Li object={e} />;
    });

  const softSkills = curriculum.softSkills.map((e) => {
    return <Li object={e} />;
  });

  const contact = curriculum.contact.map((e) => {
    return <p className="col text-center fs-5">{e}</p>;
  });

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
          <div className="container">
            <h3 className="mt-4 text-decoration-underline">Education</h3>
            <ul className="border-bottom pb-3">{education}</ul>

            <h3 className="mt-4 text-decoration-underline">Languages</h3>
            <ul className="border-bottom pb-3">{languages}</ul>

            <h3 className="mt-4 text-decoration-underline">Skills</h3>
            <div className="row border-bottom ms-3">
              <ul className="pb-3 col">{skills1}</ul>
              <ul className=" pb-3 col">{skills2}</ul>
            </div>
          </div>

          <h3 className="mt-4 text-decoration-underline">Experience</h3>
          <ul className="border-bottom pb-3">{experience}</ul>

          {curriculum.type === "music" ? null : (
            <div>
              <h3 className="mt-4 text-decoration-underline">
                Programming Languages
              </h3>
              <ul className="border-bottom pb-3">{programmingLanguages}</ul>
            </div>
          )}

          <h3 className="mt-4 text-decoration-underline">Soft Skills</h3>
          <ul className="">{softSkills}</ul>

          {/* footer stuff */}
        </div>
        <div className="container row text-center align-items-start">
          {contact}
        </div>

        <div className="modal-footer text-center mb-3 dont">
          <button
            className="btn btn-primary mx-3 dont"
            onClick={() => window.print()}
          >
            {" "}
            Print
          </button>
          <Link to="/miguelfiguera/">
            {" "}
            <button className="btn btn-danger mx-3"> Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
