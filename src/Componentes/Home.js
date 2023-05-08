import React from "react";

export default function Home() {
//had to check for the writing on this part... should be less than this.

  return (
    <main className="container">
        <div className="row">
      <p>
        I'm a Musician turn Developer, I finished my studies in music and later,
        through the pandemic, I choose a different path beginning a new journey. I've been studying with
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
        put together the formation needed, so paraphrasing Newton
        <strong>
          <em> I can see this far because some giants lifted me up</em>
        </strong>{" "}
        and I'm very thankful to them.
      </p>

      <p>
        In this webpage of mine, you can find: my projects (and links to them),
        credentials, personal projects, my different resumes (one for each job),
        and my cover letters. If you are looking for someone to develop,
        compose, or teach, please feel free to{" "}
        <strong>
          <em>
            <a href=""> contact me.</a>
          </em>
        </strong>
      </p>
      </div>

      <div className="row align-items-start">
        <h2 className="text-center">Tools & Languages</h2>

        <div className="col ">
            <h3 className="text-center">Languages</h3>
            JS, HTML, Ruby, CSS, SASS, Python(Beginner)
        </div>
        <div className="col">
            <h3 className="text-center">Dev-Tools</h3>
            React, Node.js, Rails, Git, Bootstrap, Jest, Minitest, Capybara, PostgreSQL, SQL, NPM, VSCode, gitHub, Bash. 
        </div>
      </div>
      
    </main>
  );
}
