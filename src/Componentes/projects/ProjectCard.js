import React from "react";

export default function ProjectCard({object}) {

//styling is pending for tomorrow

  return (
<div class="card border-secondary" style={{ backgroundColor:'transparent', color:'rgb(202,202,202)',width: "18rem"}}>
  <img  class="card-img-top" src={object.picture} alt={object.name}/>
  <div class="card-body">
    <h5 class="card-title">{object.name}</h5>
    <p class="card-text">{object.description}</p>
    <p className="card-text">{object.tools}</p>
    <a href={object.link}><i class="fa-link-simple"></i></a>
    <a href={object.code}> <i class="fa-solid fa-code fa-xl"></i> </a>
  </div>
</div>
)
}