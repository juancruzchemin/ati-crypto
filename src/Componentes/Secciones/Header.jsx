import React from "react";
import Menu from "../Menu";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#D6EAF8", height: "75px" }}>
      <Menu />

      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
          marginRight: "260px",
        }}
      >
        <h1 style={{ marginTop: "5px" }}>Bienvenido AppCrypto</h1>
      </div>
    </div>
  );
};

export default Header;
