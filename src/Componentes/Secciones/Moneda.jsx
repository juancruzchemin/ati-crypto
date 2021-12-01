import React from "react";
import Crypto from "../Crypto";
import ValorCripto from "../ValorCripto";


const Moneda = () => {
  return (
    <div>
      <div className="container">
        <Crypto />
        <div className="nombreform">
        <ValorCripto ></ValorCripto></div>
      </div>
    </div>
  );
};

export default Moneda;
