import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Informacion from "./Informacion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../Componentes/styles/desplegable.css";

const Desplegable = (props) => {
  const [valor, setValor] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    if (valor) {
      setText(<Informacion valor={valor} />);
    }
  }, [valor]);

  const getCripto = (option) => {
    fetch(
      `https://xlebo5qq46.execute-api.us-east-2.amazonaws.com/cripto/cripto?cripto=${option.value}`
    )
      .then((response) => {
        response.json().then((r) => {
          setValor(r.rate);
          console.log(r);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div id="card1">
        <div className="dropdown text-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.titulo}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {props.values.map((option) => (
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => getCripto(option)}
                >
                  {option.title}
                </button>
              </li>
            ))}
          </ul>
          {valor ? (
            <p id="text-center">
              {text}
              <h5 id="pregunta">
                ¿Quiere estar actualizado de los valores de esta cryptmoneda?
                <p id="link">
                  <a href="/reportes" id="link">
                    Ingrese acá
                  </a>
                </p>
              </h5>
            </p>
          ) : (
            <p className="text-center"></p>
          )}
        </div>
      </div>
    </>
  );
};

Desplegable.propTypes = {
  titulo: PropTypes.string,
  values: PropTypes.array,
};

export default Desplegable;
