import React from "react";
import OdinProject from "../../graphic_resources/teachers_logos/logo.svg";
import FreeCodeCamp from "../../graphic_resources/teachers_logos/fcc_primary_large.svg";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const myRefHome = useRef();
  const [visibleHome, setvisibleHome] = useState("myHidden");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setvisibleHome("myShow");
      } else {
        setvisibleHome("myHidden");
      }
    },{threshold:0.3});
    observer.observe(myRefHome.current);
  }, []);

  return (
    <div className={`container pt-5 ${visibleHome}`} ref={myRefHome} id="about">
      <h2 className="text-center fs-1 pt-5 pb-4 mb-5">About me</h2>

      <div className="row align-items-start">
        <div className="col">
          <p>
            I'm a Musician turn Developer, I finished my studies in music and
            later, through the pandemic, I choose a different path beginning a
            new journey. I've been studying with
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
            If you are looking for someone to develop, compose, or teach, please
            feel free to{" "}
            <strong>
              <em>
                <a href="https://wa.me/584241727988"> contact me.</a>
              </em>
            </strong>
          </p>
        </div>
        <div className="col row">
          <img src={OdinProject} alt="Odin Project Logo" className="" />
          <img src={FreeCodeCamp} alt="Free Code Camp logo" className="mt-5"/>

        </div>
      </div>
    </div>
  );
}