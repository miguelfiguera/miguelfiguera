import React from "react";

export default function Home() {
  //had to check for the writing on this part... should be less than this.

  return (
    <div className="container pt-5 pb-5" id="about">
<h2 className="text-center fs-1 pt-5 pb-1 mb-3">About me</h2>

    <div className="row align-items-start">

      <div className="col" style={{maxWidth:'500px'}}>
        <p>
          I'm a Musician turn Developer, I finished my studies in music and
          later, through the pandemic, I choose a different path beginning a new
          journey. I've been studying with
          <strong>
            <a href="https://www.freecodecamp.org/perrosaurio725">
              {" "}
              freecodecamp.org
            </a>
            , <a href="https://www.theodinproject.com/"> The Odin Project </a>
          </strong>
          and other free resources online.{" "}
        </p>

        <p>
          I'm self-taught, but that is because{" "}
          <strong>
            <em>awesome people</em>
          </strong>{" "}
          put together the formation I needed, so paraphrasing Newton
          <strong>
            <em> I can see this far because some giants lifted me up</em>
          </strong>{" "}
          and I'm very thankful to all of them.
        </p>

        <p className="pb-5">
        If you are looking for someone to
          develop, compose, or teach, please feel free to{" "}
          <strong>
            <em>
              <a href="https://wa.me/584241727988"> contact me.</a>
            </em>
          </strong>
        </p>
      </div>
      <img src="" alt="" className="col" />
      </div>

    </div>
  );
}
