import React from "react";
import Crypto from "../Crypto";
import ValorCripto from "../ValorCripto";


const Moneda = () => {
  return (
    <div>
      <div className="container">
        <Crypto />
        <ValorCripto/>
      </div>
    </div>
  );
};

export default Moneda;
