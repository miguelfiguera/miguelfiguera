import uniqid from "uniqid";
//My photo
import myPhoto from '../graphic_resources/myphoto.jpeg'
//Languages
import JSLogo from "../graphic_resources/language_logos/jslogo.svg";
import RubyLogo from "../graphic_resources/language_logos/rubylogo.svg";
import PythonLogo from "../graphic_resources/language_logos/python.svg";
import BashLogo from "../graphic_resources/language_logos/bash.svg";
import htmlLogo from "../graphic_resources/language_logos/html5.svg";
import cssLogo from "../graphic_resources/language_logos/css3.svg";
//Tools
import viteLogo from '../graphic_resources/tools_logos/vitejs.svg'
import gitLogo from '../graphic_resources/tools_logos/git.svg'
import gitHubLogo from '../graphic_resources/tools_logos/github.svg'
import jestLogo from '../graphic_resources/tools_logos/jest.svg'
import mintLogo from '../graphic_resources/tools_logos/mint.svg'
import nextLogo from '../graphic_resources/tools_logos/nextjs.svg'
import nodeLogo from '../graphic_resources/tools_logos/nodejsreal.svg'
import npmLogo from '../graphic_resources/tools_logos/npm.svg'
import railsLogo from '../graphic_resources/tools_logos/rails2.svg'
import tailwindLogo from '../graphic_resources/tools_logos/tailwind.svg'



const Tools = [{}];

const Languages = [
  {
    id: uniqid(),
    name: "JavasCript",
    level: "proficient",
    logo: JSLogo,
  },
  {id:uniqid(), name:'Bash', level:'intermediate',logo: BashLogo},
  { id: uniqid(), name: "Ruby", level: "proficient", logo: RubyLogo },
  { id: uniqid(), name: "Python", level: "Begginer", logo: PythonLogo },
  { id: uniqid(), name: "Html5", level: "proficient", logo: htmlLogo },
  { id: uniqid(), name: "Css3", level: "proficient", logo: cssLogo },
];

const Curriculum = [{
    music:{
        photo:myPhoto,
        experience:{},
        education:{},

    }
}]