import Desplegable from "./Desplegable";
import React from "react";
import "../Componentes/styles/crypto.css";

const Crypto = () => {
  const criptos = [
    { title: "Bitcoin", value: "BTC" },
    { title: "Ethereum", value: "ETH" },
    { title: "Binance Coin", value: "BNB" },
    { title: "Solana", value: "SOL" },
    { title: "Avax", value: "AVAX" },
    { title: "Fantom", value: "FTM" },
    { title: "Cardano", value: "ADA" },
  ];

  return (
    <div className="container">
      <div id="div" className="card">
        <div className="card-header">
          <h2 id="intro">
            En esta seccion podras encontrar los valores de las siguientes
            criptomonedas:
          </h2>
        </div>
        <div className="division">
          <div className="card-body">
            <p>Solana</p>
            <p>Avax</p>
            <p>Fantom</p>
            <p>Cardano</p>
            <p>Bitcoin </p>
            <p>Ethereum</p>
            <p>Binance Coin</p>
          </div>
        </div>
      </div>

      <div>
        <Desplegable titulo="Seleccione la moneda" values={criptos} />
      </div>
    </div>
  );
};

export default Crypto;
