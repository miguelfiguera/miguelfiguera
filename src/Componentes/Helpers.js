import uniqid from "uniqid";
//My photo
import myPhoto from "../graphic_resources/myphoto.jpeg";
//Languages
import JSLogo from "../graphic_resources/language_logos/jslogo.svg";
import RubyLogo from "../graphic_resources/language_logos/rubylogo.svg";
import PythonLogo from "../graphic_resources/language_logos/python.svg";
import BashLogo from "../graphic_resources/language_logos/bash.svg";
import htmlLogo from "../graphic_resources/language_logos/html5.svg";
import cssLogo from "../graphic_resources/language_logos/css3.svg";
//Tools
import viteLogo from "../graphic_resources/tools_logos/vitejs.svg";
import gitLogo from "../graphic_resources/tools_logos/git.svg";
import gitHubLogo from "../graphic_resources/tools_logos/github.svg";
import jestLogo from "../graphic_resources/tools_logos/jest.svg";
import mintLogo from "../graphic_resources/tools_logos/mint.svg";
import nextLogo from "../graphic_resources/tools_logos/nextjs.svg";
import nodeLogo from "../graphic_resources/tools_logos/nodejsreal.svg";
import npmLogo from "../graphic_resources/tools_logos/npm.svg";
import railsLogo from "../graphic_resources/tools_logos/rails2.svg";
import reactLogo from "../graphic_resources/tools_logos/react.svg";
import tailwindLogo from "../graphic_resources/tools_logos/tailwind.svg";
import bootstrapLogo from "../graphic_resources/tools_logos/bootstrap.svg";
//Pictures of my projects :D
import SolYArtes from "../graphic_resources/project_pictures/solyartes.png";
import pixelSketch from "../graphic_resources/project_pictures/pixelsketching.png";
import connect4 from "../graphic_resources/project_pictures/Connect4.png";
import laVieja from "../graphic_resources/project_pictures/tictactoe.png";
import RandomQuote from "../graphic_resources/project_pictures/randomQuoteGenerator.png";
import MarkDownpart from "../graphic_resources/project_pictures/markDownPreviewer.png";
import creativeDirection from "../graphic_resources/project_pictures/gsapParallax.png";
//Certifications photos
import JavaScriptCertification from "../graphic_resources/certifications/Javascript.png";
import FrontEndLibraries from "../graphic_resources/certifications/frontend.png";
import pythonCert from "../graphic_resources/certifications/python.png";
import railsCert from "../graphic_resources/certifications/rails.png";
import sqlcert from "../graphic_resources/certifications/sql.png";

const Tools = [
  {
    id: uniqid(),
    name: "bootstrap",
    level: "proficient",
    logo: bootstrapLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "git",
    level: "proficient",
    logo: gitLogo,
    style: { color: "white", maxHeight: "50px", maxWidth: "50px" },
  },
  {
    id: uniqid(),
    name: "gitHub",
    level: "proficient",
    logo: gitHubLogo,
    style: { color: "white", maxHeight: "50px", maxWidth: "50px" },
  },
  {
    id: uniqid(),
    name: "Jest",
    level: "intermediate",
    logo: jestLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "Mint",
    level: "proficient",
    logo: mintLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "Next.js",
    level: "intermediate",
    logo: nextLogo,
    style: { color: "white", maxHeight: "50px", maxWidth: "50px" },
  },
  {
    id: uniqid(),
    name: "Nodejs",
    level: "proficient",
    logo: nodeLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "Npm",
    level: "proficient",
    logo: npmLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "Rails",
    level: "proficient",
    logo: railsLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "React",
    level: "proficient",
    logo: reactLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "TailWind",
    level: "intermediate",
    logo: tailwindLogo,
    style: "",
  },
  {
    id: uniqid(),
    name: "Vitejs",
    level: "Intermediate",
    logo: viteLogo,
    style: "",
  },
];

const Languages = [
  {
    id: uniqid(),
    name: "JavasCript",
    level: "proficient",
    logo: JSLogo,
  },
  { id: uniqid(), name: "Bash", level: "intermediate", logo: BashLogo },
  { id: uniqid(), name: "Ruby", level: "proficient", logo: RubyLogo },
  { id: uniqid(), name: "Python", level: "intermediate", logo: PythonLogo },
  { id: uniqid(), name: "Html5", level: "proficient", logo: htmlLogo },
  { id: uniqid(), name: "Css3", level: "proficient", logo: cssLogo },
];

