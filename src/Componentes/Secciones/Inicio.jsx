import React from "react";
import Formularios from "../Formularios";
import "../styles/StylesInicio.css";

const Inicio = () => {
  return (
    <div>
      {/* <Formularios></Formularios> */}
      <div id="iniciodiv1">
        <label className="btn btn-outline-primary" for="btnradio2" id="Boton">
          <a href="/moneda" id="a">
            Cotizacion en tiempo real de CryptoMonedas
          </a>
        </label>
      </div>

      <div id="iniciodiv2">
        <label className="btn btn-outline-primary" for="btnradio3" id="Boton">
          <a href="/reportes" id="a">
            Recibir notificaciones de CryptoMonedas
          </a>
        </label>
      </div>
    </div>
  );
};

export default Inicio;
