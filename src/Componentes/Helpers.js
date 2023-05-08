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

const Tools = [
  {
    id: uniqid(),
    name: "bootstrap",
    level: "proficient",
    logo: bootstrapLogo,
  },
  {
    id: uniqid(),
    name: "git",
    level: "proficient",
    logo: gitLogo,
  },
  {
    id: uniqid(),
    name: "gitHub",
    level: "proficient",
    logo: gitHubLogo,
  },
  {
    id: uniqid(),
    name: "Jest",
    level: "intermediate",
    logo: jestLogo,
  },
  {
    id: uniqid(),
    name: "Mint",
    level: "proficient",
    logo: mintLogo,
  },
  {
    id: uniqid(),
    name: "Next.js",
    level: "intermediate",
    logo: nextLogo,
  },
  {
    id: uniqid(),
    name: "Nodejs",
    level: "proficient",
    logo: nodeLogo,
  },
  {
    id: uniqid(),
    name: "Npm",
    level: "proficient",
    logo: npmLogo,
  },
  {
    id: uniqid(),
    name: "Rails",
    level: "proficient",
    logo: railsLogo,
  },
  {
    id: uniqid(),
    name: "React",
    level: "proficient",
    logo: reactLogo,
  },
  {
    id: uniqid(),
    name: "TailWind",
    level: "intermediate",
    logo: tailwindLogo,
  },
  {
    id: uniqid(),
    name: "Vitejs",
    level: "Intermediate",
    logo: viteLogo,
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
  { id: uniqid(), name: "Python", level: "Begginer", logo: PythonLogo },
  { id: uniqid(), name: "Html5", level: "proficient", logo: htmlLogo },
  { id: uniqid(), name: "Css3", level: "proficient", logo: cssLogo },
];

const MusicCV = [
  {
    type: "music",
    photo: myPhoto,
    title: "B.A. In Jazz Music.",
    profile: "I'm a musician, arranger, teacher, and web-developer. ",
    profile2: "Going boldly to become a videogame Composer.",
    languages: {
      first: "English: conversational.",
      second: "Spanish: Native.",
    },
    experience: {
      BonnieRot: "BonnieRot Jazz Trio (2014-2015)",
      Malay: "Malay Reggae (2014-2015)",
      Toto: "Drum Teacher in Toto Music Las mercedes. (2014-2015)",
      Hebraica: "Drum Teacher in Hebraica. (2016-2017)",
      Yamaha: "Drum teacher for Audioline-Yamaha Venezuela. (2017)",
      Myself: "Private drum teacher (2018 to the date).",
      alsoMyself:
        "Functional Harmony & Non Functional Harmony teacher. (2016 to the date).",
    },
    programmingLanguages: {},
    education: {
      2017: "B.A In Jazz Music - UNEARTE (2017)",
      2020: "Diploma on techno - pedagogy and new technologies for teaching. UPEL(2020) ",
      2021: "Advanced trading course. CEIF (2021)",
    },
  },
];

const DeveloperCV = [
  {
    type: "dev",
    photo: myPhoto,
    title: "B.A. In Jazz Music.",
    profile: "I'm a musician, arranger, teacher, and web-developer. ",
    profile2: "Going boldly to become an ethical hacker.",
    languages: {
      first: "English: conversational.",
      second: "Spanish: Native.",
    },
    experience: {
      Projects: "See the projects on my website.",
    },
    programmingLanguages: {
      python: "Python: begginner.",
      ruby: "Ruby: proficient.",
      js: "JavaScript: proficient.",
      html: "Html5: proficient.",
      css3: "Css3: Proficient.",
    },
    education: {
      2023: "FreeCodeCamp.org Curriculum (2023)",
      2022: "The Odin Project: Ruby Path (2022)",
      2021: "Advanced trading course. CEIF (2021)",
      2020: "Diploma on techno - pedagogy and new technologies for teaching. UPEL(2020) ",
    },
  },
];

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