const MusicCV = {
  type: "music",
  photo: myPhoto,
  title: "B.A. In Jazz Music.",
  profile: "I'm a musician, arranger, teacher, and web-developer. ",
  profile2: "Going boldly to become a videogame Composer.",
  languages: ["English: conversational.", "Spanish: Native."],
  experience: [
    "BonnieRot Jazz Trio (2014-2015)",
    "Malay Reggae (2014-2015)",
    "Drum Teacher in Toto Music Las mercedes. (2014-2015)",
    "Drum Teacher in Hebraica. (2016-2017)",
    "Drum teacher for Audioline-Yamaha Venezuela. (2017)",
    "Private drum teacher (2018 to the date).",
    "Freelancer-Arranger (2018 to the date)",
    "Functional Harmony & Non Functional Harmony teacher. (2016 to the date).",
  ],
  programmingLanguages: [],
  education: [
    "B.A In Jazz Music - UNEARTE (2017)",
    "Diploma on techno - pedagogy and new technologies for teaching. UPEL(2020) ",
    "Advanced trading course. CEIF (2021)",
  ],
  contact: ["Telf: +58-4241727988", "email: miguelqui725@gmail.com"],
  skills: [
    "MuseScore: intermediate.",
    "Reaper: intermediate.",
    "Virtual Instruments: intermediate.",
    "I like handwrited sheets.",
    "Functional Harmony: Advance",
    "Non Functional Harmony: Advance",
    "Arranging: Good, I prefer small formats but I like bigBands too.",
  ],
  softSkills: [
    "Problem Solver",
    "Organized",
    "Strong Discipline",
    "Good communication",
    "Conflict Management",
  ],
};

const DeveloperCV = {
  type: "dev",
  photo: myPhoto,
  title: "B.A. In Jazz Music.",
  profile: "FullStack Developer on NextJS and Ruby on Rails. ",
  //profile2: "Going boldly to become an ethical hacker.",
  languages: ["English: conversational.", "Spanish: Native."],
  experience: [
    { text: "Sistemas Globales ARC", link: "www.sistemasgarc.com.ve" },
    {
      text: "Vocacion Cientifica / WebDev",
      link: " https://miguelfiguera.github.io/vocacion-cientifica/",
    },
    {
      text: "Miguel Figuera",
      link: " https://miguelfiguera.github.io/miguelfiguera/",
    },
    { text: "AlphaComputer: 2021 - 2024 / FullStack Developer" },
    {
      text: "Planet Solar Las Antillas LLC: 2023-2024 / Quoter",
      link: "https://planetsolarpr.net/",
    },
    {
      text: "Towerware: 05/2024-11/2024 / Chief Technical Officer",
      link: "https://towerware.com/",
    },
    { text: "Digital Lab 2023 (ongoing) / fullStack Developer" },
    {
      text: "R&R Advisor 2024( Ongoing) / Chief Technical Officer",
      link: "https://rradvisor.net/",
    },
  ],
  programmingLanguages: [
    "Python: intermediate.",
    "Ruby: proficient.",
    "JavaScript: proficient.",
    "TypeScript: intermediate.",
    /*     "Html5: proficient.",
    "Css3: Proficient.", */
  ],
  education: [
    "Computer Science - UNETI (2023 - ongoing)",
    "FreeCodeCamp.org Curriculum (2023)",
    "The Odin Project: Ruby Path (2021)",
    "Diploma on techno - pedagogy and new technologies for teaching. UPEL(2020) ",
    "B.A. in Jazz Music - UNEARTE (2018)",
  ],
  contact: ["Telf: +58-4241727988", "email: miguelqui725@gmail.com"],
  skills: [
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "NextJS",
    "Nodejs",
    "Ruby on Rails",
    "Ruby",
    "Python",
    "Vitejs",
    "Heroku - Deployment",
    "Netlify",
    "Prisma ORM",
    "Relational Databases (MySql, Sqlite, PostgreSql)",
    "Non Relational Databases (MongoDB, Firebase)",
    "DigitalOcean",
    "Git - version manager",
    "Gmail Admin",
    "3CX Telephony",
    "API integration for third party services",
    "Twilio,Telnyx,Wavix -APIs",
  ],
  softSkills: [
    "Problem Solver",
    "Organized",
    "Strong Discipline",
    "Good communication",
    "Conflict Management",
  ],
};

