import React from "react";

export default function Certifications({object}) {
  return (
    <div
    className="card border-secondary rounded-3 mx-4 my-4"
    style={{
      backgroundColor: "transparent",
      color: "rgb(202,202,202)",
      width: "18rem",
    }}
  >
    <img
      className="card-img-top"
      src={object.picture}
      alt={object.name}
      style={{ height: "66%" }}
    />
    <div className="card-body" style={{ heigh: "33%" }}>
      <h5 className="card-title text-end"><strong>{object.title}</strong></h5>
      <div className="border-top pt-3 border-secondary text-end">
        <a href={object.link}>
          <i
            className="fa-solid fa-link fa-xl mx-3"
            style={{ color: "rgba(var(--bs-link-color-rgb)" }}
          ></i>
        </a>
      </div>
    </div>
  </div>)
}
