import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Moneda from "./Componentes/Secciones/Moneda";
import Reportes from "./Componentes/Secciones/Reportes";
import Inicio from "./Componentes/Secciones/Inicio";
import Informacion from "./Componentes/Informacion";
import Header from "./Componentes/Secciones/Header";

function App() {
  return (
    <div>
      <Header />
      <Router basename="/">
        <Route exact path="/" component={Inicio} />
        <Route exact path="/moneda" component={Moneda} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/reportes" component={Reportes} />
        <Route
          exact
          path="/informacion/:cryptoID"
          component={(props) => <Informacion {...props} titulo="vacio" />}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
