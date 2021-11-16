import React from "react";
import Boton from "./Boton";
import Desplegable from "./Desplegable";

const Crypto = () => {
  return (
    <div className="container">
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <h2>Seleccione la moneda que desea cotizar</h2>
      </div>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Desplegable
          titulo="Moneda"
          eleccion1="Bitcoin"
          eleccion2="Etherium"
          eleccion3="Solana"
        />
      </div>
      <h3 id="mostrarInfo"></h3>
      {/* <h3 style={{ marginRight: "110px" }}>Valor: </h3> */}
      {/* <Boton nombre="actualizar" /> */}
    </div>
  );
};

export default Crypto;