const Projects = [
  {
    id: uniqid(),
    name: "",
    description: "",
    tools: "",
    link: "",
    code: "",
    picture: "",
    type: "portfolio",
  },
  {
    id: uniqid(),
    name: "Sol y Artes",
    description: "Static Page for a small Business.",
    tools: "React,Bootstrap",
    link: "https://miguelfiguera.github.io/sol-y-artes/",
    code: "https://github.com/miguelfiguera/sol-y-artes",
    picture: SolYArtes,
    type: "portfolio",
  },
  {
    id: uniqid(),
    name: "Tic-Tac-Toe",
    description: "Star Trek themed tic-tac-toe",
    tools: "Vanilla JS, Css3, Html5",
    link: "https://miguelfiguera.github.io/tic-tac-toe-js/",
    code: "https://github.com/miguelfiguera/tic-tac-toe-js",
    picture: laVieja,
    type: "portfolio",
  },
  {
    id: uniqid(),
    name: "Connect 4",
    description: "Simple game with Ruby",
    tools: "Ruby",
    link: "https://replit.com/@MiguelFiguera/Connect-Four#main.rb",
    code: "https://github.com/miguelfiguera/Connect-Four",
    picture: connect4,
    type: "",
  },
  {
    id: uniqid(),
    name: "Pixel Sketching",
    description: "singlepage toy app",
    tools: "Vanilla JS, html5, css3",
    link: "https://miguelfiguera.github.io/etch-a-sketch/",
    code: "https://github.com/miguelfiguera/etch-a-sketch/",
    picture: pixelSketch,
    type: "portfolio",
  },
  {
    id: uniqid(),
    name: "Random Quote Generator",
    description: "React project for FreeCodeCamp.org certification.",
    tools: "React+boostrap",
    link: "https://miguelfiguera.github.io/random-quote-generator",
    code: "https://github.com/miguelfiguera/random-quote-generator/",
    picture: RandomQuote,
    type: "portfolio",
  },

  {
    id: uniqid(),
    name: "MarkDown Previewer",
    description: "React project for the FreeCodeCamp.org certification",
    tools: "React, bootstrap, marked.js",
    link: "https://miguelfiguera.github.io/MarkDown-previewer/",
    code: "https://github.com/miguelfiguera/MarkDown-previewer",
    picture: MarkDownpart,
    type: "portfolio",
  },
  {
    id: uniqid(),
    name: "Scrolling Animation",
    description: "Bubble Message animation for static website.",
    tools: "GSAP, HTML, JS, CSS",
    link: "https://miguelfiguera.github.io/creativedirection_parallax/",
    code: "https://github.com/miguelfiguera/creativedirection_parallax",
    picture: creativeDirection,
    type: "portfolio",
  },
];

//Certificacions

const certifications = [
  {
    id: uniqid(),
    title: "",
    link: "",
    photo: "",
  },
  {
    id: uniqid(),
    title: "JavaScript Algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/perrosaurio725/javascript-algorithms-and-data-structures",
    photo: JavaScriptCertification,
  },
  {
    id: uniqid(),
    title: "Front End Libraries",
    link: "https://www.freecodecamp.org/certification/perrosaurio725/front-end-development-libraries",
    photo: FrontEndLibraries,
  },
  {
    title: "Ruby on Rails",
    link: "https://www.testdome.com/certificates/f9ee7ac387a848328f05bd8f9cae43fd",
    photo: railsCert,
  },
  {
    title: "SQL",
    link: "https://www.testdome.com/certificates/de391fb89b1d4e8ab1a0e0296a397cfd",
    photo: sqlcert,
  },
  {
    title: "Scientific Computing with Python",
    link: "https://www.freecodecamp.org/certification/perrosaurio725/scientific-computing-with-python-v7",
    photo: pythonCert,
  },
];

export function theCert() {
  return certifications;
}

export function theProjects() {
  return Projects;
}

export function theTools() {
  return Tools;
}

export function theLanguages() {
  return Languages;
}

export function MusicCv() {
  return MusicCV;
}

export function DeveloperCv() {
  return DeveloperCV;
}
