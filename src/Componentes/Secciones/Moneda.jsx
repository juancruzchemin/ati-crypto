import React from "react";
import Crypto from "../Crypto";
import Header from "./Header";

const Moneda = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <Crypto />
      </div>
    </div>
  );
};

export default Moneda;
