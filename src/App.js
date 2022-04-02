import "./App.css";
import freeCodeCampLogo from "./imagenes/logo-freecodecamp.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
    </div>
  );
}

export default App;
