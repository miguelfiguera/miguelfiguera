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
      " linear-gradient(45deg, rgba(0,0,0,1) 45%, rgba(70,68,73,1) 98%)",
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" Component={GeneralHome} />
        <Route exact path="/miguelfiguera/dev" Component={CurriculumDev}/>
        <Route exact path="/miguelfiguera/music" Component={CurriculumMusic} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
