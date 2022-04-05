import "./App.css";
import Logo from "./components/Logo";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <Tarea texto='Aprender React'/> */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
