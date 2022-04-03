import React from "react";
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp"
        className="freecodecamp-logo"
      />
    </div>
  );
};

export default Logo;
