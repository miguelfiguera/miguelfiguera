import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

//Create a Modal using dialog may be, for this part

export default function Curriculum({ curriculum }) {
  const imgSize = {
    maxWidth: 200,
    maxHeight: 200,
  };

  const languages = () => {
    curriculum.languages.map((e) => {
      return <li>{e}</li>;
    });
  };

  const experience = () => {
    curriculum.experience.map((e) => {
      return <li>{e}</li>;
    });
  };

  const programmingLanguages = () => {
    curriculum.programmingLanguages.map((e) => {
      return <li>{e}</li>;
    });
  };

  const education = () => {
    curriculum.education.map((e) => {
      return <li>{e}</li>;
    });
  };

  return (
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

            {curriculum.type === "music" ? null : (
              <ul>{programmingLanguages}</ul>
            )}
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button className="btn btn-primary"> Print</button>
        <button className="btn btn-danger"> Return</button>
      </div>
    </div>
  );
}
