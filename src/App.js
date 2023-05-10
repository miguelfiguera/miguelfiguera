import { HashLink as Link } from "react-router-hash-link";
import uniqid from "uniqid";
import bootstrap from "bootstrap";
import GeneralHome from "./Componentes/GeneralHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurriculumDev from "./Componentes/c.vitae/CurriculumDev";
import CurriculumMusic from "./Componentes/c.vitae/CurriculumMusic";

function App() {
  const backGround = {
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(45deg, rgba(0,0,0,1) 38%, rgba(41,41,43,1) 81%)",
      color:'rgb(202,202,202)'
  };

  return (
    <BrowserRouter>
    <div className="App" style={backGround}>
      <Routes>
        <Route exact path="/miguelfiguera/" Component={GeneralHome} />
        <Route exact path="/miguelfiguera/dev" Component={CurriculumDev}/>
        <Route exact path="/miguelfiguera/music" Component={CurriculumMusic} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
