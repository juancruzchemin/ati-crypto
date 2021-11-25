import React from "react";
import { Link } from "react-router-dom";

const Desplegable = (props) => {
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
          {props.titulo}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link
              to={{ pathname: `/informacion/${props.eleccion1}` }}
              class="dropdown-item"
            >
              {props.eleccion1}
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: `/informacion/${props.eleccion2}` }}
              class="dropdown-item"
            >
              {props.eleccion2}
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: `/informacion/${props.eleccion3}` }}
              class="dropdown-item"
            >
              {props.eleccion3}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Desplegable;
