import React from "react";

export default function Home() {
  //had to check for the writing on this part... should be less than this.

  return (
    <div className="container" id="about">
      <div className="row">
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
          I am, in a way of speaking, self-taught, but that is because{" "}
          <strong>
            <em>awesome people</em>
          </strong>{" "}
          put together the formation I needed, so paraphrasing Newton
          <strong>
            <em> I can see this far because some giants lifted me up</em>
          </strong>{" "}
          and I'm very thankful to all of them.
        </p>

        <p>
          In this webpage of mine, you can find: my projects (and links to
          them), credentials, personal projects, my different resumes (one for
          each job), and my cover letters. If you are looking for someone to
          develop, compose, or teach, please feel free to{" "}
          <strong>
            <em>
              <a href="https://wa.me/584241727988"> contact me.</a>
            </em>
          </strong>
        </p>
      </div>


    </div>
  );
}
