import React from "react";
import PropTypes from "prop-types";

const Informacion = (props) => {
  return (
    <>
      <h2 class="text-center">{props.valor}</h2>
    </>
  );
};

Informacion.propTypes = {
  valor: PropTypes.string,
};

export default Informacion;
