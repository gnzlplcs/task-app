import React from "react";
import taskAppLogo from "../imagenes/task-app-logo.png";
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={taskAppLogo}
        alt="Logo de freeCodeCamp"
        className="freecodecamp-logo"
      />
    </div>
  );
};

export default Logo;
