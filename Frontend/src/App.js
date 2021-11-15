import "./App.css";
import Crypto from "./Componentes/Crypto";
import Menu from "./Componentes/Menu";
import Header from "./Componentes/Secciones/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Crypto />
      </div>
    </div>
  );
}

export default App;
