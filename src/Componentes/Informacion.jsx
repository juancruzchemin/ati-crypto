import React from "react";
import Crypto from "./Crypto";

const Informacion = (props) => {
  return (
    <>
      <Crypto />
      <h1>{props.titulo}</h1>
    </>
  );
};

export default Informacion;
