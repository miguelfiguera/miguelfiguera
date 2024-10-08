import React from "react";
import FreeCodeCamp from "../../graphic_resources/teachers_logos/fcc_primary_large.svg";
import { useRef, useEffect, useState } from "react";
import theOtherLogoOfTop from "../../graphic_resources/teachers_logos/odinformobile.svg";

export default function Home() {
  const myRefHome = useRef();
  const [visibleHome, setvisibleHome] = useState("myHidden");
  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && size < 650) {
          setvisibleHome("myshowMobile");
        } else if (entry.isIntersecting) {
          setvisibleHome("myShow");
        } else {
          setvisibleHome("myHidden");
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(myRefHome.current);
  }, []);

  const thisClass = size < 800 ? "container" : " row align-items-start";

  return (
    <div className={`container pt-5 ${visibleHome}`} ref={myRefHome} id="about">
      <h2 className="text-center fs-1 pt-5 pb-4 mb-5">About me</h2>

      <div className={thisClass}>
        <div className={"col"}>
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

          <p>
            Also, as part of the journey, I went back to college for a second
            degree, this time on software engineering and computer science at
            the UNETI, here on Venezuela.
          </p>

          <p className="pb-5">
            If you are looking for someone to develop your dream project, please
            feel free to{" "}
            <strong>
              <em>
                <a href="https://wa.me/584241727988"> contact me.</a>
              </em>
            </strong>
          </p>
        </div>
        <div className="col row">
          <img src={theOtherLogoOfTop} alt="Odin Project Logo" className="" />
          <img src={FreeCodeCamp} alt="Free Code Camp logo" className="mt-5" />
        </div>
      </div>
    </div>
  );
}
