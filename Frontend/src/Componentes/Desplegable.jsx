import React from "react";

const Desplegable = () => {
  const mostrarValor = () => {
    document.getElementById("mostrarInfo").innerHTML = "Informacion";
  };

  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "130px" }}
        >
          Moneda
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" onClick={mostrarValor}>
              Moneda1
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={mostrarValor}>
              Moneda2
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={mostrarValor}>
              Moneda3
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Desplegable;
