import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./styles/Card.css";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  //const [alerta, setAlerta] = useState("");
  const [moneda, setMoneda] = useState("");
  const [moneda_value, setMonedaValue] = useState("");
  const [valor, setValor] = useState("");

  const criptos = [
    { title: "Bitcoin", value: "BTC" },
    { title: "Ethereum", value: "ETH" },
    { title: "Binance Coin", value: "BNB" },
    { title: "Solana", value: "SOL" },
    { title: "Avax", value: "AVAX" },
    { title: "Fantom", value: "FTM" },
    { title: "Cardano", value: "ADA" },
  ];

  useEffect(() => {
    criptos.filter((c) => {
      if(moneda_value === c.value) {
        setMoneda(c.title);
      }
    })
  }, [moneda_value]);

  const getCripto = (option) => {
    fetch(
      `https://xlebo5qq46.execute-api.us-east-2.amazonaws.com/cripto/cripto?cripto=${option}`
    )
      .then((response) => {
        response.json().then((r) => {
          setValor(r.rate);
          console.log(r);
          console.log("getCripto");
          console.log(valor);
        });
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = e =>{
    e.preventDefault();
    getCripto(moneda_value);
    console.log("aceptar");
    console.log(valor);
   
    /*emailjs.send("service_b8vy0ww","template_6bj0bqz",{
      moneda: moneda,
      nombre: nombre,
      apellido: apellido,
      valor: valor,
      mail: mail,
      }, "7lgjb8FfgGLz2yZEt")
    .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
          console.log('FAILED...', err);
    });*/
  }

  /*console.log(moneda);
  console.log(moneda_value);
  console.log(valor);*/

  return (
    <div className="fondo">
      <form className="card fondo">
        <h1>Seleccione la información que desea recibir por mail:</h1>
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
            <p className="nombrelabel">Elegir Criptomoneda</p>
            <select
              name="moneda"
              onChange={(e) => setMonedaValue(e.target.value)
              }
              defaultValue=""
              className="btn btn-primary"
              id="btn-primary"
            >
              {criptos.map((c) => 
              <option value={c.value} title={c.title}>{c.title}</option>)}
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

        <button className="btn btn-primary" id="aceptar" onClick={handleSubmit}>
          Aceptar
        </button>
      </form>
    </div>
  );
}
