import React from "react";

const Menu = () => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      style={{
        margin: "5px",
        float: "left",
        marginTop: "15px",
        marginLeft: "10px",
      }}
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio1">
        <a href="/inicio">Inicio</a>
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio2">
        <a href="/moneda">Moneda</a>
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio3">
        <a href="/reportes">Reportes</a>
      </label>
      
    </div>
  );
};

export default Menu;
