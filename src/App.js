import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moneda from "./Componentes/Secciones/Moneda";
import Reportes from "./Componentes/Secciones/Reportes";
import Inicio from "./Componentes/Secciones/Inicio";

function App() {
  return (
    <div>
      <Router basename="/">
        <Route exact path="/moneda" component={Moneda} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/reportes" component={Reportes} />
      </Router>
    </div>
  );
}

export default App;
