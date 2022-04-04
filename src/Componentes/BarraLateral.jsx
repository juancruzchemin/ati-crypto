import React from "react";
import "./styles/barraLateral.css";

const Desplegable = ({ msjPrincipal, elemento1, elemento2, elemento3 }) => {
  return (
    <>
      <div id="barraxheader">
        <button
          id="primero"
          className="btn btn-outline-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span id="icono" className="material-icons">
            dehaze
          </span>
        </button>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            {msjPrincipal}
          </h5>
        </div>
        <hr />
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                {elemento3}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/moneda">
                {elemento1}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/reportes">
                {elemento2}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Desplegable;
