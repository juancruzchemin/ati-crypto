import React from "react";
import { useParams } from "react-router";
import Crypto from "./Crypto";

const Informacion = () => {
  const crypto = useParams().cryptoID; //con esto manipulo las monedas que se eligen

  return (
    <>
      <Crypto />
      <h1>{crypto}</h1>
    </>
  );
};

export default Informacion;
