import "./App.css";
import Logo from "./components/Logo";
// import Tarea from "./components/Tarea";
import TareaFormulario from "./components/TareaFormulario";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <Tarea texto='Aprender React'/> */}
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
