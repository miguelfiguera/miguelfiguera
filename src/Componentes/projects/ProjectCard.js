import React from "react";

export default function ProjectCard({ object }) {
  //styling is pending for tomorrow

  return (
    <div
      class="card border-secondary rounded-3 mx-4 my-4 hovering-hover"
      style={{
        backgroundColor: "transparent",
        color: "rgb(202,202,202)",
        width: "18rem",
      }}
    >
      <img
        class="card-img-top"
        src={object.picture}
        alt={object.name}
        style={{ height: "66%" }}
      />
      <div class="card-body" style={{ heigh: "33%" }}>
        <h5 class="card-title text-end"><strong>{object.name}</strong></h5>
        <p class="card-text text-end">{object.description}</p>
        <p className="card-text text-end">
          Builded with: <strong>{object.tools}</strong>
        </p>
        <div className="border-top pt-3 border-secondary text-end">
          <a href={object.link}>
            <i
              class="fa-solid fa-link fa-xl mx-3"
              style={{ color: "rgba(var(--bs-link-color-rgb)" }}
            ></i>
          </a>
          <a href={object.code}>
            <i class="fa-solid fa-code fa-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
