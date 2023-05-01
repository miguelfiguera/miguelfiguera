import { HashLink as Link } from 'react-router-hash-link';
import uniqid from 'uniqid'
import bootstrap from 'bootstrap'
import Home from './Componentes/Home';
import Header from './Componentes/Header';
import Navbar from './Componentes/Navbar'

function App() {
  return (
    <div className="App">
      Personal web Site
    <Header/>
    <Navbar/>
      <Home />
    </div>
  );
}

export default App;
