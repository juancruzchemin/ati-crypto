import React from "react";
import Formularios from "../Formularios";
import "../styles/StylesInicio.css";

const Inicio = () => {
  return (
    <div>
      <div id="iniciodiv1">
        <label className="btn btn-outline-primary" for="btnradio2" id="Boton">
          <a href="/moneda" id="a">
            Cotización en tiempo real de criptomonedas
          </a>
        </label>
      </div>

      <div id="iniciodiv2">
        <label className="btn btn-outline-primary" for="btnradio3" id="Boton">
          <a href="/reportes" id="a">
            Recibir notificaciones de criptomonedas vía mail
          </a>
        </label>
      </div>
    </div>
  );
};

export default Inicio;
