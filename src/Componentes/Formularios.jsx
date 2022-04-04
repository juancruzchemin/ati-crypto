import React, { useEffect, useState } from "react";
import "./styles/Card.css";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [alerta, setAlerta] = useState("");
  const [moneda, setMoneda] = useState("");
  const [valor, setValor] = useState([]);

  return (
    <div className="fondo">
      <form className="card fondo">
        <label className="nombrelabel" htmlFor="">
          Nombre
        </label>
        <input
          className="nombreform"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label className="nombrelabel" htmlFor="">
          Apellido
        </label>

        <input
          className="nombreform"
          type="text"
          id="apellido"
          name="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label className="nombrelabel" htmlFor="">
          Mail
        </label>

        <input
          className="nombreform"
          type="text"
          id="mail"
          name="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <div className="monedaxalerta">
          <div className="btn">
            <p className="nombrelabel">Elegir Moneda</p>
            <select
              name="moneda"
              onChange={(e) => setMoneda(e.target.value)}
              defaultValue=""
              className="btn btn-primary"
              id="btn-primary"
            >
              <option value="bit">Bitcoin</option>
              <option value="eth">Etherium</option>
              <option value="sol">Solana</option>
              <option value="avx">Avax</option>
              <option value="fan">Fantom</option>
              <option value="car">Cardano</option>
              <option value="bnc">Binance Coin</option>
            </select>
          </div>

          <div className="btn">
            <p className="nombrelabel">Elegir tiempo de alerta</p>
            <select
              name="moneda"
              onChange={(e) => setMoneda(e.target.value)}
              defaultValue=""
              className="btn btn-primary"
              id="btn-primary"
            >
              <option value="1hs">1 hora</option>
              <option value="1dia">1 dia</option>
              <option value="1sem">1 semana</option>
              <option value="cambios">Cambios</option>
            </select>
          </div>
        </div>

        {/* <div className="fondoradio">
          <p className="nombreAlerta">Elegir alerta</p>
          <label htmlFor="" className="nombreradio">
            1-hs
          </label>
          <input
            type="radio"
            id="1hs"
            name="alerta"
            value="1hs"
            className="nombreradio"
            onChange={(e) => setAlerta(e.target.value)}
          />
          <label htmlFor="" className="nombreradio">
            1-día
          </label>
          <input
            type="radio"
            id="1dia"
            name="alerta"
            value="1dia"
            className="nombreradio"
            onChange={(e) => setAlerta(e.target.value)}
          />
          <label htmlFor="" className="nombreradio">
            1-sem
          </label>
          <input
            type="radio"
            id="1sem"
            name="alerta"
            value="1sem"
            className="nombreradio"
            onChange={(e) => setAlerta(e.target.value)}
          />
          <label htmlFor="" className="nombreradio">
            Cambios
          </label>
          <input
            type="radio"
            id="cambios"
            name="alerta"
            value="cambios"
            className="nombreradio"
            onChange={(e) => setAlerta(e.target.value)}
          />
        </div> */}

        <button className="btn btn-primary" id="aceptar">
          Aceptar
        </button>
      </form>
    </div>
  );
}
