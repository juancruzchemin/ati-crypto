import React from "react";
import Menu from "../Menu";
import BarraLateral from "../BarraLateral";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#D6EAF8", height: "75px", display: "flex" }}
    >
      <BarraLateral
        msjPrincipal="Menu"
        elemento1="Cotizacion"
        elemento2="Recibir notificacion"
        elemento3="Inicio"
      ></BarraLateral>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginTop: "5px" }}>Bienvenido AppCrypto</h1>
      </div>
    </div>
  );
};

export default Header;
