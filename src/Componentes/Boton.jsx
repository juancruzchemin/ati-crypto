import React from "react";

const Boton = (props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "112px",
        }}
      >
        {props.nombre}
      </button>
    </>
  );
};

export default Boton;
