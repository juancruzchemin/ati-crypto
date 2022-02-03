import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Informacion from "./Informacion";

const Desplegable = (props) => {
  // si toco bitcoin me tiene que traer el valor a la pantalla
  // por lo que tengo que hacer un onclick y en ese tiene q estar una funcion que me traiga la prop selecionada
  // console.log(props);
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
      <div class="dropdown text-center">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "130px" }}
        >
          {props.titulo}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
        {valor ? text : <p class="text-center">Seleccione el dropdown para ver el valor de la cripto que desee.</p>}
      </div>
    </>
  );
};

Desplegable.propTypes = {
  titulo: PropTypes.string,
  values: PropTypes.array,
};

export default Desplegable;
