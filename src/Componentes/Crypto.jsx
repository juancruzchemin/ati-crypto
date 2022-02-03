import Desplegable from "./Desplegable";
import React from "react";

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
        <Desplegable titulo="Monedas" values={criptos} />
      </div>
    </div>
  );
};

export default Crypto;
