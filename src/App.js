import { HashLink as Link } from 'react-router-hash-link';
import uniqid from 'uniqid'
import bootstrap from 'bootstrap'
import Home from './Componentes/Home';
import Header from './Componentes/Header';
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      Personal web Site
    <Header/>
    <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
