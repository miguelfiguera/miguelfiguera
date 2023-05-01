import { HashLink as Link } from 'react-router-hash-link';
import uniqid from 'uniqid'
import bootstrap from 'bootstrap'
import Home from './Componentes/Home';
import Header from './Componentes/Header';


function App() {
  return (
    <div className="App">
      Personal web Site
    <Header/>

      <Home />
    </div>
  );
}

export default App;
