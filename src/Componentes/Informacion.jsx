import React from "react";
import PropTypes from "prop-types";

const Informacion = (props) => {
  return (
    <>
      <h1 class="text-center">{props.valor}</h1>
    </>
  );
};

Informacion.propTypes = {
  valor: PropTypes.string,
};

export default Informacion;
